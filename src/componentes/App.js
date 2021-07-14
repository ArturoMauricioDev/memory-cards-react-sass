import { useState, useEffect } from 'react';
import Header from './Header';
import Board from './Board';

import construirBaraja from '../utils/construirBaraja'

function App() {
  const [baraja, setBaraja]=useState(construirBaraja());
  const [parejaSeleccionada, setParejaSeleccionada]=useState([]);
  const [estaComparando, setEstaComparando]=useState(false);
  const [cartasAdivinadas, setCartasAdivinadas]=useState(0);
  const [numeroDeIntentos,setNumeroDeIntentos]=useState(0)
  
  const compararParejas=()=>{
    setEstaComparando(true);
    setTimeout(()=>{
      const[primeraCarta,SegundaCarta]=parejaSeleccionada;
      setNumeroDeIntentos(numeroDeIntentos+1)
      if(primeraCarta.icono===SegundaCarta.icono){
        setBaraja(baraja.map((card)=>{
          if(card.icono!== primeraCarta.icono){
            return card 
          }
          setCartasAdivinadas(cartasAdivinadas+1);
          return{...card, fueAdivinada: true}
        }))
      }
      primeraCarta.flipped=false
      SegundaCarta.flipped=false
      
      setParejaSeleccionada([])
      setEstaComparando(false)
      //setNumeroDeIntentos(numeroDeIntentos+1)
    },1000)
  }

  /* const verificarGanador=(baraja)=>{
   // baraja.map((carta)=>carta.fueAdivinada=true)

    if(baraja.filter((carta)=>!carta.fueAdivinada).length===0){
      alert('Ganaste en x intentos')
    }
  } */
  
  const selecionarCarta= (carta)=>{
    //carta.flipped=!carta.flipped
    carta.flipped=parejaSeleccionada.indexOf(carta)>=-1||carta.fueAdivinada
    if(estaComparando||parejaSeleccionada.indexOf(carta)>-1||carta.fueAdivinada){
      return 
    }

    setParejaSeleccionada([...parejaSeleccionada, carta])
   /*  if (parejaSeleccionada.length===2){
      compararParejas(parejaSeleccionada)
    } */
  }
  const resetearPartida=()=>{
    setBaraja(construirBaraja());
    setParejaSeleccionada([]);
    setEstaComparando(false);
    setCartasAdivinadas(0);
    setNumeroDeIntentos(0);
  }

  useEffect(() => {
    if (parejaSeleccionada.length===2){
      compararParejas(parejaSeleccionada)
    }
  }, [parejaSeleccionada])
  
  useEffect(()=>{
    if(cartasAdivinadas===10){
      alert(`Ganaste en ${numeroDeIntentos} intentos`)
    }
  },[cartasAdivinadas])

  return (
    <>
      <Header numeroDeIntentos={numeroDeIntentos} resetearPartida={resetearPartida} />
      <Board baraja={baraja} parejaSeleccionada={parejaSeleccionada} selecionarCarta={(carta)=>selecionarCarta(carta)} />
    </>
  );
}

export default App;
