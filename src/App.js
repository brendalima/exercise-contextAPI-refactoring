import './App.css';
import Cars from './Cars';
import React, { createContext } from 'react';

export const MyContext = createContext();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.moveCar = this.moveCar.bind(this);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    };
  }

  moveCar(car, side) {
    this.setState({cars:{[car]: side}});
  }
  render() {
    const contextValue = {
      cars: this.state.cars,
      moveCar: (car, side) => this.moveCar(car, side),
    }
    return (
      <MyContext.Provider value={contextValue}>
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
