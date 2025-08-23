import { useState } from 'react';
import './App.css';
import ImageSlider from './ImageSlider';

const images = [
  {
    id: 1,
    url: 'https://picsum.photos/800/400?random=1',
    alt: 'Imagen 1',
    title: 'Paisaje 1',
    backgColor: '#2a9d8f',
  },
  {
    id: 2,
    url: 'https://picsum.photos/800/400?random=2',
    alt: 'Imagen 2',
    title: 'Paisaje 2',
    backgColor: '#264653',
  },
  {
    id: 3,
    url: 'https://picsum.photos/800/400?random=3',
    alt: 'Imagen 3',
    title: 'Paisaje 3',
    backgColor: '#e9c46a',
  },
  {
    id: 4,
    url: 'https://picsum.photos/800/400?random=4',
    alt: 'Imagen 4',
    title: 'Paisaje 4',
    backgColor: '#f4a261',
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextSlide() {
    setCurrentIndex(prevIdx => (prevIdx + 1) % images.length);
  }

  function handlePrevSlide() {
    setCurrentIndex(prevIdx => (prevIdx - 1 + images.length) % images.length);
  }

  function handleSetIdx(idx) {
    setCurrentIndex(idx);
  }

  return (
    <div className='app'>
      <h1 className='app__title'>Image Gallery</h1>
      <ImageSlider
        images={images}
        currIdx={currentIndex}
        onPrevSlide={handlePrevSlide}
        onNextSlide={handleNextSlide}
        onSetIdx={handleSetIdx}
      />
    </div>
  );
}

export default App;
