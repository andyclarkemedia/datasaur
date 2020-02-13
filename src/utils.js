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

export const levelUp = function() {
	return 1;
}

export const episodeUp = function() {
	return { };
}



