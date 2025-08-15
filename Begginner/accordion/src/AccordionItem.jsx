import React from 'react';

function AccordionItem({ title, onHandleOpen, children, isOpen }) {
  return (
    <li className={`accordion__item ${isOpen ? 'accordion__item--open' : ''}`}>
      <div className='accordion__header'>
        <h3 className='accordion__item__title'>{title}</h3>
        <button className='accordion__header__button' onClick={onHandleOpen}>
          {isOpen ? '-' : '+'}
        </button>
      </div>
      <div
        className={`accordion__content ${
          isOpen ? 'accordion__content--displayed' : ''
        }`}
      >
        <p className='accordion__item__text'>{children}</p>
      </div>
    </li>
  );
}

export default AccordionItem;
