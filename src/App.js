import React, { createContext } from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';

export const MyContext = createContext();

class App extends React.Component {

  constructor(props) {
    super(props);
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: { color: 'red' },
    };
  }

  moveCar(car, side) {
    this.setState({cars:{[car]: side}});
  }

  changeSignal(color) {
    this.setState({signal:{color: color}});
  }
  
  render() {
    const contextValue = {
      cars: this.state.cars,
      moveCar: (car , side ) => this.moveCar(car,side),
      changeSignal: (color) => this.changeSignal(color),
      signalColor: this.state.signal.color,
    }
    return (
      <MyContext.Provider value={contextValue}>
        <div className="container">
          <Cars />
          <TrafficSignal />
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
