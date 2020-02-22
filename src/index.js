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
      money: this.money,
      
    };

    // This binding is necessary to make `this` work in the callback
    //this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
  }


  // Update Game State
  update = (level, episode, tree, extra, extraValue) => {

    this.setState({ level: level })
    this.setState({ episode: episode })
    this.setState({ trees: tree})
    this.setState({ component: components(this, this.level, this.episode, this.trees) })
    this.setState({ extra: extraValue })
    
  }

  // Move to next Level
  updateLevel = (n) => {
    this.level = n;
    this.update(this.level, this.episode, this.trees);
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
    this.money = n;
    this.update(this.level, this.episode, this.trees);
  }

  sePointsUp = (n) => {
    console.log(n);
    this.sePoints = n;
    this.update(this.level, this.episode, this.trees);
  }

  level = 0;
  episode = 0;
  trees = 0;
  money = 3000;
  sePoints = 0;

  // ========================
  // LEVEL 1 FUNCTIONS & DATA
  // ========================

  festivalFoodOrder = {
    cheese: 0,
    tomato: 0,
    basil: 0,
    report: {
      time: 0,
      pizzas: 0,
      waste: 0,
      profit: 0
    }
  }

  confirmOrder = () => {
    const cheese = document.querySelector('#cheese-order-input');
    const tomato = document.querySelector('#tomato-order-input');
    const basil = document.querySelector('#basil-order-input');

    this.festivalFoodOrder.cheese = cheese.value;
    this.festivalFoodOrder.tomato = tomato.value;
    this.festivalFoodOrder.basil = basil.value;

    this.update(this.level, this.episode, this.trees);


}

returnTreeFromFoodOrder = () => {
  console.log(this.festivalFoodOrder.cheese);
  console.log(this.festivalFoodOrder.tomato);
  console.log(this.festivalFoodOrder.basil);

  if ((this.festivalFoodOrder.cheese > 50)  || (this.festivalFoodOrder.tomato > 50) || (this.festivalFoodOrder.basil > 10)) {
    // Set Report Figures
    this.festivalFoodOrder.report.time = 21;
    this.festivalFoodOrder.report.pizzas = 1000;
    this.festivalFoodOrder.report.waste = 15;
    this.festivalFoodOrder.report.profit = 1500;



    this.update(this.level, this.episode, this.trees);
    // Return Tree
    return 7;

  } else if ((this.festivalFoodOrder.cheese < 50)  || (this.festivalFoodOrder.tomato < 50) || (this.festivalFoodOrder.basil < 10)) {
    // Set Report Figures
    this.festivalFoodOrder.report.time = 15;
    this.festivalFoodOrder.report.pizzas = 700;
    this.festivalFoodOrder.report.waste = 3;
    this.festivalFoodOrder.report.profit = 800;

    this.sePointsUp(2);

    this.update(this.level, this.episode, this.trees);
    // Return Tree
    return 8;

  } else {
    // Set Report Figures
    this.festivalFoodOrder.report.time = 21;
    this.festivalFoodOrder.report.pizzas = 1000;
    this.festivalFoodOrder.report.waste = 5;
    this.festivalFoodOrder.report.profit = 2100;

    this.sePointsUp(2);

    this.update(this.level, this.episode, this.trees);
    // Return Tree

    return 9;
  }
}


  // LEVEL 2 FUNCTIONS & DATA
  

  render() {
  
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
