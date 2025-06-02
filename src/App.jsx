import React from 'react';
import Header from './components/Header';
import Perfil from './components/Perfil';
import Formulario from './components/Formulario';
import './App.css';

function App() {

  return (
    <>
      {/*<Header />*/ }
      <div className='centrar'><Perfil /></div>
      <Formulario />
    </>
  )
}

export default App
