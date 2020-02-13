//========================
// This file contains components to be renderered 
// =======================

import React from 'react';
import './index.css';
import { paths } from './logic.js';
import { explanation, characters, instructions } from './storylines.js';
import { arraysMatch } from './utils.js';


export const components = (game, level, episode, tree) => {



	const componentsObjects = {
		// Outer Objects correspond to Level
		// Middle Level Objects correspond to Episodes
		// Inner Objects correspond to Trees 
		0: {
			0: {
				0: {
					id: "L0E0T0",
					main: (	
						<div>
							<h1> Welcome to our game. Choose a character to begin</h1>
							<h2> { characters[0].name }</h2>
							<h2> { characters[1].name }</h2>
							<h2> { characters[2].name }</h2>
						</div>
						),
					gamePlay: (
							<button onClick={() => game.updateTreeBranch(1) }> Next Tree!</button>
						)
				},
				1: {
					id: "L0E0T1",
					main: (
						<h1>Great thanks for choosing Joe</h1>
					),
					gamePlay: (
						<button onClick={() => game.updateTreeBranch(2) }> Next Tree!</button>
					)
				},
				2: {
					id: "L0E0T2",
					main: (
						<div>
							<h1>Click Start to begin the game</h1>
							<p> Follow the instructions on screen to play </p>
						</div>
					),
					gamePlay: (
						<button onClick={() => { game.updateTreeBranch(0) ; game.updateEpisode(1) }  }> Start!</button>
					)

				}
			},
			1: {
				0: {
					id: "L0E1T0",
					main :(
						<div>
							<h1> Welcome to Level 1</h1>
							<p> This weekend is the summer festival in your town. Your bound to sell a lot so you'll have to buy more this year. Purchase something to help you with the sales forecast or make a guess!</p>
							
						</div>
						),
					gamePlay: (
						<div>
							<button onClick={ () => game.updateTreeBranch(1) }>I'll buy it!</button>
	        				<button onClick={ () => game.updateTreeBranch(2) }>No thanks!</button>
						</div>
						),
					},
				1: {
					id: "L0E1T1",
					main :(
						<div>
							<h1> Great so your salesforecast is ...</h1>
							<p>Do you want to edit it?</p>
						</div>
						),
					gamePlay: (
						<div>
							<button onClick={ () => game.updateTreeBranch(5) }>I'll buy it!</button>
	        				<button onClick={ () => game.updateTreeBranch(2) }>Yeah edit please!</button>
						</div>
						),

				},
				2: {
					id: "L0E1T2",
					main: (
						<div>
							<h1>Okay so place your order</h1>
							<form>
							  Cheese x 500g
							  <input type="number" name="quantity" min="10"/>
							</form>
							<form>
							  Loaves of Bread
							  <input type="number" name="quantity" min="10"/>
							</form>
							<form>
							  Tomatoes
							  <input type="number" name="quantity" min="10"/>
							</form>
						</div>
					),
					gamePlay:
						<div>
							<button onClick={ () => game.updateTreeBranch(3) }>I'm Done!</button>
						</div>
				},
				3: {
					id: "L0E1T3",
					main: (
						<div>
							<h1>You spend 5 hours selling but at 3pm you run out of stock. Head home early!</h1>
						</div>
					),
					gamePlay: (
						<div>
							<button onClick={ () => game.updateTreeBranch(4) }>Head Home</button>
						</div>
					)
				},
				4: {
					id: "L0E1T4",
					main: (
						<div>
							<h1>Today you made ... You have ... left overs</h1>
							<p>Time to get rid of your waste!</p>
						</div>
					),
					gamePlay:(
						<div>
							<button onClick={() => { game.updateTreeBranch(0) ; game.updateEpisode(2) } }>Empty the Bins</button>
						</div>
					)
				},
				5: {
					id: "L0E1T5",
					main: (
						<div>
							<h1>You spend all day working hard and selling.</h1>
							<p>People are leaving around 5. Time to head home!</p>
						</div>
					),
					gamePlay: (
						<div>
							<button onClick={ () => game.updateTreeBranch(4) }>Head Home!</button>
						</div>
					)
				}
			},
			2: {
				0: {
					id: "L0E2T0",
					main: (
						<div>
							<h1>Welcome to Episode 2.</h1>
							<p> Get rid of your waste from the festival. Drag the waste into the correct bin to earn Sustainability Points. Be quick as you don't have long!</p>
						</div>
					),
					res: (
						<div>
							<button onClick={ () => game.updateTreeBranch(5) }>Start!</button>
						</div>
					)
				}
				
			}
		},

		1: {
			
		},

		2: {

		},

		3: {

		},

		4: {

		},

		5: {

		}
	}
	

	// Define result
	let result;	

	//console.log(tree.toString())

	if (level === 0) {

		Object.keys(componentsObjects[level]).forEach(function(key){

			if (episode.toString() === key.toString()) {

				result = componentsObjects[level][key][tree]
				
			}
		})

	}

	return result;
}




