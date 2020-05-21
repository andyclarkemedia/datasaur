//================================================
//================================================

// This file contains utility functions that are rendered throughout the app

//================================================
// ===============================================


// =============
// Import Statements
// =============

import anime from 'animejs/lib/anime.es.js';
import Typed from 'typed.js';



// =============
// Toggle Mute Audio
// =============


  export const muteAudio = (game) => {
  	
  	// SELECT AUDIO CLIPS 

  	const cashUp = document.querySelector('#cash-up-noise');
  	const cashDown = document.querySelector('#cash-down-noise');
  	const seNoiseUp = document.querySelector('#sepoints-up-noise');
  	const seNoiseDown = document.querySelector('#sepoints-down-noise');
  	const trashNoise = document.querySelector('#trash-noise');

  	const playAudioIcon = document.querySelector('#play-audio-icon');
  	const muteAudioIcon = document.querySelector('#mute-audio-icon');


  	if (game.audioMuted === true) {

	  	const noiseArray = [cashUp, cashDown, seNoiseUp, seNoiseDown, trashNoise];

		noiseArray.forEach(function(item) {
			item.muted = false;
		})

		game.audioMuted = false;
		game.audioIconSource = "https://i.imgur.com/gRxYrXW.png";

  	} else {

	  	const noiseArray = [cashUp, cashDown, seNoiseUp, seNoiseDown, trashNoise];

		noiseArray.forEach(function(item) {
			item.muted = true;
		})

		game.audioMuted = true;
		game.audioIconSource = "https://i.imgur.com/tvEes8a.png";
  	}

  	game.update(game, game.level, game.episode, game.trees)

  }



// =============
// Calculate weekly earnings based on decisions made throughout game
// =============

export const calculateWeeklyEarnings = (game) => {

	// Calculate turnover
	const turnover = game.weeklyEarnings.turnover.daysOpen * (game.weeklyEarnings.turnover.customersPerDay * game.weeklyEarnings.turnover.averageMealPrice);

	// Calculate costs 
	const costs = (game.weeklyEarnings.costs.staff.nStaff * game.weeklyEarnings.costs.staff.hourlyWage) + game.weeklyEarnings.costs.packaging + game.weeklyEarnings.costs.supplier.supplierCost + game.weeklyEarnings.costs.energy.gas + game.weeklyEarnings.costs.energy.electricity + game.weeklyEarnings.costs.rent + game.weeklyEarnings.costs.salesForecast;

	let total = (turnover - costs) * game.popularityFactor;

	return total;
}

// =============
// Update weekly earnings every week during the animation screen
// =============

export const timePassing = (game, weekBegin, weekEnd) => {

	// Select week text
	const weekText = document.querySelector('#weekly-timer');
	const weekTextContainer = document.querySelector('.week-number-container');
	const plusEarningsText = document.querySelector('#weekly-earnings');

	// Set Timer 
	var weeklyTimer = setInterval(function(){

	// Display Speech Bubble

	displaySpeechBubble();

	// Set starting week variable
	let weekNumber = game.weekNumber;

  	if(weekNumber < weekEnd){
  		weekText.innerHTML = "Week " + weekNumber;

  		// Initiate weekly earnings with element of randomness 
    	
    	let weeklyEarnings = calculateWeeklyEarnings(game) + Math.floor(Math.random() * (100 - (-100))) + (-100);

    	plusEarningsText.innerHTML = "+ " + parseInt(weeklyEarnings)

    	

    	game.moneyUp(parseInt(game.money + weeklyEarnings), "up")
    	
    	
 	} else {
   	 	weekText.innerHTML = "Week " + weekNumber;
   	 	let weeklyEarnings = calculateWeeklyEarnings(game) + Math.floor(Math.random() * (500 - (-500))) + (-500);

    	plusEarningsText.innerHTML = "+ " + parseInt(weeklyEarnings)

    	game.moneyUp(parseInt(game.money + weeklyEarnings), "up")

    	game.enableTimePassingButton(); 

   	 	clearInterval(weeklyTimer);

   	 	hideSpeechBubble();


  	}
  	game.weekNumber += 1;


	}, 2400);



}


// =============
// Animate reaction icons depending on popularity factor
// =============

export const animateFeedback = function(game) {


	// DECLARE SOURCE OBJECT

	const sourceObject = {
		thumbsUp: "https://i.ibb.co/Xppgs3B/thumbs-up.png",
		thumbsDown: "https://i.ibb.co/2MJ4w44/thumbs-down.png",
		love: "https://i.ibb.co/n88Ym28/heart.png"
	}


	// SELECT PICTURES 

	const feedbackIcons = document.querySelectorAll('.feedback-icon');

	// SET COUNTER AND POPULARITY FACTOR
	let counter = 0;
	let popularity = game.popularityFactor;

	// 

	feedbackIcons.forEach(function(element) {

		if (counter < 1) {
			// Adjust SRC depending on popularity factor 
			if (counter < popularity) {
				if (counter > 0.4) {
					element.src = sourceObject.love;
				} else {
					element.src = sourceObject.thumbsUp;
				}
				
			} else if (counter > popularity) {
				if (counter > 0.8) {
					element.src = sourceObject.thumbsUp;
				} else {
					element.src = sourceObject.thumbsDown;
				}
				
			} else {
				element.src = sourceObject.thumbsUp;
			}
		}

		counter += 0.1;
		
	})


	// GET POSITIONS

	var positionMarker = document.querySelector("#position-identifier").getBoundingClientRect();


	// ANIMATION TIMELINE TO MAKE REACTION ICONS APPEAR AND FADE UPWARDS


	var timeline = anime.timeline({autoplay: true});

	timeline
		.add({
			targets: feedbackIcons[3],
			duration: 1,
			opacity: 1,
			translateY: positionMarker.top,
			delay: 3000
		})
		.add({
			targets: feedbackIcons[3],
			duration: 1000,
			translateY: 0,
			opacity: 0,
			delay: 500,
		})
		.add({
			targets: feedbackIcons[2],
			duration: 1,
			opacity: 1,
			translateY: positionMarker.top,
		})
		.add({
			targets: feedbackIcons[2],
			duration: 1000,
			translateY: 0,
			opacity: 0,
			delay: 500,
		})
		.add({
			targets: feedbackIcons[9],
			duration: 1,
			opacity: 1,
			translateY: positionMarker.top,
		})
		.add({
			targets: feedbackIcons[9],
			duration: 1000,
			translateY: 0,
			opacity: 0,
			delay: 500,
		})
		.add({
			targets: feedbackIcons[0],
			duration: 1,
			opacity: 1,
			translateY: positionMarker.top,
		})
		.add({
			targets: feedbackIcons[0],
			duration: 1000,
			translateY: 0,
			opacity: 0,
			delay: 500,
		})
		.add({
			targets: feedbackIcons[7],
			duration: 1,
			opacity: 1,
			translateY: positionMarker.top,
		})
		.add({
			targets: feedbackIcons[7],
			duration: 1000,
			translateY: 0,
			opacity: 0,
			delay: 500,
		})
		.add({
			targets: feedbackIcons[1],
			duration: 1,
			opacity: 1,
			translateY: positionMarker.top,
		})
		.add({
			targets: feedbackIcons[1],
			duration: 1000,
			translateY: 0,
			opacity: 0,
			delay: 500,
		})
		.add({
			targets: feedbackIcons[4],
			duration: 1,
			opacity: 1,
			translateY: positionMarker.top,
		})
		.add({
			targets: feedbackIcons[4],
			duration: 1000,
			translateY: 0,
			opacity: 0,
			delay: 500,
		})
		.add({
			targets: feedbackIcons[5],
			duration: 1,
			opacity: 1,
			translateY: positionMarker.top,
		})
		.add({
			targets: feedbackIcons[5],
			duration: 1000,
			translateY: 0,
			opacity: 0,
			delay: 500,
		})

}



// =============
// Animate movement of people into restaurant 
// =============


export const animatePeople = function() {

	const personOne = document.querySelector('#person-one')
	const personTwo = document.querySelector('#person-two')
	const personThree = document.querySelector('#person-three')
	const personFour = document.querySelector('#person-four')
	const personFive = document.querySelector('#person-five')
	const personSix = document.querySelector('#person-six')
	const personSeven = document.querySelector('#person-seven')
	const personEight = document.querySelector('#person-eight')
	const personNine = document.querySelector('#person-nine')
	const personTen = document.querySelector('#person-ten')
	const personEleven = document.querySelector('#person-eleven')
	const personTwelve = document.querySelector('#person-twelve')

	const peopleArray = [personOne, personTwo, personThree, personFour, personFive, personSix, personSeven, personEight, personNine, personTen, personEleven, personTwelve]


	let positionIdentifier = document.querySelector('#position-identifier');
	let positionIdentifierTop = document.querySelector('#position-identifier-top');
	let pizzaImage = document.querySelector('#planet-pizza-animation');

	


	peopleArray.forEach(function(item) {


	anime({
	  targets: item,
	  // Properties 
	  translateX: 500,
	  
	  // Property Parameters
	  duration: 30000,
	  easing: 'steps(300)',

	  // Animation Parameters
	  update: function(anim) {

	  	// Code to get position of element relative to window
		// Modified from Stack Overflow post by Ian Storm Taylor on Apr 9 '16
		// accessed 07-03-2020
		// https://stackoverflow.com/questions/16949642/getboundingclientrect-but-relative-to-the-entire-document

		var rect = item.getBoundingClientRect();

		let positionMarker = positionIdentifier.getBoundingClientRect();
		let pizzaCoordinates = pizzaImage.getBoundingClientRect();


		let actualPosition = (positionMarker.right + positionMarker.left) / 2;


		let left   = rect.left   + window.scrollX;
		let top    = rect.top    + window.scrollY;
		let right  = rect.right  + window.scrollX;
		let bottom = rect.bottom + window.scrollY;

		// End of referenced code

		item.style.top = (pizzaCoordinates.top + ((pizzaCoordinates.height * 7) / 10))  + "px";

	

	  	if (right > actualPosition) {
	  		item.style.opacity = 0
	  		item.style.display = "none"
	  	} else if (right < 1050) {
	  	}
	  }
	})

	});

};  


//==================
// HOVER OVER IMAGE MAKE TEXT APPEAR / DISAPPEAR 
//==================

export const hoverHeadTextAppear = function(textid) {
	const text = document.querySelector(textid)
	text.style.display = "block"
}

export const hoverHeadTextDisappear = function(textid) {
	const text = document.querySelector(textid)
	text.style.display = "none" 
}

//==================
// ADD BORDER ON CLICK 
//==================

export const addBorderOnClick = function(elementId) {
	const element = document.querySelector(elementId);
	element.style.border = "2px solid black";
	element.style.backgroundColor = "#57BA98"
}

//=================
// CHECK ORDER INPUTS BEFORE ALLOWING NEXT LEVEL
//=================

export const checkOrderInput = function(game, n) {
	const inputOne = document.querySelector('#cheese-order-input');
	const inputTwo = document.querySelector('#tomato-order-input');
	const inputThree = document.querySelector('#basil-order-input');

	if (inputOne.value && inputTwo.value && inputThree.value) {

		if ((inputTwo.value < 65) && (inputOne.value < 65) && (inputThree.value < 18)) {
			game.updateTreeBranch(n);
			game.confirmOrder();
		} else {
			alert("Hold up! Your suppliers don't have that much stock. You'll need to order less ...")
			console.log(inputTwo.value);
			console.log(inputThree.value);
			console.log(inputOne.value);
		}
		
	} else {
		alert("Please enter your order!")
	}
}


//======================================================
//======================================================

// DRAG AND DROP 

//======================================================
//======================================================



// ===============
// Touch Screen Drag
// ===============

export const mobileDrag = function(event, id) {

	// SELECT AND HIDE TICK AND CROSS
	const cross = document.querySelector('#cross-image');
	const tick = document.querySelector('#tick-image');

	tick.style.display = "none";
	cross.style.display = "none";
	
	// Select Element 
	const elementToDrag = document.querySelector(id);

	// Initiate drag and drop functionality on touch screen devices
	// Modified from Medium article post by Deepak Kadarivel on Jun 3 '18
	// accessed 20-03-2020
	// https://medium.com/@deepakkadarivel/drag-and-drop-dnd-for-mobile-browsers-fc9bcd1ad3c5
	
	var touchLocation = event.targetTouches[0];


	elementToDrag.style.left = touchLocation.pageX + 'px';
    elementToDrag.style.top = touchLocation.pageY + 'px';

    // End of referenced code
}

// ===============
// Touch Screen Drop
// ===============


export const mobileDrop = function(event, id, game) {

	// SELECT TICK AND CROSS
	const cross = document.querySelector('#cross-image');
	const tick = document.querySelector('#tick-image');

	// Select Element 
	const elementToDrag = document.querySelector(id);

	var x = parseInt(elementToDrag.style.left);
    var y = parseInt(elementToDrag.style.top);

    // Get Audio and play 
	const trashNoise = document.querySelector("#trash-noise");


    // Select Bins 
    const recyclingBinPosition = document.querySelector('#drop-bin-one').getBoundingClientRect();
    const generalBinPosition = document.querySelector('#drop-bin-two').getBoundingClientRect();
    const foodBinPosition = document.querySelector('#drop-bin-three').getBoundingClientRect();

    // Check if location of draggable image matches drop bin location

    if ((x > recyclingBinPosition.left) && (x < recyclingBinPosition.right) && (y > recyclingBinPosition.top) && (y < recyclingBinPosition.bottom)) {
    	if (id.includes("recycling")) {
    		elementToDrag.style.display = "none";
    		game.dragAndDropTrash.result.correct += 1;
    		game.dragAndDropTrash.result.incorrect -= 1;
			tick.style.display = "block";
			displayNextImage();
			trashNoise.play();

		} else {
			elementToDrag.style.display = "none";
			cross.style.display = "block";
			displayNextImage();
			trashNoise.play();
    	}
    } else if ((x > generalBinPosition.left) && (x < generalBinPosition.right) && (y > generalBinPosition.top) && (y < generalBinPosition.bottom)) {
    	if (id.includes("general")) {
    		elementToDrag.style.display = "none";
    		game.dragAndDropTrash.result.correct += 1;
    		game.dragAndDropTrash.result.incorrect -= 1;
			tick.style.display = "block";
			displayNextImage();
			trashNoise.play();

		} else {
			elementToDrag.style.display = "none";
			cross.style.display = "block";
			displayNextImage();
			trashNoise.play();
    	}
    } else if ((x > foodBinPosition.left) && (x < foodBinPosition.right) && (y > foodBinPosition.top) && (y < foodBinPosition.bottom)) {
    	if (id.includes("food")) {
    		elementToDrag.style.display = "none";
    		game.dragAndDropTrash.result.correct += 1;
    		game.dragAndDropTrash.result.incorrect -= 1;
			tick.style.display = "block";
			displayNextImage();
			trashNoise.play();

		} else {
			elementToDrag.style.display = "none";
			cross.style.display = "block";
			displayNextImage();
			trashNoise.play();
    	}
    } else {
    	elementToDrag.style.top = "5vh";
    	elementToDrag.style.right = "45vw";
    	elementToDrag.style.left = "55vw";
    }

}




let counter = 0;


// ===============
// Standard Drag
// ===============


export const onDragStart = function(event) {

	// Initiate drag on desktop devices
	// Modified from Alligator article post by Jess Mitchell on Aug 27 '19
	// accessed 15-03-2020
	// https://alligator.io/js/drag-and-drop-vanilla-js/


  event
    .dataTransfer
    .setData('text/plain', event.target.id);

    // End of referenced code

    // Declare tick and cross

	const cross = document.querySelector('#cross-image');
	const tick = document.querySelector('#tick-image');

	tick.style.display = "none";
	cross.style.display = "none";
}

// ===============
// Prevent default behaviour on drag over
// ===============

export const onDragOver = function(event) {
  event.preventDefault();
}


// ===============
// Standard Drop 
// ===============

export const onDrop = function(event, game) {


	// Complete drag on desktop devices
	// Modified from Alligator article post by Jess Mitchell on Aug 27 '19
	// accessed 15-03-2020
	// https://alligator.io/js/drag-and-drop-vanilla-js/

event.preventDefault();

const id = event
	.dataTransfer
	.getData('text');

const draggableElement = document.getElementById(id);
const dropzone = event.target;
const origin = document.querySelector('.trash-image-container');

dropzone.appendChild(draggableElement);


	// End of referenced code

// Declare tick and cross

const cross = document.querySelector('#cross-image');
const tick = document.querySelector('#tick-image');

// Get Audio and play 
const trashNoise = document.querySelector("#trash-noise");
trashNoise.play();



if ((id.includes("food")) && (dropzone.id === "drop-bin-three")) {
	console.log("Correct");
	game.dragAndDropTrash.result.correct += 1;
	game.dragAndDropTrash.result.incorrect -= 1;
	tick.style.display = "block";
} else if ((id.includes("general")) && (dropzone.id === "drop-bin-two")) {
	console.log("Correct");
	game.dragAndDropTrash.result.correct += 1;
	game.dragAndDropTrash.result.incorrect -= 1;
	tick.style.display = "block";

} else if((id.includes("recycling")) && (dropzone.id === "drop-bin-one")) {
	console.log("Correct");
	game.dragAndDropTrash.result.correct += 1;
	game.dragAndDropTrash.result.incorrect -= 1;
	tick.style.display = "block";
}

else {
	console.log("Incorrect");
	cross.style.display = "block";

}
	dropzone.removeChild(draggableElement);
	origin.appendChild(draggableElement);
	draggableElement.style.display = "none";


}



// ===============
// Initiate next image to appear after previous image has been processed
// ===============


export const displayNextImage = function() {


	const imageArray = ["#drag-two-food", "#drag-three-recycling", "#drag-four-food", "#drag-five-general", "#drag-six-food", "#drag-seven-recycling", "#drag-eight-general", "#drag-nine-food", "#drag-ten-recycling", "#drag-eleven-general", "#drag-twelve-food", "#drag-thirteen-food", "#drag-fourteen-food", "#drag-fifteen-recycling", "#drag-sixteen-recycling"]

	if (counter <= imageArray.length -1) {
		const nextImage = document.querySelector(imageArray[counter]);
		nextImage.style.visibility = "visible";
		nextImage.style.opacity = "1";
		

		counter += 1;

	}
	
}

// ===============
// Drag and Drop Timer
// ===============

export const countdown = function(game) {
	// Declare Countdown Element
	const countdownElement = document.getElementById("drag-drop-timer");

	// Set Time
	var timeleft = 29;
	var downloadTimer = setInterval(function(){
  	if(timeleft <= 0){
  		countdownElement.innerHTML = ":0";
    	clearInterval(downloadTimer);
    	game.updateTreeBranch(game.returnTreeFromTrashResult());
    	
    	
 	} else {
   	 	countdownElement.innerHTML = ":" + timeleft;
  	}
  	timeleft -= 1;
	}, 1000);
}


//======================================================
//======================================================

// SELECTING SUPPLIERS

//======================================================
//======================================================

//==================
// Master Function to control selection of suppliers
//==================


export const selectSupplier = function(elementSelect, elementTwo, elementThree, game, type) {

	let selection = document.querySelector(elementSelect);
	let otherChoiceOne = document.querySelector(elementTwo);
	let otherChoiceTwo = document.querySelector(elementThree);

	selection.style.border = "2px solid black";
	selection.style.backgroundColor = "#57BA98";

	otherChoiceOne.style.border = "none";
	otherChoiceOne.style.backgroundColor = "#65CCB8";

	otherChoiceTwo.style.border = "none";
	otherChoiceTwo.style.backgroundColor = "#65CCB8";
	

	// UPDATE GAME WITH CHOICE

	if (type === "energy") {
		updateEnergySupplier(elementSelect, game);
	} else if (type === "furniture") {
		updateFurnitureSelection(elementSelect, game)
	} else if (type === "tomato") {
		updateFoodSupplierSelection(elementSelect, "tomato", game)
	} else if (type === "cheese") {
		updateFoodSupplierSelection(elementSelect, "cheese", game)
	} else if (type === "chicken") {
		updateFoodSupplierSelection(elementSelect, "chicken", game)
	} else if (type === "pork") {
		updateFoodSupplierSelection(elementSelect, "pork", game)
	} else if (type === "potato") {
		updateFoodSupplierSelection(elementSelect, "potato", game)
	} else if (type === "potato-choice") {
		updatePotatoDecision(elementSelect, game)
	} else if (type === "packaging") {
		updatePackagingDecision(elementSelect, game)
	} else if (type === "cutlery") {
		updateCutleryDecision(elementSelect, game)
	} else if (type === "potato-rethink-choice") {
		updatePotatoSupplier(elementSelect, game);
	} else if (type === "potato-organic-choice") {
		updateDeadlinePotatoDecision(elementSelect, game)
	}

};



//==================
// Update Energy Supplier in Index.js
//==================

const updateEnergySupplier = function(elementSelect, game) {
	if (elementSelect === "#solar-image") {
		game.energySupplier = "solar";
	} else if (elementSelect === "#pylon-image") {
		game.energySupplier = "grid";
	} else {
		game.energySupplier = "ethical energy supplier"
	}
}

//==================
// Take action from energy supplier decision
//==================

export const assessEnergySupplier = function(game) {
	// Check energy supplier 

	if (game.energySupplier === "solar") {

		// Take away cost of solar panels from money 
		game.moneyUp((game.money - game.solarCost), "down")

		game.sePointsUp( game.sePoints + 10, "up")

		// Ensure weekly electricity is 0

		game.weeklyEarnings.costs.energy.electricity = 0;

	} else if (game.energySupplier === "grid") {

		game.weeklyEarnings.costs.energy.electricity = 350;

	} else if (game.energySupplier === "ethical energy supplier") {

		game.weeklyEarnings.costs.energy.electricity = 500;

		game.sePointsUp( game.sePoints + 5, "up")
	}
}


//==================
// Update Furniture Supplier in Index.js
//==================


const updateFurnitureSelection = function(elementSelect, game) {
	if (elementSelect === "#upcycle-image") {
		game.furnitureSelection = "upcycle";
	} else if (elementSelect === "#budget-image") {
		game.furnitureSelection = "budget";
	} else {
		game.furnitureSelection = "luxury"
	}
}


//==================
// Take action from furniture supplier decision
//==================

export const assessFurnitureSelection = function(game) {
	if (game.furnitureSelection === "upcycle") {
		game.sePointsUp( game.sePoints + 8, "up")
		game.moneyUp((game.money - 7500), "down")

		// Change week of game 
		game.weekNumber = 4;
	} else if (game.furnitureSelection === "budget") {
		game.moneyUp((game.money - 10000), "down")


	} else if (game.furnitureSelection === "luxury") {
		game.sePointsUp( game.sePoints + 4, "up")
		game.moneyUp((game.money - 25000), "down")
	}
}


//==================
// Update Food Supplier in Index.js
//==================

const updateFoodSupplierSelection = function(elementSelect, foodType, game) {

	if (elementSelect.includes("wholesale")) {

		game.suppliers[foodType] = "wholesale";

	} else if (elementSelect.includes("spade")) {

		game.suppliers[foodType] = "local";
		

	} else if (elementSelect.includes("tractor")) {

		game.suppliers[foodType] = "organic";
	}


	// ENABLE SET BUTTON 

	if ((game.suppliers.tomato !== "") && (game.suppliers.cheese !== "") && (game.suppliers.chicken !== "") && (game.suppliers.pork !== "") & (game.suppliers.potato !== "")) {
		game.enableSetSuppliersButton();
	}

}


//==================
// Take action from Food supplier decision
//==================

export const assessFoodSupplierSelection = function(game, foodType) {

	game.weeklyEarnings.costs.supplier.supplierCost += parseInt(game.suppliers.costs[foodType][game.suppliers[foodType]]);

	console.log(parseInt(game.suppliers.costs[foodType][game.suppliers[foodType]]))


	if (game.suppliers[foodType] === "local") {
		game.sePointsUp( game.sePoints + 3, "up")
	} else if (game.suppliers[foodType] === "organic") {
		game.sePointsUp( game.sePoints + 2, "up")
	}

	
}


//==================
// Update Potato Supplier in Index.js
//==================

export const updatePotatoSupplier = function(elementSelect, game) {

	console.log(game.potatoInitialDecision)

	if (elementSelect.includes("organic")) {
		game.potatoInitialDecision = "organic";
	} else if (elementSelect.includes("wholesale")) {
		game.potatoInitialDecision = "wholesale";


	}

	game.enablePotatoChaosButton();

}



//==================
// Return tree path from sub potato decision
//==================


export const assessTreeFromRethinkPotatoSupplier = function(game) {
	if (game.potatoInitialDecision === "organic") {
		return 10;
	} else if (game.potatoInitialDecision === "wholesale") {
		return 2;
	}

}


//==================
// Adjust costs of suppliers based on sub potato decision
//==================


export const adjustSupplierCostOnPotatoDecision = function(game) {

	// Update supplier cost depending on potato choice

	if (game.potatoInitialDecision === "wholesale") {
		game.weeklyEarnings.costs.supplier.supplierCost -= 100;
 	} else if (game.potatoInitialDecision === "organic") {
	game.weeklyEarnings.costs.supplier.supplierCost += 150;
 	} else {
 		console.log("didn't work")
 	}
}



//==================
// NOW DEFUNCT FUNCTION ↓↓↓↓
//==================

export const showDescriptiveTextOnMouseOver = function(costValueText, moreInfoText) {


	const container = document.querySelector('.further-description-container');
	container.style.display = "block"

	const costValue = document.querySelector('#further-description-cost-value');

	const moreInfo = document.querySelector('#further-description-more-info-value');

	costValue.innerHTML = costValueText;
	moreInfo.innerHTML = moreInfoText;

}

//==================
// NOW DEFUNCT FUNCTION ↓↓↓↓
//==================

export const hideDescriptiveTextOnMouseOut = function() {
	const container = document.querySelector('.further-description-container');
	container.style.display = "none";
}



//==================
// Update main potato decision
//==================


export const updatePotatoDecision = function(elementSelect, game) {

	if (elementSelect.includes("wholesale")) {

		game.potatoInitialDecision = "wholesale";

	} else if (elementSelect.includes("organic")) {

		game.potatoInitialDecision = "organic";

	} else if (elementSelect.includes("menu")) {

		game.potatoInitialDecision = "menu";

	};

	game.enablePotatoButton();

}

//==================
// Return tree path from main potato decision
//==================


export const assessPotatoDecision = function(game) {

	if(game.potatoInitialDecision === "wholesale") {

		return 2;

	} else if (game.potatoInitialDecision === "organic") {

		return 10;

	} else if (game.potatoInitialDecision === "menu") {

		return 6;
	}
}


//==================
// Return tree path from 2nd sub potato decision 
//==================


export const updateDeadlinePotatoDecision = function(elementSelect, game) {

	if (elementSelect.includes("express")) {

		game.potatoDeadlineDecision = "express";
		
	} else if (elementSelect.includes("staff")) {

		game.potatoDeadlineDecision = "staff";

	} else if (elementSelect.includes("wholesale")) {

		game.potatoDeadlineDecision = "wholesale";

	};

	game.enablePotatoDeadlineButton();

}

//==================
// Take action from 2nd sub potato decision
//==================


export const assessDeadlinePotatoDecision = function(game) {

	let tree;

	if (game.potatoDeadlineDecision === "express") {
		game.moneyUp((game.money - 200) , "down")

		tree = 11;
		return tree;
	} else if (game.potatoDeadlineDecision === "staff") {

		game.moneyUp((game.money - 250) , "down")

		tree = 16;
		return tree;
	} else if (game.potatoDeadlineDecision === "wholesale") {

		tree = 2;
		return tree;
	};

}

//==================
// Update Packaging Supplier in Index.js
//==================

export const updatePackagingDecision = function(elementSelect, game) {


	if (elementSelect.includes("plastic")) {

		game.packagingChoice = "plastic";

	} else if (elementSelect.includes("bio")) {

		game.packagingChoice = "bio";

	} else if (elementSelect.includes("compostable")) {

		game.packagingChoice = "compostable";

	};

	game.enablePackagingButton();

}


//==================
// Take action from packaging decision 
//==================

export const assessPackagingDecision = function (game) {

	if(game.packagingChoice === "plastic") {

		game.weeklyEarnings.costs.packaging += 250;

		updatePopularity(game, (game.popularityFactor - 0.25))

		game.moneyUp((game.money - 250), "down")

		return 4;

	} else if (game.packagingChoice === "bio") {

		game.weeklyEarnings.costs.packaging += 400

		updatePopularity(game, (game.popularityFactor + 0.15))

		game.moneyUp((game.money - 400), "down")

		game.sePointsUp((game.sePoints + 3), "up")

		return 2;

	} else if (game.packagingChoice === "compostable") {

		game.weeklyEarnings.costs.packaging += 500

		updatePopularity(game, (game.popularityFactor + 0.25))

		game.moneyUp((game.money - 500), "down")

		game.sePointsUp((game.sePoints + 3), "up")

		return 2;
	}

}


//==================
// Update popularity in Index.js
//==================

export const updatePopularity = function(game, n) {
	game.popularityFactor = n;
}



//==================
// INCREASE / DECREASE MEAL PRICE 
//==================

export const increaseMealPrice = function(game) {

	// Increase Meal Price
	game.weeklyEarnings.turnover.averageMealPrice += 1.5;


	// Decrease Popularity 
	updatePopularity(game, (game.popularityFactor - 0.1))

}

export const decreaseMealPrice = function(game) {

	game.weeklyEarnings.turnover.averageMealPrice -= 1;

}


//==================
// If player chooses to offer a discout - change average meal price and increase SE points
//==================


export const offerDiscount = function(game) {

	game.weeklyEarnings.turnover.averageMealPrice -= 1;

	game.sePointsUp((game.sePoints + 5), "up")

}



//==================
// Update cutlery decision in Index.js
//==================


export const updateCutleryDecision = function(elementSelect, game) {


	if (elementSelect.includes("plastic")) {

		game.cutleryChoice = "plastic";

	} else if (elementSelect.includes("wooden")) {

		game.cutleryChoice = "wooden";

	} else if (elementSelect.includes("none")) {

		game.cutleryChoice = "none";

	};

	game.enableCutleryButton();
	console.log(game.cutleryChoice)

}


//==================
// Take action from cutlery decision 
//==================


export const assessCutleryDecision = function (game) {

	if(game.cutleryChoice === "plastic") {

		game.weeklyEarnings.costs.packaging += 50;

		updatePopularity(game, (game.popularityFactor - 0.1))

		game.moneyUp((game.money - 50), "down")

		return 2;

	} else if (game.cutleryChoice === "wooden") {

		game.weeklyEarnings.costs.packaging += 100

		updatePopularity(game, (game.popularityFactor + 0.15))

		game.moneyUp((game.money - 100), "down")

		game.sePointsUp((game.sePoints + 3), "up")

		return 2;

	} else if (game.cutleryChoice === "none") {

		updatePopularity(game, (game.popularityFactor - 0.1))

		game.sePointsUp((game.sePoints + 5), "up")

		return 2;
	}

}



//==================
// Hide maze instructions panel 
//==================


export const hideInstructionsPanel = function() {

	const instructionsPanel = document.querySelector('#instructions-panel')

	instructionsPanel.style.display = 'none';
	instructionsPanel.innerHTML = "";

}


//==================
// Reveal instructions panel on maze game over
//==================

export const showFinishedPanel = function() {


	const finishedPanel = document.querySelector('#finished-panel');

	finishedPanel.style.display = "grid";

}



//==================
// DISABLE TIME PASSING BUTTON 
//==================


export const disableTimePassingButton = function(game) {
	game.timePassingButtonDisabled = true;
}





//==================
// Display more info container using the help icon and fill with content 
//==================


export const displayMoreInfo = function(title, subtitle, description) {

	const infoTitle = document.querySelector('#more-info-title');
	const infoSubtitle = document.querySelector('#more-info-subtitle');
	const infoDescription = document.querySelector('#more-info-description');

	infoTitle.innerHTML = title;
	infoSubtitle.innerHTML = subtitle;
	infoDescription.innerHTML = description;



	// Select container 
	const container = document.querySelector('.more-info-container');

	var timeline = anime.timeline({autoplay: true});

	timeline
		.add({
			targets: container,
			duration: 100,
			zIndex: 1500,
		})
		.add({
			targets: container,
			duration: 1000,
			height: "40vh",
			opacity: "0.9",
		})


}

//==================
// Hide more info container using the close window icon
//==================

export const hideMoreInfo = function() {

	// Select container 
	const container = document.querySelector('.more-info-container');

	var timeline = anime.timeline({autoplay: true});

	timeline
		.add({
			targets: container,
			duration: 100,
			zIndex: -5
		})
		.add({
			targets: container,
			duration: 1000,
			height: "0vh",
			opacity: "0",
		})
}


//==================
// Display ingredients more info container using the help icon and fill with content 
//==================

export const displayMoreInfoIngredients = function(title, costOneInput, costTwoInput, costThreeInput, description) {


	const infoTitle = document.querySelector('#more-info-title');
	const costOne = document.querySelector('#more-info-cost-one');
	const costTwo = document.querySelector('#more-info-cost-two');
	const costThree = document.querySelector('#more-info-cost-three');
	const infoDescription = document.querySelector('#more-info-description-ingredients');


	infoTitle.innerHTML = title;
	costOne.innerHTML = costOneInput;
	costTwo.innerHTML = costTwoInput;
	costThree.innerHTML = costThreeInput;
	infoDescription.innerHTML = description;


	// Select container 
	const container = document.querySelector('.more-info-container');

	var timeline = anime.timeline({autoplay: true});

	timeline
		.add({
			targets: container,
			duration: 100,
			zIndex: 1500,
		})
		.add({
			targets: container,
			duration: 1000,
			height: "40vh",
			opacity: "0.9",
		})

		
}


//==================
// Declare array of speech bubble image sources
//==================

const speechSourceArray = ["https://images.pexels.com/photos/4198966/pexels-photo-4198966.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4198966/pexels-photo-4198966.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4198966/pexels-photo-4198966.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4199007/pexels-photo-4199007.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4199007/pexels-photo-4199007.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4199029/pexels-photo-4199029.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4199029/pexels-photo-4199029.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4199029/pexels-photo-4199029.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4199049/pexels-photo-4199049.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4199049/pexels-photo-4199049.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4199049/pexels-photo-4199049.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4199065/pexels-photo-4199065.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4199065/pexels-photo-4199065.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4199076/pexels-photo-4199076.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4199076/pexels-photo-4199076.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4199076/pexels-photo-4199076.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4199092/pexels-photo-4199092.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4199092/pexels-photo-4199092.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4199101/pexels-photo-4199101.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4199101/pexels-photo-4199101.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4199101/pexels-photo-4199101.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4199155/pexels-photo-4199155.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4199155/pexels-photo-4199155.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/4199155/pexels-photo-4199155.png?auto=compress&cs=tinysrgb&dpr=1&w=500"]
let speechCounter = 0;


//==================
// Function to display speech bubble and increment counter
//==================

const displaySpeechBubble = function() {

	// Select image container 
	const image = document.querySelector('.speech-bubble');
	image.src = speechSourceArray[speechCounter];
	image.style.display = 'block';

	speechCounter += 1;
}

//==================
// Hide speech bubble
//==================

const hideSpeechBubble = function() {
	const image = document.querySelector('.speech-bubble');

	image.style.display = "none";
}




//==================
// Assess whether a player passes the winning threshold and display the correct finishing screen
//==================


export const calculateWin = function(game) {


	let moneyThreshold = 70000;
	let sePointsThreshold = 30;


	// WINNER 

	if ((game.money >= moneyThreshold) && (game.sePoints >= sePointsThreshold)) {
		return 0;
	} 
	// LOSE SE POINTS
	else if ((game.money >= moneyThreshold) && (game.sePoints < sePointsThreshold)) {
		return 1;
	}	
	// LOSE MONEY
	else if ((game.money < moneyThreshold) && (game.sePoints >= sePointsThreshold)) {
		return 2;
	}
	// LOSE BOTH
	else if ((game.money < moneyThreshold) && (game.sePoints < sePointsThreshold)) {
		return 3;
	} else {
		console.log("broken")
	}

}




//==================
// Animate Loading Screen with typed.js for text and anime.js for image rotation
//==================


export function loadingText() {
	
  var typed = new Typed('#loading-screen-text', {
  strings: ["Loading ..."],
  typeSpeed: 100,
  loop: true
	});


  const leaf = document.querySelector('.leaf-icon-image-loading');
  

  var timeline = anime.timeline({autoplay: true, loop: true});

	timeline
		.add({
			targets: leaf,
			duration: 1500,
			rotateY: "360deg",
			easing: 'linear'
		})
		
}

