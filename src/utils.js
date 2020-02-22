//========================
// This file contains utility functions 
// =======================


export const arraysMatch = function (arr1, arr2) {

	// Check if the arrays are the same length
	if (arr1.length !== arr2.length) return false;

	// Check if all items exist and are in the same order
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	// Otherwise, return true
	return true;

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

export const addBorderOnClick = function(elementId, button) {
	const element = document.querySelector(elementId);
	element.style.border = "2px solid black";
	element.style.backgroundColor = "#57BA98"

	const setButton = document.querySelector(button);
	console.log(setButton.innerHTML)
	setButton.disabled = false;
}



//==================
// UPDATE GAME STATE WITH ORDER DETAILS  
//==================


export const confirmOrder = function() {
	const cheese = document.querySelector('#cheese-order-input');
	const tomato = document.querySelector('#tomato-order-input');
	const basil = document.querySelector('#basil-order-input');

	this.festivalFoodOrder.cheese = cheese.value;
	this.festivalFoodOrder.tomato = tomato.value;
	this.festivalFoodOrder.basil = basil.value;
}




