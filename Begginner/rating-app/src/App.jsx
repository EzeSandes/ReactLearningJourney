import { useState } from 'react';
import './App.css';
import ThankYou from './components/ThankYou';

function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [submited, setSubmited] = useState(false);

  const numOfMaxStars = 5;
  const ratings = Array.from(
    { length: numOfMaxStars },
    (_, index) => index + 1
  );

  function handleSelectRating(value) {
    setSelectedRating(value);
  }

  function handleSubmit() {
    setSubmited(true);
  }

  return (
    <div className='rating-app '>
      {!submited ? (
        <>
          <h2 className='rating-app__title'>How did we do?</h2>
          <p className='rating-app__description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            labore vitae itaque dicta dolorum aspernatur tempore, deserunt id ad
            quibusdam qui ab, voluptate perferendis in saepe culpa vero
            assumenda inventore!
          </p>
          <ul className='rating-app__buttons'>
            {ratings.map(value => (
              <li className='rating-app__buttons__item' key={value}>
                <button
                  className={`rating-app__button ${
                    selectedRating === value
                      ? 'rating-app__button--selected'
                      : ''
                  }`}
                  onClick={() => handleSelectRating(value)}
                >
                  {value}
                </button>
              </li>
            ))}
          </ul>
          <button
            className='rating-app__submit'
            disabled={selectedRating === null}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </>
      ) : (
        <ThankYou
          selectedRating={selectedRating}
          totalOfRating={numOfMaxStars}
        />
      )}
    </div>
  );
}

export default App;
