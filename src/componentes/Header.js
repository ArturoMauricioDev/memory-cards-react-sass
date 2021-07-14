import React from 'react'
//import './styles/_Header.scss'

export default function Header(props) {
    return (
        <header className="header">
            <div className="header__titulo">Memory Cards</div>
            <div>
                <button className="header__btn-reiniciar" onClick={props.resetearPartida} >Reiniciar</button>
            </div>
            <div className="header__intentos">
                Intentos: {props.numeroDeIntentos}
            </div>
        </header>
    )
}
