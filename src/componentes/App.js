import { useState } from 'react';
import Header from './Header';
import Board from './Board';

import construirBaraja from '../utils/construirBaraja'


function App() {
  const [baraja, setBaraja]=useState(construirBaraja())
  return (
    <>
      <Header/>
      <Board baraja={baraja} />
    </>
  );
}

export default App;
