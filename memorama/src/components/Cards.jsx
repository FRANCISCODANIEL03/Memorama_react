export const Cards = ({card, handleCardClick})=>{
    return <div className={`drop-shadow-md flex items-center ${card.flipped?'[transform:rotateY(10deg)]':'bg-white'} 
    justify-center cursor-pointer h-16 w-16 hover:scale-105 rounded-xl transition-all duration-1000`}
    onClick={()=>handleCardClick(card.id)}
    >
    </div>
}

