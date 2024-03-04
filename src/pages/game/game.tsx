import { useState } from "react";
import "./game.css";
import { Card } from "../../types/card";
import CardComponent from "../../components/card";

let cardss: Card[] = [
    {
        cardId: 1,
        cardText: "Broski",
        isFlipped: false,
        cardValue: 40
    },
    {
        cardId: 2,
        cardText: "Peperoski",
        isFlipped: false,
        cardValue: 30
    },
    {
        cardId: 3,
        cardText: "Win",
        isFlipped: false,
        cardValue: 20
    },
    {
        cardId: 4,
        cardText: "Gamer",
        isFlipped: false,
        cardValue: 10
    },
]

export default function Game() {
    const [cards, setCards] = useState<Card[]>(cardss);
    const toggleIsFlipped = (cardId: number): void => {
        console.log(cardId);
        setCards(prevCards => prevCards.map(card => {
            if (card.cardId === cardId) {
                return {
                    ...card,
                    isFlipped: !card.isFlipped
                };
            }
            return card;
        }));
    };

    return (
        <div>
            <div className="question">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
            </button>
            </div>
            <div className="cards">
                {
                    cards.map(card => (
                        <CardComponent key={card.cardId} card={card} flip={() => toggleIsFlipped(card.cardId)}/>
                    ))
                }
            </div>
        </div>
    )
}