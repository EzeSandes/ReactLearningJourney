import { useState } from 'react';
import LoopIcon from '@mui/icons-material/Loop';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import './App.css';

const MIN_LENGTH = 4;
const MAX_LENGTH = 32;

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(4);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecial, setIncludeSpecial] = useState(false);

  function handleGeneratePassword() {
    const numbers = '0123456789';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const special = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let chars = '';

    if (includeLowercase) chars += lowercase;
    if (includeNumbers) chars += numbers;
    if (includeUppercase) chars += uppercase;
    if (includeSpecial) chars += special;

    if (chars === '') {
      alert('Please select al least one character type.');
      return;
    }

    let newPassword = '';

    for (let i = 0; i < length; i++) {
      const randomIdx = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIdx];
    }

    setPassword(newPassword);
  }

  function handleCopy() {
    navigator.clipboard.writeText(password);
    console.log('Copied!');
  }

  return (
    <div className='app'>
      <h1 className='app__title'>Password generator</h1>

      <div className='app__container'>
        <div className='app__result__container'>
          <p className='app__result'>{password}</p>
          <div className='app__result__container__button__container'>
            <button
              className='app__result__container__button app__result__container__button--generate'
              onClick={handleGeneratePassword}
            >
              <LoopIcon sx={{ fontSize: '2rem' }} />
            </button>
            <button
              className='app__result__container__button app__result__container__button--copy'
              onClick={handleCopy}
            >
              <ContentCopyIcon sx={{ fontSize: '2rem' }} />
            </button>
          </div>
        </div>

        <div className='app__options__container'>
          <div className='app__options__container__length'>
            <input
              type='number'
              min={MIN_LENGTH}
              max={MAX_LENGTH}
              name='length'
              value={length}
              onChange={e => setLength(Number(e.target.value))}
              className='app__options__input app__options__input--length'
            />
            <span className='app__options__input__length__description'>
              Length
            </span>
          </div>

          <div className='app__options__container__includes'>
            <div className='app__options__container__includes__content'>
              <input
                type='checkbox'
                name='lowercase'
                id='lowercase'
                checked={includeLowercase}
                onChange={() => setIncludeLowercase(prev => !prev)}
              />
              <label htmlFor='lowercase'>a-z</label>
            </div>

            <div className='app__options__container__includes__content'>
              <input
                type='checkbox'
                name='UpperCase'
                id='uppercase'
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(prev => !prev)}
              />
              <label htmlFor='Uppercase'>A-Z</label>
            </div>

            <div className='app__options__container__includes__content'>
              <input
                type='checkbox'
                name='numbers'
                id='numbers'
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(prev => !prev)}
              />
              <label htmlFor='lowercase'>0-9</label>
            </div>

            <div className='app__options__container__includes__content'>
              <input
                type='checkbox'
                name='special'
                id='special'
                checked={includeSpecial}
                onChange={() => setIncludeSpecial(prev => !prev)}
              />
              <label htmlFor='lowercase'>!@#$%^&*</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
