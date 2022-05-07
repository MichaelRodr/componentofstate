import React from 'react';
import '../styleComponents/CounterStyle.css';

const Counter = ({countClick}) => {
  return <div className='counter'>{countClick}</div>;
};

export default Counter;
