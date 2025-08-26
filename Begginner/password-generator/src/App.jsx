import { useState } from 'react';
import LoopIcon from '@mui/icons-material/Loop';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='app'>
      <h1 className='app__title'>Password generator</h1>

      <div className='app__container'>
        <div className='app__result__container'>
          <p className='app__result'>abcdefg</p>
          <div className='app__result__container__button__container'>
            <button className='app__result__container__button app__result__container__button--generate'>
              <LoopIcon sx={{ fontSize: '2rem' }} />
            </button>
            <button className='app__result__container__button app__result__container__button--copy'>
              <ContentCopyIcon sx={{ fontSize: '2rem' }} />
            </button>
          </div>
        </div>

        <div className='app__options__container'>
          <div className='app__options__container__length'>
            <input
              type='number'
              min={4}
              max={32}
              name='length'
              className='app__options__input app__options__input--length'
            />
            <span className='app__options__input__length__description'>
              Length
            </span>
          </div>

          <div className='app__options__container__includes'>
            <div className='app__options__container__includes__content'>
              <input type='checkbox' name='UpperCase' id='uppercase' />
              <label htmlFor='Uppercase'>A-Z</label>
            </div>

            <div className='app__options__container__includes__content'>
              <input type='checkbox' name='lowercase' id='lowercase' />
              <label htmlFor='lowercase'>a-z</label>
            </div>

            <div className='app__options__container__includes__content'>
              <input type='checkbox' name='numbers' id='numbers' />
              <label htmlFor='lowercase'>0-9</label>
            </div>

            <div className='app__options__container__includes__content'>
              <input type='checkbox' name='special' id='special' />
              <label htmlFor='lowercase'>!@#$%^&*</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
