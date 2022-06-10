import './App.css';
import Button from './components/Button';
import logo from './images/freecodecamp-logo.png';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input,setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  }

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert("Por favor entre com valores para realizar os cálculos");
    }
  };


  return (
    <div className="App">
      <div className='container-freecodecamp-logo'>
        <img src={logo} className='freecodecamp-logo'
        alt='logo do projeto'/>
      </div>
      <div className='calculadora-container'>
        <Screen input={input}/>
        <div className='fila'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='fila'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='fila'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='fila'>
          <Button handleClick={calcularResultado}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='fila'>
          <ButtonClear handleClear={() => setInput('')}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
