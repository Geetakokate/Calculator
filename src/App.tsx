import { useState } from 'react';
import './App.css';
import add from './components/calculator';

//TODO: Improve folder structure and shift code suitable component. App should be clean
function App() {
  //TODO: change var names as result if enhancing more 
  const [addition, setAddition] = useState('');

  //TODO: this function is flexible enough to add more cases like substract, multiply
  const calculate = (type: string) => {
    const element = document.getElementById('inputNumber') as HTMLInputElement

    if ( element && element.value !== null){
      switch(type){
        case 'add':
          setAddition(add(element.value));
          break;
        default:
          break
      }
      ;
    }
  }

  return (
    //TODO: styles can be shifted to assets
    <div style={{margin: '10px'}}>
      <div style={{paddingRight: '10px', display: 'flex'}}>
        <input style={{marginRight: '10px'}} id='inputNumber' placeholder='Enter numbers'></input>   
        <button onClick={() => calculate('add')}>Calculate</button>
      </div>
      <sub>Change delimiter pattern is: <span>//[delimiter] [numbers…]</span></sub>
      { addition && <p>{addition}</p> }
    </div>
  );
}

export default App;
