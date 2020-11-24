import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
return (
  <div>
    <h2>I like { name }</h2>
    <h4>{rating}/5.0</h4>
    <img src={ picture } alt={name} />
  </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://image5jvqbd.fmkorea.com/files/attach/new/20201123/3842645/2114102785/3217937505/c3f988c8a1923a1776f2d172cac9caeb.jpg',
    rating: 5,
  },
  { 
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg',
    rating: 4.9,
  },
  { 
    id: 3,
    name: 'Bibimbob',
    image: 'https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg',
    rating: 3,
  },
  { 
    id: 4,
    name: 'Doncasu',
    image: 'https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg',
    rating: 1,
  },
  { 
    id: 5,
    name: 'Kimbap',
    image: 'https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg',
    rating: 4,
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key = {dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating} />
        ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;
