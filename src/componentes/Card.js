import { useState } from 'react';


export default function Card(props) {
    const [flipped, setFlipped]=useState(false)

    const handleFlip = ()=>{
        //setFlipped(!flipped)
        setFlipped(props.estaSiendoComparada||props.fueAdivinada);
        

    }
    const handleClick=()=>{
        handleFlip();
        props.selecionarCarta();
    }
    
    return (
        <div className={"Card"+(flipped?" flipped": "")}  onClick={handleClick } disabled={!flipped}>
            <div className={"Card-inner"+(flipped?" flipped": "")}  >
                <div className="Card-front"></div>
                <div className="Card-back">
                    <i className={`fa ${props.icono} fa-5x`} ></i>
                </div>
            </div>
        </div>
    )
}
