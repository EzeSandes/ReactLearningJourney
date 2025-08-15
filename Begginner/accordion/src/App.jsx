import './App.css';

const accordionData = [
  {
    title: 'Sección 1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptate esse placeat consequatur odio obcaecati, ut impedit laboriosam sit! Mollitia fuga minima libero ipsum, nobis quod hic nesciunt iste facilis.',
  },
  {
    title: 'Sección 2',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    title: 'Sección 3',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
  },
];

function App() {
  return (
    <div className='app'>
      <h1>Accordion App</h1>
      <ul className='accordion'>
        <li className='accordion__item'>
          <h3 className='accordion__item__title'>Test</h3>
          <p className='accordion__item__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            voluptate esse placeat consequatur odio obcaecati, ut impedit
            laboriosam sit! Mollitia fuga minima libero ipsum, nobis quod hic
            nesciunt iste facilis.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default App;
