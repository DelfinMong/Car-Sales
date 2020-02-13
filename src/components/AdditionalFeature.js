import React from 'react';
import { useDispatch } from 'react-redux';
import { buyItem } from "../redux/action"

const AdditionalFeature = ({ feature }) => {

  const dispatch = useDispatch()
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={ () => dispatch( buyItem(feature))} className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
