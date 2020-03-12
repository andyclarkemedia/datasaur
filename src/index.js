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
      // Disable Set Character Button
      buttonDisabled: this.buttonDisabled,
      timePassing: {
        button: this.timePassingButtonDisabled
      }
      
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

  moneyUp = (n, direction) => {

    console.log(n)

    // Play cash noise 
    const cashUp = document.querySelector('#cash-up-noise');
    const cashDown = document.querySelector('#cash-down-noise');

    if (direction === "up") {
      cashUp.play();
    } else if (direction === "down") {
      cashDown.play();
    }
    

    console.log(n);
    this.money = parseInt(n);
    this.update(this.level, this.episode, this.trees);
  }

  sePointsUp = (n, direction) => {

     // Play sepoints noise 
    const upNoise = document.querySelector('#sepoints-up-noise');
    const downNoise = document.querySelector('#sepoints-down-noise');

    if (direction === "up") {
      upNoise.play();
    } else if (direction === "down") {
      downNoise.play();
    }


    console.log(n);
    this.sePoints = n;
    this.update(this.level, this.episode, this.trees);
  }

  level = 0;
  episode = 0;
  trees = 0;
  money = 70000;
  sePoints = 0;

  popularityFactor = 0.5;

  buttonDisabled = true;


  enableButton = () => {
    this.buttonDisabled = false;
    this.update(this.level, this.episode, this.trees);
  }


  // ========================
  // WEEKLY EARNINGS 
  // ========================

  weekNumber = 0;

  // Need to add in packaging and take into account extra number of customers 

  weeklyEarnings = {
    turnover: {
      daysOpen: 5,
      customersPerDay: 55,
      averageMealPrice: 10
    },
    costs: {
      staff: {
        nStaff: 5,
        hourlyWage: 9.50
      },
      supplier: {
        supplierCost: 0
      },
      energy: {
        gas: 40,
        electricity: 200
      },
      rent: 0,
      salesForecast: 0,
      packaging: 0
    }
  }



  timePassingButtonDisabled = true;

  enableTimePassingButton = () => {
    this.timePassingButtonDisabled = false;
    this.update(this.level, this.episode, this.trees);
  }



  // ========================
  // ENERGY SUPPLIER 
  // ========================

  energySupplierButtonDisabled = true;

  enableEnergySupplierButton = () => {
    this.energySupplierButtonDisabled = false;
    this.update(this.level, this.episode, this.trees);
  }

  energySupplier = "";

 

  // ========================
  // FURNITURE SELECTION
  // ========================

   furnitureSelectionButtonDisabled = true;

  enableFurnitureSelectionButton = () => {
    this.furnitureSelectionButtonDisabled = false;
    this.update(this.level, this.episode, this.trees);
  }

  furnitureSelection = "";


  // ========================
  // FOOD SUPPLIERS
  // ========================

  suppliers = {
    tomato: "",
    cheese: "",
    pork: "",
    chicken: "",
    potato: "",
    costs: {
      tomato: {
        wholesale: 40,
        organic: 70,
        local: 90
      },
      cheese: {
        wholesale: 70,
        organic: 120,
        local: 160
      },
      pork: {
        wholesale: 100,
        organic: 200,
        local: 250
      },
      chicken: {
        wholesale: 80,
        organic: 120,
        local: 160
      },
      potato: {
        wholesale: 80,
        organic: 150,
        local: 170
      }
    }
  }


  // ========================
  // SUPPLIER RUNS OUT OF STOCK 
  // ========================

  potatoButtonDisabled = true;

  enablePotatoButton = () => {
    this.potatoButtonDisabled = false;
    this.update(this.level, this.episode, this.trees);
  }

  potatoInitialDecision = "";


  // ========================
  // PACKAGING 
  // ========================

  packagingDecisionButtonDisabled = true;

  enablePackagingButton = () => {
    this.packagingDecisionButtonDisabled = false;
    this.update(this.level, this.episode, this.trees);
  }

  packagingChoice = "";



  // ========================
  // CUTLERY  
  // ========================

  cutleryDisabledButton = true;

  enableCutleryButton = () => {
    this.cutleryDisabledButton = false;
    this.update(this.level, this.episode, this.trees);
  }

  cutleryChoice = "";


  // ========================
  // FESTIVAL FUNCTIONS AND DATA
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

    this.sePointsUp(2, "up");

    this.update(this.level, this.episode, this.trees);
    // Return Tree
    return 8;

  } else {
    // Set Report Figures
    this.festivalFoodOrder.report.time = 21;
    this.festivalFoodOrder.report.pizzas = 1000;
    this.festivalFoodOrder.report.waste = 5;
    this.festivalFoodOrder.report.profit = 2100;

    this.sePointsUp(2, "up");

    this.update(this.level, this.episode, this.trees);
    // Return Tree

    return 9;
  }
}


//EPISODE 2
dragAndDropTrash = {
  result: {
    correct: 0,
    incorrect: 0
  }
}

returnTreeFromTrashResult = () => {

  // ALL CORRECT
  if (this.dragAndDropTrash.result.correct > 15) {
    this.sePointsUp((this.sePoints + 4), "up");
    this.update(this.level, this.episode, this.trees);
    return 2;
  }
  // OVER 3/4 CORRECT
  else if ((this.dragAndDropTrash.result.correct < 15) && (this.dragAndDropTrash.result.correct >= 10)) {
    this.sePointsUp((this.sePoints + 2), "up");
    this.update(this.level, this.episode, this.trees);
    return 3;
  }
  // UNDER 3/4 CORRECT 
  else if ((this.dragAndDropTrash.result.correct < 10) && (this.dragAndDropTrash.result.correct > 5)) {
    this.sePointsUp((this.sePoints - 2), "down");
    this.update(this.level, this.episode, this.trees);
    return 4;
  } 
  // REALLY BAD SCORE
  else {
    this.sePointsUp((this.sePoints - 4), "down");
    this.update(this.level, this.episode, this.trees);
    return 5;
  }
}





// LEVEL 2 FUNCTIONS & DATA
  

  render() {
  
    let result = (
      <div>


        <audio id="cash-up-noise" preload='auto'>
            <source src={require('./audio/cash.mp3')} type="audio/mp3"/>
        </audio>

        <audio id="cash-down-noise" preload='auto'>
            <source src={require('./audio/moneydown.wav')} type="audio/wav"/>
        </audio>
        
        <audio id="sepoints-up-noise" preload='auto'>
            <source src={require('./audio/sepoints.wav')} type="audio/wav"/>
        </audio>

        <audio id="sepoints-down-noise" preload='auto'>
            <source src={require('./audio/sepointsdown.mp3')} type="audio/mp3"/>
        </audio>


        <audio id="elements-basic" preload='auto' loop='true'>
            <source src={require('./audio/elements-basic.wav')} type="audio/wav"/>
        </audio>

        <audio id="elements-kicker" preload='auto' loop='true'>
            <source src={require('./audio/elements-kicker.wav')} type="audio/wav"/>
        </audio>












        {this.state.component.main}
        
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
