import {useState} from 'react';
import './App.css';
import freecodecamp from './assets/image/freecodecamp.png';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
  const [countClick, setCountClick] = useState(0);

  const handleClick = () => {
    setCountClick(countClick + 1);
    return countClick;
  };

  const resetCounter = () => {
    setCountClick(0);
    return countClick;
  };

  return (
    <div className='App'>
      <div className='container-logo-freecodecamp'>
        <img
          className='freecodecamp-logo'
          src={freecodecamp}
          alt='Logo free code camp'
        />
      </div>

      <div className='container-counter'>
        <Counter countClick={countClick} />
        <Button text='Click' isButtonClick={true} handleClick={handleClick} />
        <br />
        <Button text='Reset' isButtonClick={false} handleClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
