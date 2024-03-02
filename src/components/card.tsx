import { a, useSpring } from "@react-spring/web";
import { Card } from "../types/card";
import './card.css'

interface CardComponentProps {
    card: Card,
    flip: () => void;
}

export default function CardComponent(props: CardComponentProps) {

    const { opacity, transform } = useSpring({
        opacity: props.card.isFlipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${props.card.isFlipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    });

    return (
        <div className="c-wrapper" onClick={() =>  props.flip()}>
            <a.div className="c back" style={{ opacity: opacity.to(o => 1 - o), transform}}>
               <span className="card-text">{props.card.cardId}</span>
            </a.div>
            <a.div className="c front" style={{ opacity, transform, rotateX: '180deg' }}>
                <span className="card-text">{props.card.cardText}</span>
                <span className="card-text">{props.card.cardValue}</span>
            </a.div>
        </div>
    )
}