import { useState, useEffect } from 'react';
import Header from './Header';
import Board from './Board';

import construirBaraja from '../utils/construirBaraja'

function App() {
  const [baraja, setBaraja]=useState(construirBaraja());
  const [parejaSeleccionada, setParejaSeleccionada]=useState([]);
  const [estaComparando, setEstaComparando]=useState(false);
  
  const compararParejas=()=>{
    setEstaComparando(true);
    setTimeout(()=>{
      const[primeraCarta,SegundaCarta]=parejaSeleccionada;
      if(primeraCarta.icono===SegundaCarta.icono){
        setBaraja(baraja.map((card)=>{
          if(card.icono!== primeraCarta.icono){
            return card
          }
          return{...card, fueAdivinada: true}
        }))
      }
      setParejaSeleccionada([])
      setEstaComparando(false)
    },1000)
  }
  
  const selecionarCarta= (carta)=>{
    if(estaComparando||parejaSeleccionada.indexOf(carta)>-1||carta.fueAdivinada){
      return 
    }

    setParejaSeleccionada([...parejaSeleccionada, carta])
   /*  if (parejaSeleccionada.length===2){
      compararParejas(parejaSeleccionada)
    } */
  }
  useEffect(() => {
    if (parejaSeleccionada.length===2){
      compararParejas(parejaSeleccionada)
    }
  }, [parejaSeleccionada])

  return (
    <>
      <Header/>
      <Board baraja={baraja} parejaSeleccionada={parejaSeleccionada} selecionarCarta={(carta)=>selecionarCarta(carta)} />
    </>
  );
}

export default App;
