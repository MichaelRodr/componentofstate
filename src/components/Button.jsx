import React from 'react';
import '../styleComponents/ButtonStyle.css';
//Los props seran pasados desde el componente princpal donde se renderizado
const Button = ({text, isButtonClick, handleClick}) => {
  return (
    <div>
      <button
        className={isButtonClick ? 'boton-click' : 'boton-reset'}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
