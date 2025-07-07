import React, { useEffect, useState } from "react";
import { Cards } from "./Cards";
import { imgs } from "../data";
import { Modal } from "./Modal";

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const Board = () => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [scores, setScores] = useState({ 1: 0, 2: 0 });

    const createBoard = () => {
        const duplicatedCards = imgs.flatMap((img, i) => {
            const duplicate = {
                ...img,
                id: img.id + imgs.length
            }
            return [img, duplicate]
        });

        const newCards = shuffleArray(duplicatedCards).map(card => ({
            ...card,
            flipped: false,
            matched: false,
        }));

        setCards(newCards);
    }

    useEffect(() => {
        createBoard();
    }, []);

    const handleCardClick = (id) => {
        if (isDisabled) return;

        const newCards = [...cards];
        const currentCard = newCards.find(card => card.id === id);
        if (currentCard.flipped || currentCard.matched) return;

        currentCard.flipped = true;
        const newFlippedCards = [...flippedCards, currentCard];
        setFlippedCards(newFlippedCards);
        setCards(newCards);

        if (newFlippedCards.length === 2) {
            setIsDisabled(true);
            const [first, second] = newFlippedCards;

            if (first.img === second.img) {
                first.matched = true;
                second.matched = true;
                setScores(prev => ({ ...prev, [currentPlayer]: prev[currentPlayer] + 1 }));
                setTimeout(() => {
                    setFlippedCards([]);
                    setIsDisabled(false);
                    checkGameOver(newCards);
                }, 800);
            } else {
                setTimeout(() => {
                    first.flipped = false;
                    second.flipped = false;
                    setCards([...newCards]);
                    setFlippedCards([]);
                    setIsDisabled(false);
                    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
                }, 1000);
            }
        }
    }

    const checkGameOver = (cardsToCheck) => {
        if (cardsToCheck.every(card => card.matched)) {
            setGameOver(true);
            setIsDisabled(true);
        }
    }

    const handlenewGame = () => {
        createBoard();
        setGameOver(false);
        setFlippedCards([]);
        setIsDisabled(false);
        setCurrentPlayer(1);
        setScores({ 1: 0, 2: 0 });
    }

    return (
        <>
            {gameOver && <div className="fixed inset-0 bg-black opacity-50 z-10"></div>}
            <div className="relative h-screen flex flex-col items-center justify-center">
                <h1 className="font-bold text-4xl my-5 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400
                 to-blue-500 hover:from-pink-500 hover:to-yellow-500 transition duration-500 ease-in-out transform hover:-translate-y-1 
                 hover:scale-110 md:text-5xl">Memorama - 2 Jugadores</h1>
        </>
    );
}
