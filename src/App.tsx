import React from 'react';
import './App.css';
import LayOut from './components/LayOut/LayOut'

const App: React.FC = () => {
  return (
    <>
    <div className='context'> 
    <div className="area">
    <LayOut />
      <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </ul>
    </div>
    </div>
    </>
  );
}

export default App;
