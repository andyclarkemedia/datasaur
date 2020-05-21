//================================================
//================================================

// This file contains blocks of JSX representing differenct screens within the game that will be rendered throughout the app

//================================================
// ===============================================



// =============
// Import Statements
// =============

import React from 'react';
import './index.css';
import { triggerMaze } from './mazing.js';
import { characters, gameTitle, howToPlay, remember, levelOneIntro, l0E0T1, l0E0T3, l0E0T4, reviewOrder, beforeFestival, festivalResults, festivalReport, dragAndDrop, dragAndDropResults, businessLicense, suppliersChoice, goodLuck, furtherDescriptions, ohNoSupplierOutOfStock, takeoutIntro, packaging, discountScheme, cutlery, moreInfo, maze, potatoWholesalePath, potatoRethinkPath, potatoOrganicPath, final, credits } from './storylines.js';
import { hoverHeadTextAppear, hoverHeadTextDisappear, addBorderOnClick, confirmOrder, onDragStart, onDragOver, onDrop, displayNextImage, countdown , checkOrderInput, timePassing, animatePeople, selectSupplier, assessEnergySupplier, assessFurnitureSelection, assessFoodSupplierSelection, showDescriptiveTextOnMouseOver, hideDescriptiveTextOnMouseOut, assessPotatoDecision, assessPackagingDecision, updatePopularity, increaseMealPrice, offerDiscount, assessCutleryDecision, hideInstructionsPanel, disableTimePassingButton, muteAudio, hideMoreInfo, displayMoreInfo, decreaseMealPrice, assessTreeFromRethinkPotatoSupplier, assessDeadlinePotatoDecision, adjustSupplierCostOnPotatoDecision, calculateWin, displayMoreInfoIngredients, animateFeedback, mobileDrag, mobileDrop } from './utils.js';
import { Article } from './article.js';


// IMPORT IMAGES 
var townHouses = require('./images/town-houses.png');
var arrow = require('./images/arrow.png');
var treeInverse = require('./images/just-tree-inverse-side.png');



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
						<div class="plain-background title-screen grid-container-4x6">

							<h1 id="landing-title" class="title align-center"> {gameTitle.title}</h1>
							<p id="can-you-make-it" class="plain-text align-center"> {gameTitle.text} </p>
							<p id="disclaimer" class="plain-text align-center"> {gameTitle.disclaimer} </p>
							<img id="tree-side" src={require('./images/just-tree-side.png')}/>
							<img id="tree-side-inverse" src={ treeInverse } />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<img id="arrow-image" src={arrow} />

							<div class="flex-container gameplay-button-container">
								<button id="opening-play-button" class="update-tree-button button-text" onClick={() => { game.updateTreeBranch(1)} }> Play!</button>
							</div>
							
							<img id="town-houses-opening" src={ townHouses } />

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
							

						</div>
						),

				},
				1: {
					id: "L0E0T1",
					main: (
						<div class="plain-background title-screen grid-container-4x6">
							<h1 id="credits-title" > {credits.title} </h1>
							
							
							<div id="credit-name-container">
								<p id="credits-thanks" class="plain-text align-center"> <span class="bold"> {credits.thankYou} </span> </p>
								<p id="credit-joe">{credits.joe}</p>
								<p id="credit-heidi">{credits.heidi}</p>
								<p id="credit-deri">{credits.deri}</p>
								<p id="credit-stu">{credits.stu}</p>
								<p id="credit-suzanna">{credits.suzanna}</p>
							</div>

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

						
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" onClick={() => game.updateTreeBranch(2) }>Continue</button>
							</div>
			
							<img id="town-houses-opening" src={ townHouses } />

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>

						</div>
					),

				},

				2: {
					id: "L0E0T1",
					main: (
						<div class="plain-background title-screen grid-container-4x6">
							<h1 id="instructions-title" class="title align-center"> {howToPlay.title} </h1>
							<p id="pick-a-biz-desc" class="plain-text align-center"> <span class="bold"> {howToPlay.instructionsOne} </span> </p>
							<p id="to-win-desc"> {howToPlay.instructionsThree} </p>

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

						
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" onClick={() => game.updateTreeBranch(3) }>Okay</button>
							</div>
			
							<img id="town-houses-opening" src={ townHouses } />

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>

						</div>
					),

				},

				3: {

					id: "L0E0T1",
					main: (
						<div class="plain-background title-screen grid-container-4x6">
							<h1 id="instructions-title" class="title align-center"> {howToPlay.title} </h1>
							

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />

							<div class="opening-pound-coin-icon-container">
								<img id="opening-pound-coin" class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-explainer-text"> Money </p>
								<p class="sound-fx-instruction"> {howToPlay.instructionsSFX} </p>
								<p class="specific-points-instruction"> {howToPlay.instructionsMoney} </p>
								<img id="" class="opening-plus" src={require('./images/plus.png')} onClick={ () => { game.moneyUp((game.money + 0), "up")}} />
								<img id="" class="opening-minus" src={require('./images/minus.png')} onClick={ () => { game.moneyUp((game.money + 0), "down")}} />
							</div>
							<div class="opening-leaf-icon-container">
								<img id="opening-leaf" class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="icon-explainer-text"> Sustainability Points  </p>
								<p class="sound-fx-instruction"> {howToPlay.instructionsSFX} </p>
								<p class="specific-points-instruction"> {howToPlay.instructionsSE} </p>
								<img id="" class="opening-plus" src={require('./images/plus.png')} onClick={ () => { game.sePointsUp((game.sePoints + 0), "up")}} />
								<img id="" class="opening-minus" src={require('./images/minus.png')} onClick={ () => { game.sePointsUp((game.sePoints + 0), "down")}} />
							</div>
							
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

						
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" onClick={() => game.updateTreeBranch(4) }>Got It</button>
							</div>
			
							<img id="town-houses-opening" src={ townHouses } />

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							

						</div>
					),


				},

				4: {
					id: "L0E0T4",
					main: (
						<div class="plain-background title-screen grid-container-4x6" >
							<h1 id="choose-a-character-title" class="title align-center"> Your Business Owner </h1>
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />	
							
					
							<div class="flex-container gameplay-button-container">

								<button id="set-character-button" class="update-tree-button button-text"  onClick={() => { game.updateLevel(1) ; game.updateEpisode(0) ;  game.updateTreeBranch(0) }  }> Continue </button>
							</div>
							
							<img id="town-houses-opening" src={require('./images/town-houses.png')} />
							
							

							<div class="more-info-characters-container">

								<img id="lisa-head" src={require('./images/lisa-head.png')}/>
								<p id="more-info-title"> { moreInfo.characters.lisa.title } </p>
								<p id="more-info-subtitle">  { moreInfo.characters.lisa.subtitle }</p>
								<p id="more-info-description"> { moreInfo.characters.lisa.description } </p>

							</div>


							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>


						</div>

					),

				}
			},
		},


		//====================
		// INITIAL DECISIONS
		//====================	

		1: {
			0: {


				// =====================
				// MAZE GAME
				// ======================

				0: {
					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<div class="icon-container maze-pound-coin-icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container maze-leaf-icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<p id="maze-instructions-one" class=""> {maze.instructionsOne} </p>
							<p id="maze-instructions-two" class=""> {maze.instructionsTwo} </p>

							<div id="maze_container">
								<div id="instructions-panel">

									<p id="maze-instructions-title"> Try to get some funding and find investors. Exit the maze before your steps run out for a financial bonus! </p>

									<p id="maze-instructions-move"> Use the ARROWS on your keyboard or on the screen to move </p>

									 <button id="trigger-maze-button" class="button-text" onClick={ () => { hideInstructionsPanel() ; triggerMaze(game)} } > Play Maze </button>

								</div>


								<div id="finished-panel">

									<p id="maze-instructions-finished-title"> You Finished! </p>

									<button id="continue-from-maze-button" class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(1)}  }> Continue </button>

								</div>



								<div id="maze" data-steps="212">
								<div><div class="wall"></div><div class="door exit"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div class="female_contribute1"><dialog open id="female_contribute1">I love your project</dialog></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="nubbin_female_generous1"><dialog open id="nubbin_female_generous1">I want to support your project</dialog></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="nubbin_female_generous"><dialog open id="nubbin_female_generous">I want to support your project</dialog></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="male_contribute1"><dialog open id="male_contribute1">I love your project</dialog></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div class="female_contribute2"><dialog open id="female_contribute2">I love your project</dialog></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="nubbin_male_generous1"><dialog open id="nubbin_male_generous1">I want to support your project</dialog></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="door"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="door"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="door"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="female_contribute3"><dialog open id="female_contribute3">I love your project</dialog></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div class="wall investor_profit_sustainability"><dialog open id="investor_profit_sustainability">I don't buy the idea of putting sustainability over profit</dialog></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall sentinel"><dialog open id= "sentinel">Your business sounds great but ... I am not investing at the moment</dialog></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="female_contribute4"><dialog open id="female_contribute4">I love your project</dialog></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="male_contribute2"><dialog open id="male_contribute2">I love your project</dialog></div><div></div><div class="wall"></div><div></div><div class="wall bank"><dialog open id="bank">Government funding for environment-friendly business has been concluded. Sorry ...</dialog></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall



								  investor_meet_later"><dialog open id="investor_meet_later">Let's meet when your company grows bigger</dialog></div><div></div><div class="solar"><dialog open id="solar">You got government agriculture-related funding to install solar panels! </dialog></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div class="male_contribute3"><dialog open id="male_contribute3">I love your project!</dialog></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall investor_donnot_understand"><dialog open id="investor_donnot_understand">Sorry, I only offer funding for non-profit organizations</dialog></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="female_contribute"><dialog open id="female_contribute">I believe in your project</dialog></div><div></div><div class="wall"></div><div></div><div class="nubbin_male_generous"><dialog open id="nubbin_male_generous">I want to support your project</dialog></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="nubbin wall"></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div class="male_contribute"><dialog open id="male_contribute">I love your project!</dialog></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="nubbin wall"></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div></div>
								  <div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="door entrance"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div></div>
								</div>
							</div>

						    <div id="maze_output">
							   <div id="maze_score"></div>
							   <div id="maze_message"></div>
  						    </div>


  						    <img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />


							<div id="joypad-container">
								<img class= "joy-icon" id="up-joy" src={require('./images/up-joy.png')} />
								<img class= "joy-icon" id="right-joy" src={require('./images/right-joy.png')} />
								<img class= "joy-icon" id="left-joy" src={require('./images/left-joy.png')} />
								<img class= "joy-icon" id="down-joy" src={require('./images/down-joy.png')} />
							</div>

							

						</div>
					)

				},

				1: {

					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>


							<p id="suppliers-choice-description-one">{suppliersChoice.descriptionOne}</p>
							<img id="planet-pizza-decor" src={require('./images/restaurant.png')} />

							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => game.updateTreeBranch(2) }> Continue </button>
							</div>


							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)
				},

				// CHOOSE YOUR SUPPLIERS 
				2: {
					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<p id="suppliers-choice-description-two">{suppliersChoice.descriptionTwo}</p>

							<div class="supplier-choice-container">

								<p class="supplier-choice-title-main"> {suppliersChoice.energyTitle} </p>

								<img id="help-solar-icon" class="help-icon" src={require('./images/help.png')} onClick={ () => displayMoreInfo(moreInfo.energy.solarPower.title, moreInfo.energy.solarPower.subtitle, moreInfo.energy.solarPower.description)}/>
								<img id="help-grid-icon" class="help-icon" src={require('./images/help.png')} onClick={ () => displayMoreInfo(moreInfo.energy.grid.title, moreInfo.energy.grid.subtitle, moreInfo.energy.grid.description)} />
								<img id="help-ethical-icon" class="help-icon" src={require('./images/help.png')} onClick={ () => displayMoreInfo(moreInfo.energy.ethical.title, moreInfo.energy.ethical.subtitle, moreInfo.energy.ethical.description)} />

								<p class="supplier-choice-title-one"> {suppliersChoice.energyOne} </p>
								<p class="supplier-choice-title-two">{ suppliersChoice.energyTwo} </p>
								<p class="supplier-choice-title-three"> {suppliersChoice.energyThree} </p>

								<img id="solar-image" src={require('./images/solar.png')} onClick={ () => {selectSupplier("#solar-image", "#pylon-image", "#ethical-energy-supplier-image", game, "energy") ; game.enableEnergySupplierButton() } } />
								<img id="pylon-image" src={require('./images/pylon.png')} onClick={ () => { selectSupplier("#pylon-image", "#ethical-energy-supplier-image", "#solar-image", game, "energy") ; game.enableEnergySupplierButton()  } } />
								<img id="ethical-energy-supplier-image" src={require('./images/windfarm.png')} onClick={ () => { selectSupplier("#ethical-energy-supplier-image", "#pylon-image", "#solar-image", game, "energy") ; game.enableEnergySupplierButton()  }  } />

							</div>


							<div class="more-info-container">

								<img id="close-window-image" src={require('./images/close-window.png')} onClick={() => { hideMoreInfo() } } />

								<p id="more-info-title"> TITLE </p>
								<p id="more-info-subtitle"> SUBTITLE: subtitle</p>
								<p id="more-info-description"> description description description description description description description description description description description description  </p>

							</div>


							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" disabled={ game.energySupplierButtonDisabled } onClick={ () => { game.updateTreeBranch(3) ; assessEnergySupplier(game)}  }> Set </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)
				},

				3: {
					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<p id="suppliers-choice-description-two">{suppliersChoice.descriptionTwo}</p>



							<div class="supplier-choice-container">

								<p class="supplier-choice-title-main"> {suppliersChoice.furnitureTitle} </p>

								<p class="supplier-choice-title-one"> {suppliersChoice.furnitureOne} </p>
								<p class="supplier-choice-title-two">{ suppliersChoice.furnitureTwo} </p>
								<p class="supplier-choice-title-three"> {suppliersChoice.furnitureThree} </p>


								<img id="help-upcycle-icon" class="help-icon" src={require('./images/help.png')} onClick={ () => displayMoreInfo(moreInfo.furniture.upcycle.title, moreInfo.furniture.upcycle.subtitle, moreInfo.furniture.upcycle.description)} />
								<img id="help-budget-icon" class="help-icon" src={require('./images/help.png')} onClick={ () => displayMoreInfo(moreInfo.furniture.budget.title, moreInfo.furniture.budget.subtitle, moreInfo.furniture.budget.description)} />
								<img id="help-luxury-icon" class="help-icon" src={require('./images/help.png')} onClick={ () => displayMoreInfo(moreInfo.furniture.luxury.title, moreInfo.furniture.luxury.subtitle, moreInfo.furniture.luxury.description)} />

								<img id="upcycle-image" src={require('./images/upcycle.png')} onClick={ () => {selectSupplier("#upcycle-image", "#budget-image", "#luxury-image", game, "furniture") ; game.enableFurnitureSelectionButton() } } />
								<img id="budget-image" src={require('./images/budget-chair.png')} onClick={ () => { selectSupplier("#budget-image", "#luxury-image", "#upcycle-image", game, "furniture") ; game.enableFurnitureSelectionButton()  } } />
								<img id="luxury-image" src={require('./images/luxury-chair.png')} onClick={ () => { selectSupplier("#luxury-image", "#budget-image", "#upcycle-image", game, "furniture") ; game.enableFurnitureSelectionButton()  }  } />

							</div>


							<div class="more-info-container">

								<img id="close-window-image" src={require('./images/close-window.png')} onClick={() => { hideMoreInfo() } } />

								<p id="more-info-title"> TITLE </p>
								<p id="more-info-subtitle"> SUBTITLE: subtitle</p>
								<p id="more-info-description"> description description description description description description description description description description description description  </p>

							</div>

							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" disabled={ game.furnitureSelectionButtonDisabled } onClick={ () => { game.updateTreeBranch(4) ; assessFurnitureSelection(game)}  }> Set </button>
							</div>


							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)
				},

				// Ingredients

				4: {
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<div class="more-info-container">

								<img id="close-window-image" src={require('./images/close-window.png')} onClick={() => { hideMoreInfo() } } />

								<p id="more-info-title"> TITLE </p>
								<p id="more-info-cost-one"> SUBTITLE: subtitle</p>
								<p id="more-info-cost-two"> SUBTITLE: subtitle</p>
								<p id="more-info-cost-three"> SUBTITLE: subtitle</p>
								<p id="more-info-description-ingredients"> description description description description description description description description description description description description  </p>

							</div>

							<p id="suppliers-choice-description-two">{suppliersChoice.descriptionThree}</p>

							<div class="supplier-choice-container-food">

								<p class="supplier-choice-title-main"> {suppliersChoice.foodTitle} </p>

								<p id="food-one-title"> {suppliersChoice.foodOne} </p>
								<p id="food-two-title">{ suppliersChoice.foodTwo} </p>
								<p id="food-three-title"> {suppliersChoice.foodThree} </p>
								<p id="food-four-title"> {suppliersChoice.foodFour} </p>
								<p id="food-five-title"> {suppliersChoice.foodFive} </p>
								

								<img id="tomato-choice-image" src={require('./images/tomato.png')}/>
								<img id="tomato-choice-help-icon" class="help-icon" src={require('./images/help.png')} onClick={ () => displayMoreInfoIngredients(moreInfo.ingredients.tomato.title, moreInfo.ingredients.tomato.costOne, moreInfo.ingredients.tomato.costTwo, moreInfo.ingredients.tomato.costThree, moreInfo.ingredients.tomato.description)} />

								<img id="cheese-choice-image" src={require('./images/cheese.png')}/>
								<img id="cheese-choice-help-icon" class="help-icon" src={require('./images/help.png')} onClick={ () => displayMoreInfoIngredients(moreInfo.ingredients.cheese.title, moreInfo.ingredients.cheese.costOne, moreInfo.ingredients.cheese.costTwo, moreInfo.ingredients.cheese.costThree, moreInfo.ingredients.cheese.description)}/>

								<img id="pork-choice-image" src={require('./images/pork.png')}/>
								<img id="pork-choice-help-icon" class="help-icon" src={require('./images/help.png')} onClick={ () => displayMoreInfoIngredients(moreInfo.ingredients.pork.title, moreInfo.ingredients.pork.costOne, moreInfo.ingredients.pork.costTwo, moreInfo.ingredients.pork.costThree, moreInfo.ingredients.pork.description)}/>

								<img id="chicken-choice-image" src={require('./images/chicken.png')}/>
								<img id="chicken-choice-help-icon" class="help-icon" src={require('./images/help.png')} onClick={ () => displayMoreInfoIngredients(moreInfo.ingredients.chicken.title, moreInfo.ingredients.chicken.costOne, moreInfo.ingredients.chicken.costTwo, moreInfo.ingredients.chicken.costThree, moreInfo.ingredients.chicken.description)}/>

								<img id="carrot-choice-image" src={require('./images/carrot.png')}/>
								<img id="potatoes-choice-help-icon" class="help-icon" src={require('./images/help.png')} onClick={ () => displayMoreInfoIngredients(moreInfo.ingredients.carrot.title, moreInfo.ingredients.carrot.costOne, moreInfo.ingredients.carrot.costTwo, moreInfo.ingredients.carrot.costThree, moreInfo.ingredients.carrot.description)} />
								

								<p id="food-origin-one"> {suppliersChoice.foodOriginOne} </p>
								<p id="food-origin-two"> {suppliersChoice.foodOriginTwo} </p>
								<p id="food-origin-three"> {suppliersChoice.foodOriginThree} </p>

								<img class="wholesale" id="tomato-wholesale" src={require('./images/darker-button.png')} onClick={ () => selectSupplier("#tomato-wholesale", "#tomato-spade", "#tomato-tractor", game, "tomato")}/>
								<img class="spade" id="tomato-spade" src={require('./images/light-button.png')} onClick={ () => selectSupplier("#tomato-spade", "#tomato-wholesale", "#tomato-tractor", game, "tomato")}/>
								<img class="tractor" id="tomato-tractor" src={require('./images/medium-button.png')} onClick={ () => selectSupplier("#tomato-tractor", "#tomato-spade", "#tomato-wholesale", game, "tomato")}/>


								<img class="wholesale" id="cheese-wholesale" src={require('./images/darker-button.png')} onClick={ () => selectSupplier("#cheese-wholesale", "#cheese-spade", "#cheese-tractor", game, "cheese")}/>
								<img class="spade" id="cheese-spade" src={require('./images/light-button.png')} onClick={ () => selectSupplier("#cheese-spade", "#cheese-wholesale", "#cheese-tractor", game, "cheese")}/>
								<img class="tractor" id="cheese-tractor" src={require('./images/medium-button.png')} onClick={ () => selectSupplier("#cheese-tractor", "#cheese-spade", "#cheese-wholesale", game, "cheese")}/>

								<img class="wholesale" id="pork-wholesale" src={require('./images/darker-button.png')} onClick={ () => selectSupplier("#pork-wholesale", "#pork-spade", "#pork-tractor", game, "pork")}/>
								<img class="spade" id="pork-spade" src={require('./images/light-button.png')} onClick={ () => selectSupplier("#pork-spade", "#pork-wholesale", "#pork-tractor", game, "pork")}/>
								<img class="tractor" id="pork-tractor" src={require('./images/medium-button.png')} onClick={ () => selectSupplier("#pork-tractor", "#pork-spade", "#pork-wholesale", game, "pork")}/>

								<img class="wholesale" id="chicken-wholesale" src={require('./images/darker-button.png')} onClick={ () => selectSupplier("#chicken-wholesale", "#chicken-spade", "#chicken-tractor", game, "chicken")}/>
								<img class="spade" id="chicken-spade" src={require('./images/light-button.png')} onClick={ () => selectSupplier("#chicken-spade", "#chicken-wholesale", "#chicken-tractor", game, "chicken")}/>
								<img class="tractor" id="chicken-tractor" src={require('./images/medium-button.png')} onClick={ () => selectSupplier("#chicken-tractor", "#chicken-spade", "#chicken-wholesale", game, "chicken")}/>

								<img class="wholesale" id="potato-wholesale" src={require('./images/darker-button.png')} onClick={ () => selectSupplier("#potato-wholesale", "#potato-spade", "#potato-tractor", game, "potato")}/>
								<img class="spade" id="potato-spade" src={require('./images/light-button.png')} onClick={ () => selectSupplier("#potato-spade", "#potato-wholesale", "#potato-tractor", game, "potato")}/>
								<img class="tractor" id="potato-tractor" src={require('./images/medium-button.png')} onClick={ () => selectSupplier("#potato-tractor", "#potato-spade", "#potato-wholesale", game, "potato")}/>


							</div>
							
							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
							<button class="update-tree-button button-text button-fix" disabled={ game.setSuppliersButtonDisabled } onClick={ () => { game.updateTreeBranch(5) ; assessFoodSupplierSelection(game, "tomato") ; assessFoodSupplierSelection(game, "cheese") ; assessFoodSupplierSelection(game, "pork") ; assessFoodSupplierSelection(game, "chicken") ; assessFoodSupplierSelection(game, "potato")}  }> Set </button>
							
						</div>
					)


				},


				// GOOD LUCK SCREEN 

				5: {
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>


							<p id="good-luck-message">{goodLuck.main}</p>
							<img id="planet-pizza-decor" class="planet-pizza" src={require('./images/restaurant.png')} />

							
							
							<button class="update-tree-button button-text button-fix"  onClick={ () => game.updateTreeBranch(6) }> Let's Go </button>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)

				},
				// TIME PASSING SCREEN
				6:{
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<img class="speech-bubble" src="" />

							<p id="weekly-earnings" class="gameplay-text"> </p>


							<div id="position-identifier"></div>
							<div id="position-identifier-top"></div>

							<div class="week-number-container">
								<p id="weekly-timer" class="gameplay-text"> {"Week " + game.weekNumber }</p>
							</div>
							
							<img id="planet-pizza-animation" class="planet-pizza" src={require('./images/restaurant.png')} onLoad={ () => {timePassing(game, game.weekNumber, 6) ; animatePeople() ; animateFeedback(game) }}/>
							<img id="person-one" class="person" src={require('./images/person-one.png')} />
							<img id="person-two" class="person" src={require('./images/person-two.png')} />
							<img id="person-three" class="person" src={require('./images/person-three.png')} />
							<img id="person-four" class="person" src={require('./images/person-four.png')} />
							<img id="person-five" class="person" src={require('./images/person-five.png')} />
							<img id="person-six"  class="person"src={require('./images/person-six.png')} />
							<img id="person-seven" class="person" src={require('./images/person-seven.png')} />
							<img id="person-eight" class="person" src={require('./images/person-eight.png')} />
							<img id="person-nine" class="person" src={require('./images/person-one.png')} />
							<img id="person-ten" class="person" src={require('./images/person-two.png')} />
							<img id="person-eleven" class="person" src={require('./images/person-one.png')} />
							<img id="person-twelve" class="person" src={require('./images/person-two.png')} />


							<img id="feedback-icon-one" class="feedback-icon" />
							<img id="feedback-icon-two" class="feedback-icon" />
							<img id="feedback-icon-three" class="feedback-icon" />
							<img id="feedback-icon-four" class="feedback-icon" />
							<img id="feedback-icon-five" class="feedback-icon" />
							<img id="feedback-icon-six" class="feedback-icon" />
							<img id="feedback-icon-seven" class="feedback-icon" />
							<img id="feedback-icon-eight" class="feedback-icon" />
							<img id="feedback-icon-nine" class="feedback-icon" />
							<img id="feedback-icon-ten" class="feedback-icon" />


								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" disabled={ game.timePassingButtonDisabled } onClick={ () => { game.updateLevel(2) ;  game.updateEpisode(0) ;  game.updateTreeBranch(0)  }}> Continue </button>
							</div>
							
							

						</div>
					)

				}
			}

		},

		//====================
		// SUPPLIER IS OUT OF STOCK
		//====================	

		// NEEDS FINISHING & CHANGE THE UPDATE OF TREE EPISODE ECT

		2: {

			0: {

				0: {

					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<p id="supplier-no-stock-title"> Oh No! </p>

							<p id="potato-flood" class="gameplay-text"> { ohNoSupplierOutOfStock.descriptionOne } </p>
							
							<img class="farmhouse-image" src={require('./images/farmhouse.png')} />
							<img class="potato-fork-image" src={require('./images/potato-spade.png')} />
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.updateTreeBranch(1) ; disableTimePassingButton(game) } }> Continue </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)

				},

				1: {

					
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<p id="potato-important" class="gameplay-text"> { ohNoSupplierOutOfStock.descriptionTwo } </p>
							<p id="potato-what-do-you-want" class="gameplay-text"> { ohNoSupplierOutOfStock.descriptionThree } </p>
							
							
							<img class="farmhouse-image" src={require('./images/farmhouse.png')} />
							<img class="potato-fork-image" src={require('./images/potato-spade.png')} />

							<div id="potato-choice-container">

								<p id="potato-choice-organic"> { ohNoSupplierOutOfStock.potatoChoiceOne } </p>
								<p id="potato-choice-menu"> { ohNoSupplierOutOfStock.potatoChoiceTwo }</p>
								<p id="potato-choice-wholesaler"> { ohNoSupplierOutOfStock.potatoChoiceThree } </p>

								<img id="organic-choice" src={require('./images/spade.png')}/>
								<img id="menu-choice" src={require('./images/menu.png')} />
								<img id="wholesale-choice" src={require('./images/wholesale.png')}/>

								<img id="button-organic" src={require('./images/darker-button.png')} onClick={ () => selectSupplier("#button-organic", "#button-menu", "#button-wholesale", game, "potato-choice")} />
								<img id="button-menu" src={require('./images/darker-button.png')} onClick={ () => selectSupplier("#button-menu", "#button-organic", "#button-wholesale", game, "potato-choice")} />
								<img id="button-wholesale" src={require('./images/darker-button.png')} onClick={ () => selectSupplier("#button-wholesale", "#button-organic", "#button-menu", game, "potato-choice")} />


							</div>	


							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" disabled={ game.potatoButtonDisabled } onClick={ () => { game.updateTreeBranch(assessPotatoDecision(game)) } }> Run With It </button>
							</div>


							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)
					


				},


				// WHOLESALER 2 - 5


				2: {

					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>


							<p id="first-wholesale-potato"> {potatoWholesalePath.first} </p> 

							<img id="wholesale-potato-image" src={require('./images/wholesale.png')} />


							<img class="farmhouse-image" src={require('./images/farmhouse.png')} />
							<img class="potato-fork-image" src={require('./images/potato-spade.png')} />
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(3) }}> Continue </button>
							</div>


							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)




				},

				3: {

					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>


							<p id="second-wholesale-potato"> {potatoWholesalePath.second} </p> 
							<p id="third-wholesale-potato"> {potatoWholesalePath.third} </p> 
							


							<img class="farmhouse-image" src={require('./images/farmhouse.png')} />
							<img class="potato-fork-image" src={require('./images/potato-spade.png')} />

							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(4) ;  decreaseMealPrice(game) }}> Absolutely </button>
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(5) ; updatePopularity(game, (game.popularityFactor - 0.1))}}> Not Happening </button>
							</div>


							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)


				},

				4: {

					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>


							<p id="cheaper-yes-wholesale-potato"> {potatoWholesalePath.cheaperYes} </p> 
							<p id="final-service-wholesale-potato"> {potatoWholesalePath.finalService} </p> 
							


							<img class="farmhouse-image" src={require('./images/farmhouse.png')} />
							<img class="potato-fork-image" src={require('./images/potato-spade.png')} />
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(17) ; adjustSupplierCostOnPotatoDecision(game) }}> Phew ...  </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)


				},

				5: {

					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>


							<p id="cheaper-no-wholesale-potato"> {potatoWholesalePath.cheaperNo} </p> 
							<p id="final-service-wholesale-potato"> {potatoWholesalePath.finalService} </p> 
							


							<img class="farmhouse-image" src={require('./images/farmhouse.png')} />
							<img class="potato-fork-image" src={require('./images/potato-spade.png')} />
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(17) ; adjustSupplierCostOnPotatoDecision(game) }}> Let's see ...  </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)


				},


				6: {


					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>


							<p id="first-rethink-potato"> {potatoRethinkPath.first} </p> 
							<p id="second-rethink-potato"> {potatoRethinkPath.second} </p> 
							


							<img class="farmhouse-image" src={require('./images/farmhouse.png')} />
							<img class="potato-fork-image" src={require('./images/potato-spade.png')} />
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(7) }}> Let's see ...  </button>
							</div>


							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)



				},


				7: {

					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>


							<p id="chaos-rethink-potato"> {potatoRethinkPath.third} </p> 
							<p id="discount-choice-rethink-potato"> {potatoRethinkPath.discountChoice} </p> 
							


							<img class="farmhouse-image" src={require('./images/farmhouse.png')} />
							<img class="potato-fork-image" src={require('./images/potato-spade.png')} />
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(8) ; game.moneyUp((game.money - 200), "down")}}> Absolutely  </button>
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(9) ; updatePopularity(game, (game.popularityFactor - 0.15)) }}> No Way  </button>
							</div>
							

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>


						</div>
					)

				},

				// NEED TO INPUT CHOICES HERE 

				8: {

					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>


							<p id="discount-yes-rethink-potato"> {potatoRethinkPath.discountYes} </p> 

							<div class="potato-rethink-choice-container">

								<img id="potato-rethink-choice-organic-image" src={require('./images/tractor.png')} onClick={ () => {selectSupplier("#potato-rethink-choice-organic-image", "#potato-rethink-choice-wholesale-image", "#discount-yes-rethink-potato", game, "potato-rethink-choice") }} />
								<p id="potato-rethink-choice-organic-text"> {potatoRethinkPath.organicFarmChoice} </p>

								<img id="potato-rethink-choice-wholesale-image" src={require('./images/wholesale.png')} onClick={ () => {selectSupplier("#potato-rethink-choice-wholesale-image", "#potato-rethink-choice-organic-image", "#discount-yes-rethink-potato", game, "potato-rethink-choice") }} />
								<p id="potato-rethink-choice-wholesale-text"> {potatoRethinkPath.wholesaleChoice} </p>

								<p id="click-select-rethink-potato"> {potatoRethinkPath.clickInstructions} </p>

							</div>

							<img class="farmhouse-image" src={require('./images/farmhouse.png')} />
							<img class="potato-fork-image" src={require('./images/potato-spade.png')} />
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" disabled={game.potatoChaosButtonDisabled} onClick={ () => { game.updateTreeBranch(assessTreeFromRethinkPotatoSupplier(game)) }}> Go With It  </button>
							</div>


							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)

				},

				// NEED TO INPUT CHOICES HERE 

				9: {

					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<div class="potato-rethink-choice-container">

								<img id="potato-rethink-choice-organic-image" src={require('./images/tractor.png')} onClick={ () => {selectSupplier("#potato-rethink-choice-organic-image", "#potato-rethink-choice-wholesale-image", "#discount-no-rethink-potato", game, "potato-rethink-choice") ; game.enableUnhappyRestaurantButton() }} />
								<p id="potato-rethink-choice-organic-text"> {potatoRethinkPath.organicFarmChoice} </p>

								<img id="potato-rethink-choice-wholesale-image" src={require('./images/wholesale.png')} onClick={ () => {selectSupplier("#potato-rethink-choice-wholesale-image", "#potato-rethink-choice-organic-image", "#discount-no-rethink-potato", game, "potato-rethink-choice") ; game.enableUnhappyRestaurantButton() }} />
								<p id="potato-rethink-choice-wholesale-text"> {potatoRethinkPath.wholesaleChoice} </p>

								<p id="click-select-rethink-potato"> {potatoRethinkPath.clickInstructions} </p>

							</div>

							<p id="discount-no-rethink-potato"> {potatoRethinkPath.discountNo} </p> 
							

							<img class="farmhouse-image" src={require('./images/farmhouse.png')} />
							<img class="potato-fork-image" src={require('./images/potato-spade.png')} />
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  disabled={game.potatoUnhappyRestaurantDisabled} onClick={ () => { game.updateTreeBranch(assessTreeFromRethinkPotatoSupplier(game)) }}> Go With It  </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)

				},


				// Organic Choice 
				10: {
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>


							<p id="first-organic-potato"> {potatoOrganicPath.first} </p> 
							<p id="second-organic-potato"> {potatoOrganicPath.second} </p> 
							
							<img id="express-image" src={require('./images/express-delivery.png')} />


							<img class="farmhouse-image" src={require('./images/farmhouse.png')} />
							<img class="potato-fork-image" src={require('./images/potato-spade.png')} />
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(11) ; game.moneyUp((game.money - 200), "down")}}> Sure  </button>
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(12) }}> No Way  </button>
							</div>


							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>

						)
				},


				11: {

					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>


							<p id="express-yes-organic-potato"> {potatoOrganicPath.expressYes} </p> 


							<img class="farmhouse-image" src={require('./images/farmhouse.png')} />
							<img class="potato-fork-image" src={require('./images/potato-spade.png')} />
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(17) ; adjustSupplierCostOnPotatoDecision(game) }}> Continue </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>

						)



				},


				// EXPRESS NO 


				12: {


					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>


							<p id="express-no-organic-potato"> {potatoOrganicPath.expressNo} </p> 

							<img class="farmhouse-image" src={require('./images/farmhouse.png')} />
							<img class="potato-fork-image" src={require('./images/potato-spade.png')} />
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(13) }}> Continue </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>

						)


				},

				13: {

					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>


							<p id="confusion-organic-potato"> {potatoOrganicPath.confusion} </p> 

							<img class="farmhouse-image" src={require('./images/farmhouse.png')} />
							<img class="potato-fork-image" src={require('./images/potato-spade.png')} />
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(14) ; game.moneyUp((game.money - 200), "down")}}> Definately </button>
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(15) ; updatePopularity(game, (game.popularityFactor - 0.1)) }}> Not This Time </button>
							</div>


							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>

						)

				},


				14: {

					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<div class="organic-choice-container">

								<p id="express-delivery-choice" > {potatoOrganicPath.optionOne} </p>
								<p id="staff-training-choice" > {potatoOrganicPath.optionTwo} </p>
								<p id="potato-wholesale-choice" > {potatoOrganicPath.optionThree} </p>

								<img id="potato-organic-express-image" src={require('./images/express-delivery.png')} onClick={ () => {selectSupplier("#potato-organic-express-image", "#potato-organic-staff-image", "#potato-organic-wholesale-image", game, "potato-organic-choice")}} />
								<img id="potato-organic-staff-image" src={require('./images/staff-training.png')} onClick={ () => {selectSupplier("#potato-organic-staff-image", "#potato-organic-express-image", "#potato-organic-wholesale-image", game, "potato-organic-choice")}} />
								<img id="potato-organic-wholesale-image" src={require('./images/wholesale.png')} onClick={ () => {selectSupplier("#potato-organic-wholesale-image", "#potato-organic-staff-image", "#potato-organic-express-image", game, "potato-organic-choice")}} />

								<p id="click-select-organic-potato" > {potatoRethinkPath.clickInstructions} </p>

							</div>

							<p id="discount-yes-organic-potato"> {potatoOrganicPath.discountYes} </p> 

							<img class="farmhouse-image" src={require('./images/farmhouse.png')} />
							<img class="potato-fork-image" src={require('./images/potato-spade.png')} />
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" disabled={game.potatoDeadlineButtonDisabled} onClick={ () => { game.updateTreeBranch(assessDeadlinePotatoDecision(game)) }}> Go With It </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>

						)


				},

				15: {

					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<div class="organic-choice-container">

								<p id="express-delivery-choice" > {potatoOrganicPath.optionOne} </p>
								<p id="staff-training-choice" > {potatoOrganicPath.optionTwo} </p>
								<p id="potato-wholesale-choice" > {potatoOrganicPath.optionThree} </p>

								<img id="potato-organic-express-image" src={require('./images/express-delivery.png')} onClick={ () => {selectSupplier("#potato-organic-express-image", "#potato-organic-staff-image", "#potato-organic-wholesale-image", game, "potato-organic-choice")}} />
								<img id="potato-organic-staff-image" src={require('./images/staff-training.png')} onClick={ () => {selectSupplier("#potato-organic-staff-image", "#potato-organic-express-image", "#potato-organic-wholesale-image", game, "potato-organic-choice")}} />
								<img id="potato-organic-wholesale-image" src={require('./images/wholesale.png')} onClick={ () => {selectSupplier("#potato-organic-wholesale-image", "#potato-organic-staff-image", "#potato-organic-express-image", game, "potato-organic-choice")}} />

								<p id="click-select-organic-potato" > {potatoRethinkPath.clickInstructions} </p>

							</div>


							<p id="discount-no-organic-potato"> {potatoOrganicPath.discountNo} </p> 

							<img class="farmhouse-image" src={require('./images/farmhouse.png')} />
							<img class="potato-fork-image" src={require('./images/potato-spade.png')} />
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" disabled={game.potatoDeadlineButtonDisabled} onClick={ () => { game.updateTreeBranch(assessDeadlinePotatoDecision(game)) }}> Go With It </button>
							</div>


							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>

						)
				},

				// Staff Training
				16: {

					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>


							<p id="staff-training-organic-potato"> {potatoOrganicPath.staffTraining} </p> 

							<img class="farmhouse-image" src={require('./images/farmhouse.png')} />
							<img class="potato-fork-image" src={require('./images/potato-spade.png')} />
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(17) ; adjustSupplierCostOnPotatoDecision(game) }}> Sorted </button>
							</div>


							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>

						)

				},


				// ANIMATION SCREEN (SHOULD COME AT THE END OF THE LEVEL)

				17: {

					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<img class="speech-bubble" src="" />

							<p id="weekly-earnings" class="gameplay-text"> </p>


							<div id="position-identifier"></div>

							<div class="week-number-container">
								<p id="weekly-timer" class="gameplay-text"> {"Week " + game.weekNumber} </p>
							</div>
							
							<img id="planet-pizza-animation" class="planet-pizza" src={require('./images/restaurant.png')} onLoad={ () => {timePassing(game, game.weekNumber, 12) ; animatePeople() ; animateFeedback(game) } }/>
							<img id="person-one" class="person" src={require('./images/person-one.png')} />
							<img id="person-two" class="person" src={require('./images/person-two.png')} />
							<img id="person-three" class="person" src={require('./images/person-three.png')} />
							<img id="person-four" class="person" src={require('./images/person-four.png')} />
							<img id="person-five" class="person" src={require('./images/person-five.png')} />
							<img id="person-six"  class="person"src={require('./images/person-six.png')} />
							<img id="person-seven" class="person" src={require('./images/person-seven.png')} />
							<img id="person-eight" class="person" src={require('./images/person-eight.png')} />
							<img id="person-nine" class="person" src={require('./images/person-one.png')} />
							<img id="person-ten" class="person" src={require('./images/person-two.png')} />
							<img id="person-eleven" class="person" src={require('./images/person-one.png')} />
							<img id="person-twelve" class="person" src={require('./images/person-two.png')} />


							<img id="feedback-icon-one" class="feedback-icon" />
							<img id="feedback-icon-two" class="feedback-icon" />
							<img id="feedback-icon-three" class="feedback-icon" />
							<img id="feedback-icon-four" class="feedback-icon" />
							<img id="feedback-icon-five" class="feedback-icon" />
							<img id="feedback-icon-six" class="feedback-icon" />
							<img id="feedback-icon-seven" class="feedback-icon" />
							<img id="feedback-icon-eight" class="feedback-icon" />
							<img id="feedback-icon-nine" class="feedback-icon" />
							<img id="feedback-icon-ten" class="feedback-icon" />
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" disabled={ game.timePassingButtonDisabled } onClick={ () => { game.updateLevel(3) ;  game.updateEpisode(0) ;  game.updateTreeBranch(0)  }}> Continue </button>
							</div>


							
							
						</div>
					)


				}

			}

		},


		//====================
		// TAKEOUT LAUNCH
		//====================

		3: {

			0: {

				0: {

					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>



							<p id="takeout-intro-requests" class="gameplay-text"> { takeoutIntro.customerRequests } </p>

							<p id="takeout-intro-offer" class="gameplay-text"> { takeoutIntro.offeringTakeouts } </p>

							<p id="takeout-intro-success" class="gameplay-text"> { takeoutIntro.strategySuccess } </p>
							

							<img class="pizzabox-takeout-image" src={require('./images/pizzabox.png')}/>
							
							<img class="bike-image" src={require('./images/bike.png')}/>

							<img class="houses-takeout" src={require('./images/town-houses.png')}/>
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.updateTreeBranch(1) ; disableTimePassingButton(game) } }> Work It Out </button>
							</div>
							
						</div>
					)


				},

				1: {

					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<p id="packaging-pros-cons" class="gameplay-text"> { packaging.packagingProsCons } </p>

							
							<img class="houses-takeout" src={require('./images/town-houses.png')}/>
							

							<div id="packaging-choice-container">

								<p id="packaging-question" class="gameplay-text"> { packaging.packagingQuestion } </p>

								<p id="packaging-hover" class="gameplay-text"> { packaging.packagingHover } </p>

								<p id="packaging-plastic-choice" class="gameplay-text"> { packaging.packagingChoiceOne } </p>
								<p id="packaging-bio-choice" class="gameplay-text"> { packaging.packagingChoiceTwo } </p>
								<p id="packaging-compostable-choice" class="gameplay-text"> { packaging.packagingChoiceThree } </p>

								<img id="plastic-choice-help-icon" class="help-icon" src={require('./images/help.png')} onClick={ () => displayMoreInfo(moreInfo.packaging.plastic.title, moreInfo.packaging.plastic.subtitle, moreInfo.packaging.plastic.description)}/>
								<img id="bio-choice-help-icon" class="help-icon" src={require('./images/help.png')} onClick={ () => displayMoreInfo(moreInfo.packaging.recycling.title, moreInfo.packaging.recycling.subtitle, moreInfo.packaging.recycling.description)}/>
								<img id="compostable-choice-help-icon" class="help-icon" src={require('./images/help.png')} onClick={ () => displayMoreInfo(moreInfo.packaging.compostable.title, moreInfo.packaging.compostable.subtitle, moreInfo.packaging.compostable.description)}/>


								<img id="packaging-plastic-image" src={require('./images/plastic-packaging.png')} onClick={ ()=> selectSupplier("#packaging-plastic-image", "#packaging-bio-image", "#packaging-compostable-image", game, "packaging")} />
								<img id="packaging-bio-image" src={require('./images/recycle-packaging.png')} onClick={ ()=> selectSupplier("#packaging-bio-image", "#packaging-plastic-image", "#packaging-compostable-image", game, "packaging")} />
								<img id="packaging-compostable-image" src={require('./images/compost-packaging.png')}  onClick={ ()=> selectSupplier("#packaging-compostable-image", "#packaging-bio-image", "#packaging-plastic-image", game, "packaging")} />


							</div>

							<div class="more-info-container">

								<img id="close-window-image" src={require('./images/close-window.png')} onClick={() => { hideMoreInfo() } } />

								<p id="more-info-title"> TITLE </p>
								<p id="more-info-subtitle"> SUBTITLE: subtitle</p>
								<p id="more-info-description"> description description description description description description description description description description description description  </p>

							</div>
							
							<img class="bike-image" src={require('./images/bike.png')}/>
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" disabled={ game.packagingDecisionButtonDisabled } onClick={ () => { game.updateTreeBranch(assessPackagingDecision(game)) } }> Decision Made </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)

				},


				// COMPOSTABLE EXPENSIVE CHOICE

				2: {

					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<p id="compostable-expensive" > { packaging.compostableExpensive } </p>
							<p id="compostable-expensive-two" > { packaging.compostableExpensiveTwo } </p>
							
							<img class="bike-image" src={require('./images/bike.png')}/>
							<img class="houses-takeout" src={require('./images/town-houses.png')}/>
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.updateTreeBranch(3) ; increaseMealPrice(game) } } > Yes Please </button>
								<button class="update-tree-button button-text"  onClick={ () => game.updateTreeBranch(3) }> Too Risky </button>
							</div>
								
							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>

						</div>
					)

				}, 

				// POSITIVE PACKAGING FEEDBACK 

				3: {

					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<p id="positive-packaging-feedback-one" > { packaging.positivePackagingFeedbackOne } </p>
							<p id="positive-packaging-feedback-two" > { packaging.positivePackagingFeedbackTwo } </p>

							<img class="social-media-image" src={require('./images/social-media.png')}/>
							
							<img class="bike-image" src={require('./images/bike.png')}/>
							<img class="houses-takeout" src={require('./images/town-houses.png')}/>
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.updateEpisode(1) ; game.updateTreeBranch(0) }} > Amazing </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)

				}, 

				// PLASTIC PACKAGING - SOCIAL MEDIA 
				4: {

					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<p id="plastic-packaging-feedback-one" > { packaging.plasticOne } </p>
							<p id="plastic-packaging-feedback-two" > { packaging.plasticTwo } </p>

							<img class="social-media-image" src={require('./images/social-media.png')}/>
							
							<img class="bike-image" src={require('./images/bike.png')}/>
							<img class="houses-takeout" src={require('./images/town-houses.png')}/>
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.updateEpisode(1) ;  game.updateTreeBranch(0) ; game.moneyUp((game.money - 200), "down") ; updatePopularity(game, (game.popularityFactor + 0.2))} }> Okay ... </button>
								<button class="update-tree-button button-text"  onClick={ () => { game.updateEpisode(1) ; game.updateTreeBranch(0) } }> No Thanks </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)

				}

			},

			// EPISODE 1 TAKEOUT BRANCH - DISCOUNT SCHEME

			1: {

				0: {

					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<p id="discount-scheme-decision-one" > { discountScheme.discountOne } </p>
							<p id="discount-scheme-decision-two" > { discountScheme.discountTwo } </p>
							<p id="discount-scheme-decision-three" > { discountScheme.discountThree } </p>
							
							<img class="bike-image" src={require('./images/bike.png')}/>
							<img class="houses-takeout" src={require('./images/town-houses.png')}/>
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.updateTreeBranch(1) ; offerDiscount(game) } }> Yes </button>
								<button class="update-tree-button button-text"  onClick={ () => { game.updateTreeBranch(2) } }> Nah </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)
					

				},

				// NO DISCOUNT

				1: {

					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<p id="discount-scheme-yes" > { discountScheme.discountYes } </p>
							<p id="discount-scheme-last" > { discountScheme.discountLast } </p>
							
							
							<img class="bike-image" src={require('./images/bike.png')}/>
							<img class="houses-takeout" src={require('./images/town-houses.png')}/>
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.updateEpisode(2) ;  game.updateTreeBranch(0) } }> Continue </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)

				},

				// OFFER DISCOUNT

				2: {

					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<p id="discount-scheme-no" > { discountScheme.discountNo } </p>
							<p id="discount-scheme-last" > { discountScheme.discountLast } </p>
							
							
							<img class="bike-image" src={require('./images/bike.png')}/>
							<img class="houses-takeout" src={require('./images/town-houses.png')}/>
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.updateEpisode(2) ; game.updateTreeBranch(0) } }> Continue </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)

				}


			},

			// EPISODE 2 TAKEOUT BRANCH - CUTLERY

			2: {

				0: {

					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<p id="cutlery-intro-one" > { cutlery.cutleryIntroOne } </p>
							<p id="cutlery-intro-two" > { cutlery.cutleryIntroTwo } </p>
							<p id="cutlery-intro-three" > { cutlery.cutleryIntroThree } </p>
							
							
							<img class="bike-image" src={require('./images/bike.png')}/>
							
							<img class="houses-takeout" src={require('./images/town-houses.png')}/>	
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.updateTreeBranch(1) } }> Hmmm ... </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)



				},

				// CHOOSE YOUR CUTLERY 

				1: {

					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							

							<div id="cutlery-choice-container">

								<p id="cutlery-choice-title" > { cutlery.cutleryChoiceTitle } </p>	

								<p id="cutlery-choice-one" > { cutlery.cutleryChoiceOne } </p>
								<p id="cutlery-choice-two" > { cutlery.cutleryChoiceTwo } </p>
								<p id="cutlery-choice-three" > { cutlery.cutleryChoiceThree } </p>


								<img id="cutlery-plastic-image" src={require('./images/plastic-cutlery.png')} onClick={ ()=> selectSupplier("#cutlery-plastic-image", "#cutlery-wooden-image", "#cutlery-none-image", game, "cutlery")} />
								<img id="cutlery-wooden-image" src={require('./images/wood-cutlery.png')} onClick={ ()=> selectSupplier("#cutlery-wooden-image", "#cutlery-plastic-image", "#cutlery-none-image", game, "cutlery")} />
								<img id="cutlery-none-image" src={require('./images/no-cutlery.png')}  onClick={ ()=> selectSupplier("#cutlery-none-image", "#cutlery-wooden-image", "#cutlery-plastic-image", game, "cutlery")} />

								<p id="packaging-hover" class="gameplay-text"> { packaging.packagingHover } </p>

								<img id="plastic-cutlery-choice-help-icon" class="help-icon" src={require('./images/help.png')} onClick={ () => displayMoreInfo(moreInfo.cutlery.plastic.title, moreInfo.cutlery.plastic.subtitle, moreInfo.cutlery.plastic.description)}/>
								<img id="wooden-cutlery-choice-help-icon" class="help-icon" src={require('./images/help.png')} onClick={ () => displayMoreInfo(moreInfo.cutlery.wooden.title, moreInfo.cutlery.wooden.subtitle, moreInfo.cutlery.wooden.description)}/>
								<img id="no-cutlery-choice-help-icon" class="help-icon" src={require('./images/help.png')} onClick={ () => displayMoreInfo(moreInfo.cutlery.none.title, moreInfo.cutlery.none.subtitle, moreInfo.cutlery.none.description)}/>

							</div>

							<div class="more-info-container">

								<img id="close-window-image" src={require('./images/close-window.png')} onClick={() => { hideMoreInfo() } } />

								<p id="more-info-title"> TITLE </p>
								<p id="more-info-subtitle"> SUBTITLE: subtitle</p>
								<p id="more-info-description"> description description description description description description description description description description description description  </p>

							</div>
							
							
							<img class="bike-image" src={require('./images/bike.png')}/>
							<img class="houses-takeout" src={require('./images/town-houses.png')}/>
							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" disabled={game.cutleryDisabledButton} onClick={ () => { game.updateTreeBranch(assessCutleryDecision(game)) } }> Done </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)

				},

				2: {

					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>
							<img class="houses-takeout" src={require('./images/town-houses.png')}/>
							<img class="bike-image" src={require('./images/bike.png')}/>
							<p id="cutlery-last" > { cutlery.cutleryLast } </p>
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.updateTreeBranch(3) } }> Launch </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)

				},


				// ANIMATION OF TIME PASSING SCREEN

				3: {

					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>


							<p id="weekly-earnings" class="gameplay-text"> </p>

							<img class="speech-bubble" src="" />

							<div id="position-identifier"></div>

							<div class="week-number-container">
								<p id="weekly-timer" class="gameplay-text"> {"Week " + game.weekNumber} </p>
							</div>
							
							<img id="planet-pizza-animation" class="planet-pizza" src={require('./images/restaurant.png')} onLoad={ () => {timePassing(game, game.weekNumber, 18) ; animatePeople() ; animateFeedback(game) } }/>
							<img id="person-one" class="person" src={require('./images/person-one.png')} />
							<img id="person-two" class="person" src={require('./images/person-two.png')} />
							<img id="person-three" class="person" src={require('./images/person-three.png')} />
							<img id="person-four" class="person" src={require('./images/person-four.png')} />
							<img id="person-five" class="person" src={require('./images/person-five.png')} />
							<img id="person-six"  class="person"src={require('./images/person-six.png')} />
							<img id="person-seven" class="person" src={require('./images/person-seven.png')} />
							<img id="person-eight" class="person" src={require('./images/person-eight.png')} />
							<img id="person-nine" class="person" src={require('./images/person-one.png')} />
							<img id="person-ten" class="person" src={require('./images/person-two.png')} />
							<img id="person-eleven" class="person" src={require('./images/person-one.png')} />
							<img id="person-twelve" class="person" src={require('./images/person-two.png')} />


							<img id="feedback-icon-one" class="feedback-icon" />
							<img id="feedback-icon-two" class="feedback-icon" />
							<img id="feedback-icon-three" class="feedback-icon" />
							<img id="feedback-icon-four" class="feedback-icon" />
							<img id="feedback-icon-five" class="feedback-icon" />
							<img id="feedback-icon-six" class="feedback-icon" />
							<img id="feedback-icon-seven" class="feedback-icon" />
							<img id="feedback-icon-eight" class="feedback-icon" />
							<img id="feedback-icon-nine" class="feedback-icon" />
							<img id="feedback-icon-ten" class="feedback-icon" />
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" disabled={ game.timePassingButtonDisabled } onClick={ () => { game.updateLevel(4) ;  game.updateEpisode(0) ;  game.updateTreeBranch(0)  }}> Continue </button>
							</div>

							
							
						</div>
					)

				}



			}

		},	


		//====================
		// LEVEL -- FESTIVAL
		//====================	

		4: {
			0: {
				0: {
					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
							<img id="bunting" src={require('./images/bunting.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />

							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>
							<p class="gameplay-text"> {levelOneIntro.descriptionOne} </p>
							
							<img id="person-one-festival" class="person-festival" src={require('./images/person-one.png')} />
							<img id="person-two-festival" class="person-festival" src={require('./images/person-two.png')} />
							<img id="person-three-festival" class="person-festival" src={require('./images/person-three.png')} />
							<img id="person-four-festival" class="person-festival" src={require('./images/person-four.png')} />
							<img id="person-five-festival" class="person-festival" src={require('./images/person-five.png')} />
							<img id="person-six-festival"  class="person-festival"src={require('./images/person-six.png')} />
							<img id="person-seven-festival" class="person-festival" src={require('./images/person-seven.png')} />
							<img id="person-eight-festival" class="person-festival" src={require('./images/person-eight.png')} />
							<img id="person-nine-festival" class="person-festival" src={require('./images/person-one.png')} />
							<img id="person-ten-festival" class="person-festival" src={require('./images/person-two.png')} />
							<img id="person-eleven-festival" class="person-festival" src={require('./images/person-one.png')} />
							<img id="person-twelve-festival" class="person-festival" src={require('./images/person-two.png')} />

							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" onClick={ () => game.updateTreeBranch(1) }> Great! </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)

				},
				1: {
					id: "L1E0T1",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
							<img id="bunting" src={require('./images/bunting.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />

							<img preload='auto' src="https://i.ibb.co/Xz70Tsx/pizza-crust.png"  id="pizza-festival" />


							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>
							<p class="gameplay-text gameplay-text-centre"> {levelOneIntro.descriptionTwo} </p>
							
						
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" onClick={ () => game.updateTreeBranch(2) }> Okay! </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					)
				}, 
				2: {
					id: "L1E0T2",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
							<img id="bunting" src={require('./images/bunting.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />


							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>
							
							<img id="planet-pizza-festival"  src={require('./images/restaurant.png')}/>
							
							<p class="gameplay-text"> {l0E0T1.descriptionOne} </p>
							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => game.updateTreeBranch(3) }> Close Up </button>
								<button class="update-tree-button button-text" onClick={ () => {game.updateTreeBranch(11) ; game.moneyUp(game.money + 600, "up") } }> Stay Open </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
						
						</div>
					)

				},
				3: {
					id: "L1E0T3",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
							<img id="bunting" src={require('./images/bunting.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />


							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>
							
							<img id="laptop-image" src={require('./images/laptop.png')} />
							<p class="gameplay-text align-center"> {l0E0T3.descriptionOne} </p>
							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => game.updateTreeBranch(4) }> Hmmm ... </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
						
						</div>
					)
				},
				4: {
					// Decided to close up and review
					id: "L1E0T4",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
							<img id="bunting" src={require('./images/bunting.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />


							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>
							
							
							<p id="order-review-text" class="gameplay-text"> {l0E0T4.orderReview} </p>
							
							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => { checkOrderInput(game, 5) } }> Place Order </button>
							</div>

							<div class="price-list grid-container-4x6">
								<p id="price-list-title">Price List</p>
								<p id="cheese-price-list">Cheese</p>
								<p id="tomato-price-list">Tomatoes</p>
								<p id="basil-price-list">Basil</p>
								<p id="cheese-cost">£50 p/kg</p>
								<p id="tomato-cost">£7 p/kg</p>
								<p id="basil-cost">£50 p/kg</p>
							</div>


							<div class="place-order-container grid-container-4x6">
								<img id="cheese-order-image" src={require('./images/cheese.png')} />
								<img id="tomato-order-image" src={require('./images/tomato.png')} />
								<img id="basil-order-image" src={require('./images/basil.png')} />
								<input id="cheese-order-input" type="number" name="cheese-order-input" min="40" max="60" step="10"/>
								<input id="tomato-order-input" type="number" name="tomato-order-input" min="50" max="60" step="5"/>
								<input id="basil-order-input" type="number" name="basil-order-input" min="7" max="15" step="1"/>
								<p id="cheese-kg" class="bold"> kg's </p>
								<p id="tomato-kg" class="bold"> kg's </p>
								<p id="basil-kg" class="bold"> kg's </p>
								<p id="l0E0T4-descriptionThree" class="align-center"> {l0E0T4.descriptionThree} </p>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
						
						</div>
					)
				},
				5:{
					id: "L1E0T5",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
							<img id="bunting" src={require('./images/bunting.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />


							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>
							
							
							

							<div class="review-order-container">
								<p id="item-title">ITEM</p>
								<p id="quantity-title">QUANTITY</p>
								<p id="cost-title">COST</p>
								<img id="cheese-review-image" src={require('./images/cheese.png')} />
								<img id="tomato-review-image" src={require('./images/tomato.png')} />
								<img id="basil-review-image" src={require('./images/basil.png')} />
								<p id="cheese-x">X</p>
								<p id="tomato-x">X</p>
								<p id="basil-x">X</p>
								<p id="cheese-quantity"> {game.festivalFoodOrder.cheese + "KG"} </p>
								<p id="tomato-quantity"> {game.festivalFoodOrder.tomato + "KG"} </p>
								<p id="basil-quantity"> {game.festivalFoodOrder.basil + "KG"} </p>
								<p id="cheese-equal">=</p>
								<p id="tomato-equal">=</p>
								<p id="basil-equal">=</p>
								<p id="cheese-price"> { "£" + game.festivalFoodOrder.cheese * 50 } </p>
								<p id="tomato-price"> {"£" + game.festivalFoodOrder.tomato * 7} </p>
								<p id="basil-price"> {"£" + game.festivalFoodOrder.basil * 50} </p>
								<p id="total-price"> { "TOTAL: £" + ((game.festivalFoodOrder.cheese * 50) + (game.festivalFoodOrder.tomato * 7) + (game.festivalFoodOrder.basil * 50))} </p>
							</div>

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => game.updateTreeBranch(4) }> Edit </button>
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(6) ; game.moneyUp((game.money - ((game.festivalFoodOrder.cheese * 50) + (game.festivalFoodOrder.tomato * 7) + (game.festivalFoodOrder.basil * 50))), "down")} }> Confirm </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
						
						</div>
					)
				},
				6: {
					id: "L1E0T6",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />


							<img id="bunting" src={require('./images/bunting.png')} />
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<p id="good-luck" class="gameplay-text align-center"> {beforeFestival.descriptionOne} </p>
							

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => game.updateTreeBranch(game.returnTreeFromFoodOrder()) }> Let's Do This </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
						
						</div>
					)
				},
				7: {
					id: "L1E0T7",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />


							<img id="bunting" src={require('./images/bunting.png')} />
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<p id="check-out-stats" class="gameplay-text"> {festivalResults.checkOutStats} </p>
							<p id="surplus-one" class="gameplay-text"> { festivalResults.surplus + " " + festivalResults.surplusWaste } </p>

							

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(10) ; game.moneyUp((game.money + ((game.festivalFoodOrder.report.profit))), "up")} }> Okay </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
						
						</div>
					)
				},
				8: {
					id: "L1E0T8",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />


							<img id="bunting" src={require('./images/bunting.png')} />
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<p id="check-out-stats" class="gameplay-text"> {festivalResults.checkOutStats} </p>
							<p id="home-early-one" class="gameplay-text"> {festivalResults.homeEarly + " " + festivalResults.homeEarlyTwo} </p>
							
							

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(10) ; game.moneyUp((game.money + ((game.festivalFoodOrder.report.profit))), "up")} }> Okay </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
						
						</div>
					)
				}, 
				9: {
					id: "L1E0T9",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />


							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
							<img id="bunting" src={require('./images/bunting.png')} />
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<p id="check-out-stats" class="gameplay-text"> {festivalResults.checkOutStats} </p>
							<p id="perfect-one" class="gameplay-text"> {festivalResults.perfect + " " + festivalResults.perfectProfit} </p>
							

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(10) ; game.moneyUp((game.money + ((game.festivalFoodOrder.report.profit))), "up") } }> Okay </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
						
						</div>
					)
				},
				10: {
					id: "L1E0T10",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />


							<img id="bunting" src={require('./images/bunting.png')} />
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<div class="festival-report-container grid-container-4x6">
								<p id="festival-report-title" class="">  <span id="festival-report-title-span"> {festivalReport.title} </span>  </p>
								<p id="festival-report-time"> {festivalReport.time} </p>
								<p id="festival-report-pizzas" > {festivalReport.pizzas} </p>
								<p id="festival-report-waste" > {festivalReport.waste} </p>
								<p id="festival-report-profit"> {festivalReport.profit} </p>
								<p id="festival-report-time-number"> {game.festivalFoodOrder.report.time} </p>
								<p id="festival-report-pizzas-number"> {game.festivalFoodOrder.report.pizzas} </p>
								<p id="festival-report-waste-number" > {game.festivalFoodOrder.report.waste  + " bin bags"} </p>
								<p id="festival-report-profit-number"> {"£" + game.festivalFoodOrder.report.profit} </p>
								<p id="get-rid-of-waste"> { festivalReport.getRidOfWaste } </p>
							</div>

							

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(0); game.updateEpisode(1) } }> Sure </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
						
						</div>
					)
				},
				11: {
					id: "L1E0T11",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />


							<img id="bunting" src={require('./images/bunting.png')} />
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>

							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<img id="laptop-image" src={require('./images/laptop.png')} />
							
							<p class="gameplay-text align-center"> {l0E0T3.descriptionTwo} </p>
							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => game.updateTreeBranch(12) }> Nice </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
						
						</div>
					)
				},
				12: {
					// Decided to stay open
					id: "L1E0T12",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />


							<img id="bunting" src={require('./images/bunting.png')} />
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>
							
							
							<p id="order-review-text" class="gameplay-text"> {l0E0T4.hint} </p>
							
							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => { checkOrderInput(game, 13) } }> Place Order </button>
							</div>

							<div class="price-list grid-container-4x6">
								<p id="price-list-title">Price List</p>
								<p id="cheese-price-list">Cheese</p>
								<p id="tomato-price-list">Tomatoes</p>
								<p id="basil-price-list">Basil</p>
								<p id="cheese-cost">£50 p/kg</p>
								<p id="tomato-cost">£7 p/kg</p>
								<p id="basil-cost">£50 p/kg</p>
							</div>


							<div class="place-order-container grid-container-4x6">
								<img id="cheese-order-image" src={require('./images/cheese.png')} />
								<img id="tomato-order-image" src={require('./images/tomato.png')} />
								<img id="basil-order-image" src={require('./images/basil.png')} />
								<input id="cheese-order-input" type="number" name="cheese-order-input" min="40" max="60" step="10"/>
								<input id="tomato-order-input" type="number" name="tomato-order-input" min="50" max="60" step="5"/>
								<input id="basil-order-input" type="number" name="basil-order-input" min="7" max="15" step="1"/>
								<p id="cheese-kg" class="bold"> kg's </p>
								<p id="tomato-kg" class="bold"> kg's </p>
								<p id="basil-kg" class="bold"> kg's </p>
								<p id="l0E0T4-descriptionThree" class="align-center"> {l0E0T4.descriptionThree} </p>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
						
						</div>
					)
				},
				13: {
					id: "L1E0T13",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />


							<img id="bunting" src={require('./images/bunting.png')} />
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>
							
							
							

							<div class="review-order-container">
								<p id="item-title">ITEM</p>
								<p id="quantity-title">QUANTITY</p>
								<p id="cost-title">COST</p>
								<img id="cheese-review-image" src={require('./images/cheese.png')} />
								<img id="tomato-review-image" src={require('./images/tomato.png')} />
								<img id="basil-review-image" src={require('./images/basil.png')} />
								<p id="cheese-x">X</p>
								<p id="tomato-x">X</p>
								<p id="basil-x">X</p>
								<p id="cheese-quantity"> {game.festivalFoodOrder.cheese + "KG"} </p>
								<p id="tomato-quantity"> {game.festivalFoodOrder.tomato + "KG"} </p>
								<p id="basil-quantity"> {game.festivalFoodOrder.basil + "KG"} </p>
								<p id="cheese-equal">=</p>
								<p id="tomato-equal">=</p>
								<p id="basil-equal">=</p>
								<p id="cheese-price"> { "£" + game.festivalFoodOrder.cheese * 50 } </p>
								<p id="tomato-price"> {"£" + game.festivalFoodOrder.tomato * 7} </p>
								<p id="basil-price"> {"£" + game.festivalFoodOrder.basil * 50} </p>
								<p id="total-price"> { "TOTAL: £" + ((game.festivalFoodOrder.cheese * 50) + (game.festivalFoodOrder.tomato * 7) + (game.festivalFoodOrder.basil * 50))} </p>
							</div>

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => game.updateTreeBranch(12) }> Edit </button>
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(6) ; game.moneyUp((game.money - ((game.festivalFoodOrder.cheese * 50) + (game.festivalFoodOrder.tomato * 7) + (game.festivalFoodOrder.basil * 50))), "down")} }> Confirm </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
						
						</div>
					)
				}

			},
			// LEVEL ONE // EPISODE ONE
			1: {
				0: {
					id: "L1E1T0",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />

							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>

							<img id="signpost-trash" src="https://i.ibb.co/HgcpCzP/signpost.png" />

							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>
							
							<p id="drag-and-drop-instructions" class="gameplay-text"> {dragAndDrop.instructions} </p>
							<p id="drag-and-drop-instructions-two" class="gameplay-text"> {dragAndDrop.instructionsTwo} </p>

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => game.updateTreeBranch(1) }> Ready </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
						
						</div>
					)
				},

				1: {
					id: "L1E1T1",
					main: (
						<div className="level-one-background grid-container-4x6 wrapper">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>

							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<img id="signpost-trash" src="https://i.ibb.co/HgcpCzP/signpost.png" />

							<div class="trash-image-container">
								<img preload='auto' src="https://i.ibb.co/ZGZkS2h/pizzabox.png" id="drag-one-recycling" class="trash-item-image first-drag pizzabox-drag" onTouchStart={ ()=> { countdown(game) }} onTouchEnd={ (event)=> {mobileDrop(event, "#drag-one-recycling", game)}} onTouchMove={ (event) => {mobileDrag(event, "#drag-one-recycling") }} draggable='true' onDragStart={(event) => { onDragStart(event); countdown(game) }}/>
								<img preload='auto' src="https://i.ibb.co/Xz70Tsx/pizza-crust.png"  id="drag-two-food" class="trash-item-image hide-drag-image crust-drag" onTouchEnd={ (event)=> {mobileDrop(event, "#drag-two-food", game)}} onTouchMove={ (event) => {mobileDrag(event, "#drag-two-food")}} draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img preload='auto' src="https://i.ibb.co/KX9RZCF/can.png" id="drag-three-recycling" class="trash-item-image hide-drag-image can-drag" onTouchEnd={ (event)=> {mobileDrop(event, "#drag-three-recycling", game)}} onTouchMove={ (event) => {mobileDrag(event, "#drag-three-recycling")}} draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img preload='auto' src="https://i.ibb.co/Xxx0DmG/rocket.png" id="drag-four-food" class="trash-item-image hide-drag-image rocket-drag" onTouchEnd={ (event)=> {mobileDrop(event, "#drag-four-food", game)}} onTouchMove={ (event) => {mobileDrag(event, "#drag-four-food")}} draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img preload='auto' src="https://i.ibb.co/r5h4WGd/water-bottle.png" id="drag-five-general" class="trash-item-image hide-drag-image water-drag" onTouchEnd={ (event)=> {mobileDrop(event, "#drag-five-general", game)}} onTouchMove={ (event) => {mobileDrag(event, "#drag-five-general")}} draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img preload='auto' src="https://i.ibb.co/258WBWz/tomato.png" id="drag-six-food" class="trash-item-image hide-drag-image tomato-drag" onTouchEnd={ (event)=> {mobileDrop(event, "#drag-six-food", game)}} onTouchMove={ (event) => {mobileDrag(event, "#drag-six-food")}} draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img preload='auto' src="https://i.ibb.co/rvq7x0V/tomato-tin.png"  id="drag-seven-recycling" class="trash-item-image hide-drag-image tin-drag" onTouchEnd={ (event)=> {mobileDrop(event, "#drag-seven-recycling", game)}} onTouchMove={ (event) => {mobileDrag(event, "#drag-seven-recycling")}} draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img preload='auto' src="https://i.imgur.com/HZMJP39.png" id="drag-eight-general" class="trash-item-image hide-drag-image tupperware-drag" onTouchEnd={ (event)=> {mobileDrop(event, "#drag-eight-general", game)}} onTouchMove={ (event) => {mobileDrag(event, "#drag-eight-general")}} draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img preload='auto' src="https://i.ibb.co/HgvKmJp/basil.png" id="drag-nine-food" class="trash-item-image hide-drag-image basil-drag" onTouchEnd={ (event)=> {mobileDrop(event, "#drag-nine-food", game)}} onTouchMove={ (event) => {mobileDrag(event, "#drag-nine-food")}} draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img preload='auto' src="https://i.ibb.co/ZGZkS2h/pizzabox.png"  id="drag-ten-recycling" class="trash-item-image hide-drag-image pizzabox-drag" onTouchEnd={ (event)=> {mobileDrop(event, "#drag-ten-recycling", game)}} onTouchMove={ (event) => {mobileDrag(event, "#drag-ten-recycling")}} draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img preload='auto' src="https://i.imgur.com/T3gRLF1.png" id="drag-eleven-general" class="trash-item-image hide-drag-image cutlery-drag" onTouchEnd={ (event)=> {mobileDrop(event, "#drag-eleven-general", game)}} onTouchMove={ (event) => {mobileDrag(event, "#drag-eleven-general")}} draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img preload='auto' src="https://i.imgur.com/morv5kV.png"  id="drag-twelve-food" class="trash-item-image hide-drag-image compost-drag" onTouchEnd={ (event)=> {mobileDrop(event, "#drag-twelve-food", game)}} onTouchMove={ (event) => {mobileDrag(event, "#drag-twelve-food")}} draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img preload='auto' src="https://i.ibb.co/Xxx0DmG/rocket.png" id="drag-thirteen-food" class="trash-item-image hide-drag-image rocket-drag" onTouchEnd={ (event)=> {mobileDrop(event, "#drag-thirteen-food", game)}} onTouchMove={ (event) => {mobileDrag(event, "#drag-thirteen-food")}} draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img preload='auto' src="https://i.ibb.co/258WBWz/cheese.png" id="drag-fourteen-food" class="trash-item-image hide-drag-image tomato-drag" onTouchEnd={ (event)=> {mobileDrop(event, "#drag-fourteen-food", game)}} onTouchMove={ (event) => {mobileDrag(event, "#drag-fourteen-food")}} draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img preload='auto' src="https://i.ibb.co/rvq7x0V/tomato-tin.png"  id="drag-fifteen-recycling" class="trash-item-image hide-drag-image tin-drag" onTouchEnd={ (event)=> {mobileDrop(event, "#drag-fifteen-recycling", game)}} onTouchMove={ (event) => {mobileDrag(event, "#drag-fifteen-recycling")}} draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img preload='auto' src="https://i.imgur.com/qMznLCg.png" id="drag-sixteen-recycling" class="trash-item-image hide-drag-image cutlery-drag" onTouchEnd={ (event)=> {mobileDrop(event, "#drag-sixteen-recycling", game)}} onTouchMove={ (event) => {mobileDrag(event, "#drag-sixteen-recycling")}} draggable='true' onDragStart={(event) => onDragStart(event)}/>
								
							</div>

							<img id="cross-image" src={require('./images/cross.png')} />
							<img id="tick-image" src={require('./images/tick.png')} />


							<div class="timer-container flex-container">
								<p id="drag-drop-timer" class="gameplay-text"> :30 </p> 
							</div>

							<div class="trash-container">
								
								 <img src="https://i.ibb.co/MC0Nn5J/recycling-bin.png" id="drop-bin-one" onDragOver={(event) => onDragOver(event)} onDrop={(event) => { onDrop(event, game) ; displayNextImage()}}/>
							
								<img src="https://i.imgur.com/zefwiCS.png" id="drop-bin-two" onDragOver={(event) => onDragOver(event)} onDrop={(event) => { onDrop(event, game) ; displayNextImage()}}/>
							
								<img src="https://i.ibb.co/dMs2Fyb/food-bin.png" id="drop-bin-three"  onDragOver={(event) => onDragOver(event)} onDrop={(event) => { onDrop(event, game) ; displayNextImage()}}/>
								
							</div>
							


							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => game.updateTreeBranch(game.returnTreeFromTrashResult()) }> Finish </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
						
						</div>
					)
				},
				// All Correct
				2: {
					id: "L1E1T2",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>

							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>
							
							<p id="drag-and-drop-result-main" class="gameplay-text"> {dragAndDropResults.allCorrect} </p>

							<div class="drag-and-drop-result-container">
								<p id="correct-waste-text" class="gameplay-text">Correctly Disposed Waste: </p>
								<p id="incorrect-waste-text" class="gameplay-text">Incorrectly Disposed / Missed Waste: </p>
								<p id="correct-waste-number" class="gameplay-text"> {game.dragAndDropTrash.result.correct} </p>
								<p id="incorrect-waste-number" class="gameplay-text"> {game.dragAndDropTrash.result.incorrect} </p>
							</div>
							

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(7) } }> Continue </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
						
						</div>
					)
				},
				// Over 3/4 Correct
				3: {
					id: "L1E1T3",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>

							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>
							
							<p id="drag-and-drop-result-main" class="gameplay-text"> {dragAndDropResults.over3Quarters} </p>

							<div class="drag-and-drop-result-container">
								<p id="correct-waste-text" class="gameplay-text">Correctly Disposed Waste: </p>
								<p id="incorrect-waste-text" class="gameplay-text">Incorrectly Disposed / Missed Waste: </p>
								<p id="correct-waste-number" class="gameplay-text"> {game.dragAndDropTrash.result.correct} </p>
								<p id="incorrect-waste-number" class="gameplay-text"> {game.dragAndDropTrash.result.incorrect} </p>
							</div>
							

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(7) }  }> Continue </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
						
						</div>
					)
				},
				// Under 3/4 correct
				4: {
					id: "L1E1T4",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>

							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>
							
							<p id="drag-and-drop-result-main" class="gameplay-text"> {dragAndDropResults.under3Quarters} </p>

							<div class="drag-and-drop-result-container">
								<p id="correct-waste-text" class="gameplay-text">Correctly Disposed Waste: </p>
								<p id="incorrect-waste-text" class="gameplay-text">Incorrectly Disposed / Missed Waste: </p>
								<p id="correct-waste-number" class="gameplay-text"> {game.dragAndDropTrash.result.correct} </p>
								<p id="incorrect-waste-number" class="gameplay-text"> {game.dragAndDropTrash.result.incorrect} </p>
							</div>
							
							<div>
							</div>
							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => {game.updateTreeBranch(6) } }> Bargain </button>
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(7) ; game.moneyUp((game.money - 250), "down")  }  }> Pay & Continue </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
						
						</div>
					)
				},
				// Under half correct
				5: {
					id: "L1E1T5",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
							

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />


							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>

							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>
							
							<p id="drag-and-drop-result-main" class="gameplay-text"> {dragAndDropResults.underHalf} </p>

							<div class="drag-and-drop-result-container">
								<p id="correct-waste-text" class="gameplay-text">Correctly Disposed Waste: </p>
								<p id="incorrect-waste-text" class="gameplay-text">Incorrectly Disposed / Missed Waste: </p>
								<p id="correct-waste-number" class="gameplay-text"> {game.dragAndDropTrash.result.correct} </p>
								<p id="incorrect-waste-number" class="gameplay-text"> {game.dragAndDropTrash.result.incorrect} </p>
							</div>
							

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => {game.updateTreeBranch(6) } }> Bargain </button>
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(7) ;  game.moneyUp((game.money - 500), "down")  } }> Pay & Continue </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
						
						</div>
					)
				},
				// Bargain Page
				6: {
					id: "L1E1T5",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>

							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>
							
							<p id="drag-and-drop-result-main" class="gameplay-text"> {dragAndDropResults.bargain} </p>
							

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(7) ; game.moneyUp((game.money - 1000), "down")} }> Pay & Continue </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
						
						</div>
					)
				},

			7: {


				main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>


							<p id="drag-and-drop-final-text">{dragAndDropResults.finalText}</p>
							<img id="planet-pizza-decor" class="planet-pizza" src={require('./images/restaurant.png')} />

							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => game.updateTreeBranch(8) }> Continue </button>
							</div>

							<button className="read-article-button" onClick={() => game.activateArticle()}>Read Article</button>
							
						</div>
					),
				},

			8: {

				main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<img class="speech-bubble" src="" />

							<p id="weekly-earnings" class="gameplay-text"> </p>


							<div id="position-identifier"></div>
							<div id="position-identifier-top"></div>

							<div class="week-number-container">
								<p id="weekly-timer" class="gameplay-text"> { "Week " + game.weekNumber } </p>
							</div>
							
							<img id="planet-pizza-animation" class="planet-pizza" src={require('./images/restaurant.png')} onLoad={ () => {timePassing(game, game.weekNumber, 24) ; animatePeople() ; animateFeedback(game) } }/>
							<img id="person-one" class="person" src={require('./images/person-one.png')} />
							<img id="person-two" class="person" src={require('./images/person-two.png')} />
							<img id="person-three" class="person" src={require('./images/person-three.png')} />
							<img id="person-four" class="person" src={require('./images/person-four.png')} />
							<img id="person-five" class="person" src={require('./images/person-five.png')} />
							<img id="person-six"  class="person"src={require('./images/person-six.png')} />
							<img id="person-seven" class="person" src={require('./images/person-seven.png')} />
							<img id="person-eight" class="person" src={require('./images/person-eight.png')} />
							<img id="person-nine" class="person" src={require('./images/person-one.png')} />
							<img id="person-ten" class="person" src={require('./images/person-two.png')} />
							<img id="person-eleven" class="person" src={require('./images/person-one.png')} />
							<img id="person-twelve" class="person" src={require('./images/person-two.png')} />


							<img id="feedback-icon-one" class="feedback-icon" />
							<img id="feedback-icon-two" class="feedback-icon" />
							<img id="feedback-icon-three" class="feedback-icon" />
							<img id="feedback-icon-four" class="feedback-icon" />
							<img id="feedback-icon-five" class="feedback-icon" />
							<img id="feedback-icon-six" class="feedback-icon" />
							<img id="feedback-icon-seven" class="feedback-icon" />
							<img id="feedback-icon-eight" class="feedback-icon" />
							<img id="feedback-icon-nine" class="feedback-icon" />
							<img id="feedback-icon-ten" class="feedback-icon" />
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" disabled={ game.timePassingButtonDisabled } onClick={ () => { game.updateLevel(5) ;  game.updateEpisode(0) ;  game.updateTreeBranch(calculateWin(game))  }}> Your Score </button>
							</div>

							
							
						</div>
					),

				}
			}
			
		},

		// ================
		// CALCULATE WINNER
		// ================

		5: {

			0: {

				0: {

					main: (


						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							

							<p class="win-lose-title"> { final.winTitle } </p>

							<p id="win-lose-text" class="gameplay-text"> { final.winText } </p>


							
							<div class="final-result-container">
								<p class="score-text-title"> {final.scoreTitle} </p>
								<img class="win-lose-leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="score-text-points"> {game.sePoints} </p>
								<img class="win-lose-pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="score-text-money"> {game.money} </p>
							</div>
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.resetGame() } }> Play Again </button>
								<button class="update-tree-button button-text"  onClick={ () => { game.activateArticle() } }> Read The Article </button>
							</div>
							
						</div>




						)

				},

				// LOSE SE POINTS

				1: {


					main: (


						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							

							<p class="win-lose-title"> { final.loseTitle } </p>

							<p id="win-lose-text" class="gameplay-text"> { final.loseSEtext } </p>


							
							<div class="final-result-container">
								<p class="score-text-title"> {final.scoreTitle} </p>
								<img class="win-lose-leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="score-text-points"> {game.sePoints} </p>
								<img class="win-lose-pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="score-text-money"> {game.money} </p>
							</div>
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.resetGame() } }> Play Again </button>
								<button class="update-tree-button button-text"  onClick={ () => { game.activateArticle() } }> Read The Article </button>
							</div>
							
						</div>




						)


				},

				// LOSE MONEY

				2: {



					main: (


						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							

							<p class="win-lose-title"> { final.loseTitle } </p>

							<p id="win-lose-text" class="gameplay-text"> { final.loseMoneyText } </p>


							
							<div class="final-result-container">
								<p class="score-text-title"> {final.scoreTitle} </p>
								<img class="win-lose-leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="score-text-points"> {game.sePoints} </p>
								<img class="win-lose-pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="score-text-money"> {game.money} </p>
							</div>
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.resetGame() } }> Play Again </button>
								<button class="update-tree-button button-text"  onClick={ () => { game.activateArticle() } }> Read The Article </button>
							</div>
							
						</div>




						)


				},

				// LOSE BOTH

				3: {

					main: (


						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

							<img id="mute-audio-icon" src={ game.audioIconSource } onClick={() => { muteAudio(game) } } />
							

							<p class="win-lose-title"> { final.loseTitle } </p>

							<p id="win-lose-text" class="gameplay-text"> { final.loseBothText } </p>


							
							<div class="final-result-container">
								<p class="score-text-title"> {final.scoreTitle} </p>
								<img class="win-lose-leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="score-text-points"> {game.sePoints} </p>
								<img class="win-lose-pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="score-text-money"> {game.money} </p>
							</div>
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.resetGame() } }> Play Again </button>
								<button class="update-tree-button button-text"  onClick={ () => { game.activateArticle() } }> Read The Article </button>
							</div>
							
						</div>




						)


				}

			}

		},
		// ================
		// ARTICLE LOCATION
		// ================
		6: {
			0: {
				0: {

					main: (

						<div id="hello-root">
							<button id="resume-game-button" onClick={ game.resumeGame }> Resume Game </button>
							<Article/>
						</div> 


						)

				}
			}
		}

	
	}

	// ================
	// Loop through components object and return matching JSX block depending on the level, episode and tree defined in the game's state (Index.js)
	// ================

	// Define result
	let result;	


	if (level === 0) {

		Object.keys(componentsObjects[level]).forEach(function(key){

			if (episode.toString() === key.toString()) {

				result = componentsObjects[level][key][tree]
				
			}
		})

	}

	else if (level === 1) {

		Object.keys(componentsObjects[level]).forEach(function(key){

			if (episode.toString() === key.toString()) {

				result = componentsObjects[level][key][tree]
				
			}
		})

	} else if (level === 2 ) {

		Object.keys(componentsObjects[level]).forEach(function(key){

			if (episode.toString() === key.toString()) {

				result = componentsObjects[level][key][tree]
				
			}
		})

	} else if (level === 3 ) {

		Object.keys(componentsObjects[level]).forEach(function(key){

			if (episode.toString() === key.toString()) {

				result = componentsObjects[level][key][tree]
				
			}
		})

	} else if (level === 4 ) {

		Object.keys(componentsObjects[level]).forEach(function(key){

			if (episode.toString() === key.toString()) {

				result = componentsObjects[level][key][tree]
				
			}
		})

	} else if (level === 5 ) {

		Object.keys(componentsObjects[level]).forEach(function(key){

			if (episode.toString() === key.toString()) {

				result = componentsObjects[level][key][tree]
				
			}
		})

	} else if (level === 6 ) {

		Object.keys(componentsObjects[level]).forEach(function(key){

			if (episode.toString() === key.toString()) {

				result = componentsObjects[level][key][tree]
				
			}
		})

	}




	return result;
}




