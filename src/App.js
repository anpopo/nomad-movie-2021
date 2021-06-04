import React from 'react'
import PropTypes from 'prop-types'



const foodILike = [
  {
    id: 1,
    name: "김치",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.QKNL3H-b8pGMgfg77Ig8BAHaE8%26pid%3DApi&f=1",
    rating: 5.0
  },
  {
    id: 2,
    name: "삼겹살",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP._sycpB50kOtdSk5VD6QyqQHaEK%26pid%3DApi&f=1",
    rating: 4.7
  },
  {
    id: 3,
    name: "샤브샤브",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.X36wkzRWkRYl6F4v2yfpMQHaE8%26pid%3DApi&f=1",
    rating: 4.9
  },
  {
    id: 4,
    name: "야채비빔밥",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HRE2MfhsfuvATQpmmGuY4wHaE8%26pid%3DApi&f=1",
    rating: 3.8
  },
  {
    id: 5,
    name: "야채죽",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Zv3gzdZ69o4nCCCJYwDQIgHaEK%26pid%3DApi&f=1",
    rating: 4.3
  },
];


function Food({ name, pic, rating }) {

  return <div>
      <h2>i like {name}</h2>
      <h4>rating: {rating}</h4>
      <img src={pic} alt={name}></img>
    </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number

}

function App() {
  return (
    <div>
      {foodILike.map(dish =>
        <Food key={dish.id} name={dish.name} pic={dish.image} rating={dish.rating}/>)}
    </div>
  );
}

export default App;
