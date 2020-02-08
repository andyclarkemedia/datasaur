//========================
// This file contains components to be renderered 
// =======================

import React from 'react';
import './index.css';
import { paths } from './logic.js';
import { explanation, characters } from './storylines.js';
import { arraysMatch } from './utils.js';


export const components = (arr1) => {


	const componentsObjects = {
	welcome: {
		key: paths.startingPath,
		res: (
			<div>
				<h1>{ explanation[0] }</h1>
			</div>
			)
	},
	explanation: {
		key: paths.secondPath,
		res: <h1>{ explanation[1] }</h1>
	}
	
	}
	

	// Define result
	let result;	

	   Object.keys(componentsObjects).forEach((component) => {
      
      // check current path against all possible paths
      // If there is a match return the correct & 
      // corresponding component
        if (arraysMatch(arr1, componentsObjects[component].key)) {
          
          result = componentsObjects[component].res;
        }
      // Go through each step in the path and check against current path
       
    });

	return result;
}




