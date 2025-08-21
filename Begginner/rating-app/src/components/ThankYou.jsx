import ReactImage from '../assets/react.svg';

function ThankYou({ selectedRating, totalOfRating = 5 }) {
  return (
    <div className='rating-app__thank-you'>
      <img src={ReactImage} alt='' className='rating-app__thank-you__image' />

      <div className='rating-app__thank-you__stat'>
        <p className='rating-app__thank-you__stat__text'>
          You selected {selectedRating} / {totalOfRating}
        </p>
      </div>

      <h2 className='rating-app__thank-you__title'>Thank You!</h2>

      <p className='rating-app__thank-you__text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nulla
        cupiditate labore odio maiores asperiores tenetur, voluptates odit!
        Commodi eligendi soluta est cumque necessitatibus inventore et iusto
        tenetur ab incidunt.
      </p>
    </div>
  );
}

export default ThankYou;
