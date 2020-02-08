//========================
// This file will render the game on the page 
// =======================


// Import Statements 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { components } from './components.js';



class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.currentPath,
      component: components(this.currentPath)
    };

    // This binding is necessary to make `this` work in the callback
    //this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
  }



  update = (cP) => {
    console.log(this.state.data)

    this.setState({ data: cP})
    this.setState({ component: components(this.currentPath) })

    console.log(this.state.component)
    
  }

  // Temporary Function to Add One to current Path
  addOne = () => {
    this.currentPath.push(1);
    this.update(this.currentPath);
  }

  // Temporary Function to Add Zero to current Path
  addZero = () => {
    this.currentPath.push(0);
    this.update(this.currentPath);
  }

  currentPath = [0, 1];

  

  render() {
    

    let result = (
      <div>
        {this.state.component}
        <button onClick={ this.addOne }>Click Me!</button>
        <button onClick={ this.addZero }>Click Me!</button>
      </div>
    );
    
    return result
  }
};


// Call to render the page
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
