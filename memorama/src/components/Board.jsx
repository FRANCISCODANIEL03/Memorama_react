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

    }

}
