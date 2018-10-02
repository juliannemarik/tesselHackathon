import React from 'react';
import Car from './Car';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      car1: {
        id: '044d28f2745780',
        name: 'Collin',
        speed: 0,
        lapNumber: 0,
        previousLapTime: 0,
        currentLapTime: 0,
      },
      car2: {
        id: '043e6ba20f4880',
        name: 'Finn',
        speed: 0,
        lapNumber: 0,
        previousLapTime: 0,
        currentLapTime: 0,
      },
    };
  }

  render() {
    const car1 = this.state.car1;
    const car2 = this.state.car2;
    return (
      <div>
        <h1>Current Standings:</h1>
        <table>
          {car1.lapNumber > car2.lapNumber
            ? [
                <Car
                  key={1}
                  name={car1.name}
                  speed={car1.speed}
                  lap={car1.lapNumber}
                />,
                <Car
                  key={2}
                  name={car2.name}
                  speed={car2.speed}
                  lap={car2.lapNumber}
                />,
              ]
            : [
                <Car
                  key={2}
                  name={car2.name}
                  speed={car2.speed}
                  lap={car2.lapNumber}
                />,
                <Car
                  key={1}
                  name={car1.name}
                  speed={car1.speed}
                  lap={car1.lapNumber}
                />,
              ]}
        </table>
      </div>
    );
  }
}

export default Main;
