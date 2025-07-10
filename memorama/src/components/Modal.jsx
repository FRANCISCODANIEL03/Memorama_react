export const Modal = ({ gameOver, setGameOver, handlenewGame, scores }) => {
    const winnerText = () => {
        if (scores[1] > scores[2]) return "¡Ganó Jugador 1!";
        if (scores[2] > scores[1]) return "¡Ganó Jugador 2!";
        return "¡Empate!";
    }

}
