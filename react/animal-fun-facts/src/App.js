import { animals } from './animals';
import React from 'react';

// Устанавливаем значение заголовка
const title = 'Click an animal for a SUPER fun fact!';

const background = <img className='background' alt='ocean' src='/images/ocean.jpg'/>;

function displayFact(e) {
  const animal = e.target.alt;
  const index = Math.floor(Math.random() * animals[animal].facts.length);
  const funFact = animals[animal].facts[index];
  const p = document.getElementById('fact');
  p.innerHTML = funFact;
}

// Компонент App
function App() {
  const images = [];

  for (const animal in animals) {
    const image = (
      <img
        onClick={displayFact}
        key={animal}
        className='animal'
        alt={animal}
        src={animals[animal].image}
        aria-label={animal}
        role='button'
      />
    );
    images.push(image);
  }

  const showBackground = true;

  return (
    <div>
      <h1>{title || 'Click an animal for a fun fact!'}</h1>
      {showBackground && background}
      <p id='fact'></p>
      <div className='animals'>{images}</div>
    </div>
  );
}

// Экспорт компонента по умолчанию
export default App;
