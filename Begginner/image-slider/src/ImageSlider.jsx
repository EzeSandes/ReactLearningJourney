import React from 'react';

function ImageSlider({ images, currIdx, onPrevSlide, onNextSlide, onSetIdx }) {
  return (
    <div className='slider'>
      <button
        className='slider__button slider__button--prev'
        onClick={onPrevSlide}
      >
        &larr;
      </button>
      <button
        className='slider__button slider__button--next'
        onClick={onNextSlide}
      >
        &rarr;
      </button>
      <div className='slider__controls'>
        {images.map((_, idx) => (
          <button
            className={`slider__controls__item ${
              currIdx === idx ? 'slider__controls__item--active' : ''
            }`}
            key={idx + 999}
            onClick={() => onSetIdx(idx)}
          ></button>
        ))}
      </div>
      <div
        className='slider__container'
        // Negative value to translate the element to left.
        style={{
          transform: `translateX(-${currIdx * 100}%)`,
        }}
      >
        {images.map((image, idx) => (
          <div
            className='slider_slide'
            key={idx}
            style={{ backgroundColor: image.backgColor }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className='slider__image'
              style={{ backgroundColor: image.backgColor }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
