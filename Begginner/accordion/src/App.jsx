import { useState } from 'react';
import AccordionItem from './AccordionItem';
import './App.css';

const accordionData = [
  {
    title: 'Section 1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptate esse placeat consequatur odio obcaecati, ut impedit laboriosam sit! Mollitia fuga minima libero ipsum, nobis quod hic nesciunt iste facilis.',
  },
  {
    title: 'Section 2',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    title: 'Section 3',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
  },
];

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  function handleOpen(idx) {
    setOpenIndex(openIndex === idx ? null : idx);
  }

  return (
    <div className='app'>
      <h1>Accordion App</h1>
      <ul className='accordion'>
        {accordionData.map((item, index) => (
          <AccordionItem
            title={item.title}
            key={index}
            isOpen={openIndex === index}
            onHandleOpen={() => handleOpen(index)}
          >
            {item.content}
          </AccordionItem>
        ))}
      </ul>
    </div>
  );
}

export default App;
