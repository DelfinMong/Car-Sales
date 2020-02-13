import React from 'react';
import { useSelector } from 'react-redux'

const Header = () => {
  
  // useSelector requires a function.
  // useSelector brings in the state.
  const img = useSelector(state => state.car.image)
  const name = useSelector(state => state.car.name)
  const price = useSelector(state => state.car.price)

  return (
    <>
      <figure className="image is-128x128">
        <img src= { img } alt={ name } />
      </figure>
      <h2>{ name }</h2>
      <p>Amount: ${ price }</p>
    </>
  );
};

export default Header;
