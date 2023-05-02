import { useState } from 'react';
import people from './data.js';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
const App = () => {
  const [index,setIndex] = useState(0)
  const {name,job,image,text} = people[index];
  const nextPerson = ()=>{
    if(index === 3) setIndex(0);
    else setIndex(index+1)
  }
  const prevPerson = ()=>{
    if(index === 0) setIndex(3);
    else setIndex(index-1)
  }
  const randomPerson = ()=>{
    setIndex(Math.floor(Math.random()*4))
  }
  return (
    <main>
      <article className="review">
        <div className="img-container" >
          <img src={image} alt={name} className='person-img'/>
          <span className="quote-icon">
            <FaQuoteRight/>
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className="btn-container">
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft/>
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight/>
          </button>
          </div>
          <button className="btn btn-hipster" onClick={randomPerson}>Suprise Me</button>
        
      </article>
    </main>
  )
};
export default App;
