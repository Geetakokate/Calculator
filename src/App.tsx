import { useState } from 'react';
import './App.css';
import add from './components/calculator';

function App() {
  const [addition, setAddition] = useState('');

  const calculate = () => {
    const element = document.getElementById('inputNumber') as HTMLInputElement
    if ( element && element.value !== null){
      setAddition(add(element.value));
    }
  }

  return (
    <div>
      <input id='inputNumber' placeholder='Enter numbers'></input>
      <button onClick={calculate}>Calculate</button>
      { addition && <span>{addition}</span> }
    </div>
  );
}

export default App;
