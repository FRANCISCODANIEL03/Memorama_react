export const Modal = ({ gameOver, setGameOver, handlenewGame, scores }) => {
    const winnerText = () => {
        if (scores[1] > scores[2]) return "¡Ganó Jugador 1!";
        if (scores[2] > scores[1]) return "¡Ganó Jugador 2!";
        return "¡Empate!";
    }

    return (
        <div className={`${gameOver ? "flex" : "hidden"} flex-col justify-center items-center gap-7
         bg-white absolute w-[320px] h-[320px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 rounded-lg`}>
            <button className="text-black font-bold absolute right-0 top-0 mr-3 hover:text-yellow-300 text-2xl" 
            onClick={() => setGameOver(false)}>&times;</button>

            <h1 className="text-black uppercase text-5xl font-bold tracking-wider">{winnerText()}</h1>

            <div className="flex flex-col gap-2">
                <p className="text-black font-bold">Jugador 1 : {scores[1]} puntos</p>
                <p className="text-black font-bold">Jugador 2 : {scores[2]} puntos</p>
            </div>

           
        </div>
    );
}
