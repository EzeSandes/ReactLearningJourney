import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const numOfMaxStars = 5;
  const ratings = Array.from(
    { length: numOfMaxStars },
    (_, index) => index + 1
  );

  return (
    <div className='rating-app '>
      <h2 className='rating-app__title'>How did we do?</h2>
      <p className='rating-app__description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam labore
        vitae itaque dicta dolorum aspernatur tempore, deserunt id ad quibusdam
        qui ab, voluptate perferendis in saepe culpa vero assumenda inventore!
      </p>
      <ul className='rating-app__buttons'>
        {ratings.map(value => (
          <li className='rating-app__buttons__item'>
            <button className='rating-app__button'>{value}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
