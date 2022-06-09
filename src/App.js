import './App.css';
import Button from './components/Button';
import logo from './images/freecodecamp-logo.png';

function App() {
  return (
    <div className="App">
      <div className='container-freecodecamp-logo'>
        <img src={logo} className='freecodecamp-logo'
        alt='logo do projeto'/>
      </div>
      <div className='calculadora-container'>
        <div className='fila'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='fila'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='fila'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>x</Button>
        </div>
        <div className='fila'>
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
