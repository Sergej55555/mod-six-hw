import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {

  const [bike, setBikes] = useState(data);
  const [showBike, setShowBike] = useState(false);

  const removeBike = (id) => {
  let newBikes = bike.filter((bike) => bike.id !== id)
  setBikes(newBikes)
  }

  const showBikeClick = (item) => {
    item.showMore = !item.showMore
    setShowBike(!showBike)
  }
 
  return (<div>
    <div className='container'>
      <h1>Most beutiful {bike.length} bikes</h1>
    </div>

    {bike.map((item => {
      const {id, name, description, image, showMore } = item 

      return (<div key={id}> 
          <div className='container'>
          <p>{id} - {name}</p> 
          </div>
          <div className='container'>
          <p>{showMore ? description : description.substring(0, 230) + '...'} 
          <button onClick={() => showBikeClick(item)}>{showMore ? 'show less' : 'show more'}</button>
          </p>
          </div>
          <div className='container'>
          <img src={image} width='350px' alt='Bikes'/>
          </div>

          <br></br>

          <div className='container'>
           <button className='btn' onClick={() => removeBike(id)}>Remove bike</button>
          </div>

        </div>
      )
    }))}

    <br></br>
    <br></br>

    <div className='container'>
    <button className='btn' onClick={() => setBikes([])}>Delete All</button>
    </div>
  </div>
  )
}

export default App;
