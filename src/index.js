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
      level: this.level,
      episode: this.episode,
      trees: this.trees,
      component: components(this, this.level, this.episode, this.trees),
      sePoints: this.sePoints,
      money: this.money
    };

    // This binding is necessary to make `this` work in the callback
    //this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
  }


  // Update Game State
  update = (level, episode, tree) => {

    this.setState({ level: level })
    this.setState({ episode: episode })
    this.setState({ trees: tree})
    this.setState({ component: components(this, this.level, this.episode, this.trees) })
    
  }

  // Move to next Level
  updateLevel = (n) => {
    this.level = n;
    this.update(this.currentPath);
  }

  // Move to next episode
  updateEpisode = (n) => {
    this.episode = n;
    this.update(this.level, this.episode, this.trees);
  }

  // Update tree Branch 
  updateTreeBranch = (n) => {
    this.trees = n;
    this.update(this.level, this.episode, this.trees);
  }

  moneyUp = (n) => {
    console.log(n);
    this.money += n;
  }

  sePointsUp = (n) => {
    console.log(n)
    this.sePoints += n;
  }

  level = 0;
  episode = 0;
  trees = 0;
  money = 0;
  sePoints = 0;


  

  render() {
    
    console.log(this.state.component)
  
    let result = (
      <div>
        {this.state.component.main}
        {this.state.component.gamePlay}
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
