import './Card.css';

function Card({ weather }) {
  const { temp_c, condition } = weather.current;
  const { name: city, country } = weather.location;

  return (
    <div className='card'>
      <div className='card__header'>
        <h3 className='card__header__title'>{city}</h3>
        <span className='card__header__country'>{country}</span>
      </div>

      <div className='card__content'>
        <div className='card__content__temp-container'>
          <div className='card__content__temp'>{temp_c}</div>
          <div className='card__content__unit'>{'C'}</div>
        </div>
        <div className='card__content__image-container'>
          <img
            src={condition.icon}
            alt={condition.text}
            className='card__image__temp'
          />
        </div>
        <div className='card__content__report'>
          <p className='card__report'>{condition.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
