import React from 'react';

function ImageSlider({ images, currIdx, onPrevSlide, onNextSlide }) {
  let currBackgColor = '#000';

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
      <div
        className='slider__container'
        // Negative value to trasnlate the element to left.
        style={{
          transform: `translateX(-${currIdx * 100}%)`,
          backgroundColor: currBackgColor,
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
