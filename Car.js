import React from 'react';


const Car = props => {
  return (
    <div>
      <tr>
        <td id='carName'>{props.name}</td>
        <td id='carSpeed'>{props.speed}</td>
        <td id='carLap'>{props.lapNumber}</td>
      </tr>
    </div>
  );
};

export default Car;
