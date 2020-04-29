//================================================
//================================================

// This file contains the core React Component that handles the state of the game (level, episode, tree )  

//================================================
// ===============================================



// =============
// Import Statements
// =============


import React from 'react';
import ReactDOM from 'react-dom';
import anime from 'animejs/lib/anime.es.js';
import { components } from './components.js';
import { moreInfo } from './storylines.js';
import { Article } from './article.js';
import { loadingText } from './utils.js';




// =============
// Game React Component
// =============



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

    this.update = this.update.bind(this);
    
  }


   //========================
  // Component did mount and component did update functions used to control loading screen 
  // ========================

  componentDidMount() {
     
      this.componentDidUpdate();
      loadingText();
    }


  componentDidUpdate() {


    // Trigger Loading Screen to Appear and Disappear depending on the loading status of images on each page
    // Code adapted from Stack Overflow post by Florian Margaine on Jun 17 2012
    // accessed 20-04-2020
    // https://stackoverflow.com/questions/11071314/javascript-execute-after-all-images-have-loaded
    
    document.querySelector('.loading-screen').style.display = "block";
    document.querySelector('.loading-screen').style.opacity = 1;
    

    console.log("update")
      var imgs = document.images,
      len = imgs.length,
      counter = 0;

  [].forEach.call( imgs, function( img ) {
      if(img.complete)
        incrementCounter();
      else
        img.addEventListener( 'load', incrementCounter, false );
  } );

  function incrementCounter() {
      counter++;
      if ( counter === len ) {
          console.log( 'All images loaded!' )
          document.querySelector('.loading-screen').style.opacity = 0;
          document.querySelector('.loading-screen').style.display = "none";
      }
  }

  // End of referenced code

  }


  //========================
  // Core function to update the state of this component (binded to constructor)
  //========================

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

  //========================
  // Save previous game state (level, episode, trees) - for use when player decides to read article during gameplay
  //========================

  savedState = {
    level: 0,
    episode: 0,
    trees: 0
  }


  //========================
  // Resume game at previous place
  //========================

  resumeGame = () => {

   this.level = this.savedState.level;
   this.episode = this.savedState.episode;
   this.trees = this.savedState.trees;

  this.update(this.level, this.episode, this.trees);
  }

  //========================
  // Save game state
  //========================

  activateArticle = () => {

    // SAVE STATE FOR LATER RESUME
    this.savedState.level = this.level;
    this.savedState.episode = this.episode;
    this.savedState.trees = this.trees;

    this.level = 6;
    this.episode = 0;
    this.trees = 0;
    this.update(this.level, this.episode, this.trees);
  }

  //========================
  // Increment / Decrement money
  //========================

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


    // ANIMATE MONEY 

    const poundCoinContainer = document.querySelector('.pound-coin-icon-container');
    const iconText = document.querySelector('.pound-coin-icon-container p');

    // CONTAINER ANIMATION

    var timeline = anime.timeline({autoplay: true});

  timeline
    .add({
      targets: poundCoinContainer,
      duration: 100,
      translateX: "50",
      easing: 'linear'
    })
    .add({
      targets: poundCoinContainer,
      duration: 100,
      translateX: "-50",
      easing: 'linear'
    })
    .add({
      targets: poundCoinContainer,
      duration: 100,
      translateX: "0",
      easing: 'linear'
    })


     // TEXT ANIMATION

    var timelineText = anime.timeline({autoplay: true});

    timelineText
    .add({
      targets: iconText,
      duration: 1,
      translateY: "-600",
      opacity: 0
    })
    .add({
      targets: iconText,
      duration: 1,
      opacity: 1
    })
    .add({
      targets: iconText,
      duration: 1000,
      translateY: "0",
    })

    this.money = parseInt(n);
    this.update(this.level, this.episode, this.trees);
  }



  //========================
  // Increment / Decrement Sustainability Points 
  //========================

  sePointsUp = (n, direction) => {

     // Play sepoints noise 
    const upNoise = document.querySelector('#sepoints-up-noise');
    const downNoise = document.querySelector('#sepoints-down-noise');

    if (direction === "up") {
      upNoise.play();
    } else if (direction === "down") {
      downNoise.play();
    }


     // ANIMATE SEPOINTS

    const leafContainer = document.querySelector('.leaf-icon-container');
    const iconText = document.querySelector('.leaf-icon-container p');

    // CONTAINER ANIMATION

    var timeline = anime.timeline({autoplay: true});

  timeline
    .add({
      targets: leafContainer,
      duration: 100,
      translateX: "50",
      easing: 'linear'
    })
    .add({
      targets: leafContainer,
      duration: 100,
      translateX: "-50",
      easing: 'linear'
    })
    .add({
      targets: leafContainer,
      duration: 100,
      translateX: "0",
      easing: 'linear'
    })


     // TEXT ANIMATION

    var timelineText = anime.timeline({autoplay: true});

    timelineText
    .add({
      targets: iconText,
      duration: 1,
      translateY: "-600",
      opacity: 0
    })
    .add({
      targets: iconText,
      duration: 1,
      opacity: 1
    })
    .add({
      targets: iconText,
      duration: 1000,
      translateY: "0",
    })

    this.sePoints = n;
    this.update(this.level, this.episode, this.trees);
  }

  level = 0;
  episode = 0;
  trees = 0;
  money = 70000;
  sePoints = 0;

  popularityFactor = 0.5;

  audioMuted = false;
  audioIconSource = "https://i.imgur.com/gRxYrXW.png"


  // ========================
  // Variables that contribute towards Weekly Earnings
  // ========================

  weekNumber = 1;


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


  //=========================
  // Change cost of Solar Panels depending on whether player collecte solar energy during maze game
  //========================

  solarCost = 30000;

  heroHasSolar = false;

  heroCollectedSolar = () => {

    this.solarCost = 5000;

    this.heroHasSolar = true;
    moreInfo.energy.solarPower.subtitle = "Cost: £5000";
    moreInfo.energy.solarPower.description = "You got government sponsorship for solar panels. This cost is for your installation ... afterwards you don’t have to care about your electricity bill anymore!";
  }



  // ========================================================================
  // ========================================================================

  // CONTENT SPECIFIC Functions usually including ability to turn off button disablement

  // ========================================================================
  // ========================================================================

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

  setSuppliersButtonDisabled = true;

  enableSetSuppliersButton = () => {
    this.setSuppliersButtonDisabled = false;
    this.update(this.level, this.episode, this.trees);
  }

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

  potatoDeadlineButtonDisabled = true;

  enablePotatoDeadlineButton = () => {
    this.potatoDeadlineButtonDisabled = false;
    this.update(this.level, this.episode, this.trees);
  }

  potatoDeadlineDecision = "";


  potatoChaosButtonDisabled = true;

  enablePotatoChaosButton = () => {
    this.potatoChaosButtonDisabled = false;
    this.update(this.level, this.episode, this.trees);
  }

  potatoUnhappyRestaurantDisabled = true;

  enableUnhappyRestaurantButton = () => {
    this.potatoUnhappyRestaurantDisabled = false;
    this.update(this.level, this.episode, this.trees);
  }

  potatoRethinkDisabledButton = true;

  enablepotatoRethinkDisabledButton = () => {
    this.potatoRethinkDisabledButton = false;
    this.update(this.level, this.episode, this.trees);
  }

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


  // ========================
  // Confirm festival order
  // ========================

  confirmOrder = () => {
    const cheese = document.querySelector('#cheese-order-input');
    const tomato = document.querySelector('#tomato-order-input');
    const basil = document.querySelector('#basil-order-input');

    this.festivalFoodOrder.cheese = cheese.value;
    this.festivalFoodOrder.tomato = tomato.value;
    this.festivalFoodOrder.basil = basil.value;

    this.update(this.level, this.episode, this.trees);


}

 // ========================
  // Return subsequent tree from festival food order
  // ========================

returnTreeFromFoodOrder = () => {
  console.log(this.festivalFoodOrder.cheese);
  console.log(this.festivalFoodOrder.tomato);
  console.log(this.festivalFoodOrder.basil);

  if ((this.festivalFoodOrder.cheese > 54)  || (this.festivalFoodOrder.tomato > 56) || (this.festivalFoodOrder.basil > 12)) {
    // Set Report Figures
    this.festivalFoodOrder.report.time = 21;
    this.festivalFoodOrder.report.pizzas = 1000;
    this.festivalFoodOrder.report.waste = 15;
    this.festivalFoodOrder.report.profit = 1200;

    this.sePointsUp((this.sePoints - 2), "down");

    this.update(this.level, this.episode, this.trees);
    // Return Tree
    return 7;

  } else if ((this.festivalFoodOrder.cheese < 48)  || (this.festivalFoodOrder.tomato < 48) || (this.festivalFoodOrder.basil < 8)) {
    // Set Report Figures
    this.festivalFoodOrder.report.time = 15;
    this.festivalFoodOrder.report.pizzas = 700;
    this.festivalFoodOrder.report.waste = 3;
    this.festivalFoodOrder.report.profit = -300;

    this.update(this.level, this.episode, this.trees);
    // Return Tree
    return 8;

  } else {
    // Set Report Figures
    this.festivalFoodOrder.report.time = 21;
    this.festivalFoodOrder.report.pizzas = 1000;
    this.festivalFoodOrder.report.waste = 5;
    this.festivalFoodOrder.report.profit = 3000;

    this.sePointsUp((this.sePoints + 3), "up");

    this.update(this.level, this.episode, this.trees);
    // Return Tree

    return 9;
  }
}


 // ========================
  // FESTIVAL FUNCTIONS AND DATA
  // ========================
dragAndDropTrash = {
  result: {
    correct: 0,
    incorrect: 16
  }
}


 // ========================
  // Return tree from drag and drog result
  // ========================

returnTreeFromTrashResult = () => {

  // ALL CORRECT
  if (this.dragAndDropTrash.result.correct > 14) {
    this.sePointsUp((this.sePoints + 4), "up");
    this.update(this.level, this.episode, this.trees);
    return 2;
  }
  // OVER 2/3 CORRECT
  else if ((this.dragAndDropTrash.result.correct < 15) && (this.dragAndDropTrash.result.correct >= 9)) {
    this.sePointsUp((this.sePoints + 2), "up");
    this.update(this.level, this.episode, this.trees);
    return 3;
  }
  // UNDER 2/3 CORRECT 
  else if ((this.dragAndDropTrash.result.correct < 9) && (this.dragAndDropTrash.result.correct > 5)) {
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


// RESET GAME 
resetGame = () => {

    this.level = 0;
    this.episode = 0;
    this.trees = 0;
    this.money = 70000;
    this.sePoints = 0;

    this.update(this.level, this.episode, this.trees);

}






// RENDER 
  

  render() {

    
  
    let result = (
      <div id="content-wrapper">

        <div className="loading-screen">
          <img id="tree-side" src={require('./images/just-tree-side.png')} />
          <img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
          <img className="leaf-icon-image-loading" src={require('./images/leaf.png')} />
          
          <p id="loading-screen-text" ></p>
           
        </div>

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


        <audio id="trash-noise" preload='auto'>
           <source src={require('./audio/trash.wav')} type="audio/wav"/>
        </audio>

        

        {this.state.component.main}
        
      </div>
    );
    

   
      return result;
    
  
    
  }
};



// Call to render the page
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
