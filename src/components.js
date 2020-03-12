//========================
// This file contains components to be renderered 
// =======================

import React from 'react';
import './index.css';
import { triggerMaze } from './mazing.js';
import { characters, gameTitle, howToPlay, remember, levelOneIntro, l0E0T1, l0E0T3, l0E0T4, reviewOrder, beforeFestival, festivalResults, festivalReport, dragAndDrop, dragAndDropResults, businessLicense, suppliersChoice, goodLuck, furtherDescriptions, ohNoSupplierOutOfStock, takeoutIntro, packaging, discountScheme, cutlery } from './storylines.js';
import { arraysMatch, hoverHeadTextAppear, hoverHeadTextDisappear, addBorderOnClick, confirmOrder, onDragStart, onDragOver, onDrop, displayNextImage, countdown, playBackgroundBossMusic, playAudio, checkOrderInput, timePassing, animatePeople, selectSupplier, assessEnergySupplier, assessFurnitureSelection, assessFoodSupplierSelection, showDescriptiveTextOnMouseOver, hideDescriptiveTextOnMouseOut, assessPotatoDecision, assessPackagingDecision, updatePopularity, increaseMealPrice, offerDiscount, assessCutleryDecision, hideInstructionsPanel, disableTimePassingButton } from './utils.js';


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
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />


							<div class="flex-container gameplay-button-container">
								<button id="opening-play-button" class="update-tree-button button-text" onClick={() => { game.updateTreeBranch(1)} }> Play!</button>
							</div>
							<div class="flex-container bottom">
								<img id="town-houses" src={require('./images/town-houses.png')} />
							</div>
							

						</div>
						),

				},
				1: {
					id: "L0E0T1",
					main: (
						<div class="plain-background title-screen grid-container-4x6">
							<h1 id="instructions-title" class="title align-center"> {howToPlay.title} </h1>
							<p id="pick-a-biz-desc" class="plain-text align-center"> <span class="bold"> {howToPlay.instructionsOne} </span> </p>
							<p id="to-win-desc" class="plain-text align-center"> {howToPlay.instructionsThree} </p>

							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-explainer-text"> Money </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="icon-explainer-text"> Sustainability Points  </p>
							</div>
							
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />

						
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" onClick={() => game.updateTreeBranch(2) }>Okay</button>
							</div>
							<div class="flex-container bottom">
								<img id="town-houses" src={require('./images/town-houses.png')} />
							</div>
							

						</div>
					),

				},

				2: {
					id: "L0E0T4",
					main: (
						<div class="plain-background title-screen grid-container-4x6">
							<h1 id="choose-a-character-title" class="title align-center"> Choose a Business Owner </h1>
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
							
							<div class="character-container">
								<div onClick={() => { addBorderOnClick(".character-one-container") ; game.enableButton("#set-character-button")}} class="character-one-container">
									<p class="character-name plain-text bold"> {characters[0].name} </p>
									<img id="joe-head" class="character-head" onMouseOver={() => hoverHeadTextAppear("#joe-description")} onMouseOut={() => hoverHeadTextDisappear("#joe-description")} src={require('./images/joe-head.png')}/>
								</div>
								<div class="character-description-container">
										<p id="joe-description" class="character-description"> {characters[0].description} </p>
								</div>
								
							</div>

							<p id="hover-instruction"> {suppliersChoice.descriptionTwo} </p>
					
							<div class="flex-container gameplay-button-container">

								<button id="set-character-button" class="update-tree-button button-text" disabled={ game.buttonDisabled } onClick={() => { game.updateTreeBranch(3) }  }> Set </button>
							</div>
							<div class="flex-container bottom">
								<img id="town-houses" src={require('./images/town-houses.png')} />
							</div>
							



						</div>

					),

				},
				3: {
					id: "L0E0T5",
					main: (
						<div class="plain-background title-screen grid-container-4x6">
							<h1 id="remember-title" class="title align-center"> {remember.title} </h1>
							<p id="remember-description-one" class="plain-text"> {remember.descriptionOne}</p>
							<p id="uplands-quote"> {remember.uplandsQuote} <span id="uplands-span"> <br/> {remember.uplandsSpan} </span> </p>
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />


								<div class="flex-container gameplay-button-container">
									<button class="update-tree-button button-text" onClick={() => { game.updateLevel(1) ; game.updateEpisode(0) ;  game.updateTreeBranch(0)  }  }> Go! </button>
								</div>
								<div class="flex-container bottom">
									<img id="town-houses" src={require('./images/town-houses.png')} />
								</div>
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

				// YOUR BUSINESS LICENSE
				0: {
					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<p id="certified-title"> You're Certified </p>
							<p id="check-it-out"> {businessLicense.checkItOut} </p>

							<div id="business-license-container">

								<p id="biz-license-title">{businessLicense.title}</p>
								<p id="biz-license-company-number">{businessLicense.companyNumber}</p>
								<p id="biz-license-registrar">{businessLicense.registrar}</p>
								<p id="biz-license-company-name">{businessLicense.companyName}</p>
								<p id="biz-license-is-this-day">{businessLicense.isThisDay}</p>
								<p id="biz-license-given-at">{businessLicense.givenAt}</p>

							</div>
							
							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => game.updateTreeBranch(1) }> Continue </button>
							</div>
							
						</div>
					),
					gamePlay: (
						<div>
							
						</div>
					)



				},

				1: {

					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>


							<p id="suppliers-choice-description-one">{suppliersChoice.descriptionOne}</p>
							<img id="planet-pizza-decor" class="planet-pizza" src={require('./images/restaurant.png')} />

							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => game.updateTreeBranch(2) }> Continue </button>
							</div>
							
						</div>
					),
					gamePlay: (
						<div>
							
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
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<div class="further-description-container">

								<p id="further-description-cost-title">COST: </p>
								<p id="further-description-cost-value">£1000</p>

								<p id="further-description-more-info-title">More info: </p>
								<p id="further-description-more-info-value"> This is some text </p>

							</div>

							<p id="suppliers-choice-description-two">{suppliersChoice.descriptionTwo}</p>

							<div class="supplier-choice-container">

								<p class="supplier-choice-title-main"> {suppliersChoice.energyTitle} </p>

								<p class="supplier-choice-title-one"> {suppliersChoice.energyOne} </p>
								<p class="supplier-choice-title-two">{ suppliersChoice.energyTwo} </p>
								<p class="supplier-choice-title-three"> {suppliersChoice.energyThree} </p>

								<img id="solar-image" src={require('./images/solar.png')} onMouseOver={ () => showDescriptiveTextOnMouseOver() } onMouseOut={ () => hideDescriptiveTextOnMouseOut() } onClick={ () => {selectSupplier("#solar-image", "#pylon-image", "#ethical-energy-supplier-image", game, "energy") ; game.enableEnergySupplierButton() } } />
								<img id="pylon-image" src={require('./images/pylon.png')} onClick={ () => { selectSupplier("#pylon-image", "#ethical-energy-supplier-image", "#solar-image", game, "energy") ; game.enableEnergySupplierButton()  } } />
								<img id="ethical-energy-supplier-image" src={require('./images/solar.png')} onClick={ () => { selectSupplier("#ethical-energy-supplier-image", "#pylon-image", "#solar-image", game, "energy") ; game.enableEnergySupplierButton()  }  } />

							</div>
							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" disabled={ game.energySupplierButtonDisabled } onClick={ () => { game.updateTreeBranch(3) ; assessEnergySupplier(game)}  }> Set </button>
							</div>
							
						</div>
					),
					gamePlay: (
						<div>
							
						</div>
					)
				},

				3: {
					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
							
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

								<img id="upcycle-image" src={require('./images/upcycle.png')} onClick={ () => {selectSupplier("#upcycle-image", "#budget-image", "#luxury-image", game, "furniture") ; game.enableFurnitureSelectionButton() } } />
								<img id="budget-image" src={require('./images/upcycle.png')} onClick={ () => { selectSupplier("#budget-image", "#luxury-image", "#upcycle-image", game, "furniture") ; game.enableFurnitureSelectionButton()  } } />
								<img id="luxury-image" src={require('./images/upcycle.png')} onClick={ () => { selectSupplier("#luxury-image", "#budget-image", "#upcycle-image", game, "furniture") ; game.enableFurnitureSelectionButton()  }  } />

							</div>
							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" disabled={ game.furnitureSelectionButtonDisabled } onClick={ () => { game.updateTreeBranch(4) ; assessFurnitureSelection(game)}  }> Set </button>
							</div>
							
						</div>
					),
					gamePlay: (
						<div>
							
						</div>
					)
				},

				// Ingredients

				4: {
					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<p id="suppliers-choice-description-two">{suppliersChoice.descriptionThree}</p>

							<div class="supplier-choice-container-food">

								<p class="supplier-choice-title-main"> {suppliersChoice.foodTitle} </p>

								<p id="food-one-title"> {suppliersChoice.foodOne} </p>
								<p id="food-two-title">{ suppliersChoice.foodTwo} </p>
								<p id="food-three-title"> {suppliersChoice.foodThree} </p>
								<p id="food-four-title"> {suppliersChoice.foodFour} </p>
								<p id="food-five-title"> {suppliersChoice.foodFive} </p>
								

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
							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" disabled={ game.furnitureSelectionButtonDisabled } onClick={ () => { game.updateTreeBranch(5) ; assessFoodSupplierSelection(game, "tomato") ; assessFoodSupplierSelection(game, "cheese") ; assessFoodSupplierSelection(game, "pork") ; assessFoodSupplierSelection(game, "chicken") ; assessFoodSupplierSelection(game, "potato")}  }> Set </button>
							</div>
							
						</div>
					),
					gamePlay: (
						<div>
							
						</div>
					)


				},


				// =====================
				// MAZE GAME 
				// ======================

				5: {
					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
							
							<div class="icon-container maze-pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container maze-leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<div id="maze_container">
								<div id="instructions-panel">

									<p id="maze-instructions-title"> Try to get some funding and find investors </p>

									<p id="maze-instructions-move"> Use the arrow keys to move! </p>

									 <button id="trigger-maze-button" class="button-text" onClick={ () => { hideInstructionsPanel() ; triggerMaze(game)} } > Play Maze </button>

								</div>
								<div id="maze" data-steps="212">
									<div><div class="wall"></div><div class="door exit"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div class="nubbin"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="nubbin"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="nubbin"></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="nubbin"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div class="nubbin"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="nubbin"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="door"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="door"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="door"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="nubbin"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div class="wall sentinel"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall sentinel"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="nubbin"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="nubbin"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall sentinel"></div><div class="key"></div><div></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div class="nubbin"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall sentinel"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="nubbin"></div><div></div><div class="wall"></div><div></div><div class="nubbin wall"></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div class="nubbin wall"></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div class="nubbin"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div></div><div class="nubbin wall"></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div class="wall"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="wall"></div></div>
									<div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="door entrance"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div><div class="wall"></div></div>
								</div>
							</div>

						    <div id="maze_output">
							   <div id="maze_score"></div>
							   <div id="maze_message"></div>
  						    </div>



  											
								
							<button id="continue-from-maze-button" class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(6)}  }> Continue </button>
							
							
						</div>
					),
					gamePlay: (
						<div>
							
						</div>
					)

				},

				// GOOD LUCK SCREEN 

				6: {

					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
							
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

							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => game.updateTreeBranch(7) }> Let's Go </button>
							</div>
							
						</div>
					),
					gamePlay: (
						<div>
							
						</div>
					)

				},
				// TIME PASSING SCREEN
				7:{
					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>


							<p id="weekly-earnings" class="gameplay-text"> </p>


							<div id="position-identifier"></div>

							<div class="week-number-container">
								<p id="weekly-timer" class="gameplay-text"> Week 0 </p>
							</div>
							
							<img id="planet-pizza-animation" class="planet-pizza" src={require('./images/restaurant.png')} onLoad={ () => {timePassing(game, 1, 6) ; animatePeople()} }/>
							<img id="person-one" class="person" src={require('./images/person-one.png')} />
							<img id="person-two" class="person" src={require('./images/person-two.png')} />
							<img id="person-three" class="person" src={require('./images/person-one.png')} />
							<img id="person-four" class="person" src={require('./images/person-two.png')} />
							<img id="person-five" class="person" src={require('./images/person-one.png')} />
							<img id="person-six"  class="person"src={require('./images/person-two.png')} />
							<img id="person-seven" class="person" src={require('./images/person-one.png')} />
							<img id="person-eight" class="person" src={require('./images/person-two.png')} />
							<img id="person-nine" class="person" src={require('./images/person-one.png')} />
							<img id="person-ten" class="person" src={require('./images/person-two.png')} />
							<img id="person-eleven" class="person" src={require('./images/person-one.png')} />
							<img id="person-twelve" class="person" src={require('./images/person-two.png')} />
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" disabled={ game.timePassingButtonDisabled } onClick={ () => { game.updateLevel(2) ;  game.updateEpisode(0) ;  game.updateTreeBranch(0)  }}> Continue </button>
							</div>
							
						</div>
					),
					gamePlay: (
						<div>
							
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
							
							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.updateTreeBranch(1) ; disableTimePassingButton(game) } }> Continue </button>
							</div>
							
						</div>
					),
					gamePlay: (
						<div>
							
						</div>
					)

				},

				// THIS SCREEN WILL GO TO ANIMATION SCREEN BUT SHOULD CONTINUE TREE

				1: {

					
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
							
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
							
							
							<div id="potato-choice-container">

								<p id="potato-choice-organic"> { ohNoSupplierOutOfStock.potatoChoiceOne } </p>
								<p id="potato-choice-menu"> { ohNoSupplierOutOfStock.potatoChoiceTwo }</p>
								<p id="potato-choice-wholesaler"> { ohNoSupplierOutOfStock.potatoChoiceThree } </p>

								<img id="organic-choice" src={require('./images/spade.png')}/>
								<img id="menu-choice" src={require('./images/tractor.png')} />
								<img id="wholesale-choice" src={require('./images/wholesale.png')}/>

								<img id="button-organic" src={require('./images/darker-button.png')} onClick={ () => selectSupplier("#button-organic", "#button-menu", "#button-wholesale", game, "potato-choice")} />
								<img id="button-menu" src={require('./images/darker-button.png')} onClick={ () => selectSupplier("#button-menu", "#button-organic", "#button-wholesale", game, "potato-choice")} />
								<img id="button-wholesale" src={require('./images/darker-button.png')} onClick={ () => selectSupplier("#button-wholesale", "#button-organic", "#button-menu", game, "potato-choice")} />


							</div>	


							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" disabled={ game.potatoButtonDisabled } onClick={ () => { game.updateTreeBranch(assessPotatoDecision(game)) } }> Run With It </button>
							</div>
							
						</div>
					)
					


				},


				// ANIMATION SCREEN (SHOULD COME AT THE END OF THE LEVEL)

				2: {

					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>


							<p id="weekly-earnings" class="gameplay-text"> </p>


							<div id="position-identifier"></div>

							<div class="week-number-container">
								<p id="weekly-timer" class="gameplay-text"> </p>
							</div>
							
							<img id="planet-pizza-animation" class="planet-pizza" src={require('./images/restaurant.png')} onLoad={ () => {timePassing(game, 1, 12) ; animatePeople()} }/>
							<img id="person-one" class="person" src={require('./images/person-one.png')} />
							<img id="person-two" class="person" src={require('./images/person-two.png')} />
							<img id="person-three" class="person" src={require('./images/person-one.png')} />
							<img id="person-four" class="person" src={require('./images/person-two.png')} />
							<img id="person-five" class="person" src={require('./images/person-one.png')} />
							<img id="person-six"  class="person"src={require('./images/person-two.png')} />
							<img id="person-seven" class="person" src={require('./images/person-one.png')} />
							<img id="person-eight" class="person" src={require('./images/person-two.png')} />
							<img id="person-nine" class="person" src={require('./images/person-one.png')} />
							<img id="person-ten" class="person" src={require('./images/person-two.png')} />
							<img id="person-eleven" class="person" src={require('./images/person-one.png')} />
							<img id="person-twelve" class="person" src={require('./images/person-two.png')} />
								
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
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<p id="packaging-pros-cons" class="gameplay-text"> { packaging.packagingProsCons } </p>

							

							

							<div id="packaging-choice-container">

								<p id="packaging-question" class="gameplay-text"> { packaging.packagingQuestion } </p>

								<p id="packaging-hover" class="gameplay-text"> { packaging.packagingHover } </p>

								<p id="packaging-plastic-choice" class="gameplay-text"> { packaging.packagingChoiceOne } </p>
								<p id="packaging-bio-choice" class="gameplay-text"> { packaging.packagingChoiceTwo } </p>
								<p id="packaging-compostable-choice" class="gameplay-text"> { packaging.packagingChoiceThree } </p>


								<img id="packaging-plastic-image" src={require('./images/tractor.png')} onClick={ ()=> selectSupplier("#packaging-plastic-image", "#packaging-bio-image", "#packaging-compostable-image", game, "packaging")} />
								<img id="packaging-bio-image" src={require('./images/tractor.png')} onClick={ ()=> selectSupplier("#packaging-bio-image", "#packaging-plastic-image", "#packaging-compostable-image", game, "packaging")} />
								<img id="packaging-compostable-image" src={require('./images/tractor.png')}  onClick={ ()=> selectSupplier("#packaging-compostable-image", "#packaging-bio-image", "#packaging-plastic-image", game, "packaging")} />


							</div>
							
							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" disabled={ game.packagingDecisionButtonDisabled } onClick={ () => { game.updateTreeBranch(assessPackagingDecision(game)) } }> Decision Made </button>
							</div>
							
						</div>
					),
					gamePlay: (
						<div>
							
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
							
							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.updateTreeBranch(3) ; increaseMealPrice(game) } } > Yes Absolutely </button>
								<button class="update-tree-button button-text"  onClick={ () => game.updateTreeBranch(3) }> No ... Too Risky </button>
							</div>
							
						</div>
					),
					gamePlay: (
						<div>
							
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
							
							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.updateEpisode(1) ; game.updateTreeBranch(0) }} > Amazing </button>
							</div>
							
						</div>
					),
					gamePlay: (
						<div>
							
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
							
							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.updateEpisode(1) ;  game.updateTreeBranch(0) ;  updatePopularity(game, (game.popularityFactor + 0.2))} }> Okay ... </button>
								<button class="update-tree-button button-text"  onClick={ () => { game.updateEpisode(1) ; game.updateTreeBranch(0) } }> No Thanks </button>
							</div>
							
						</div>
					),
					gamePlay: (
						<div>
							
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
							
							
							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.updateTreeBranch(1) ; offerDiscount(game) } }> Yes </button>
								<button class="update-tree-button button-text"  onClick={ () => { game.updateTreeBranch(2) } }> Nah </button>
							</div>
							
						</div>
					),
					gamePlay: (
						<div>
							
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
							
							
							
							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.updateEpisode(2) ;  game.updateTreeBranch(0) } }> Continue </button>
							</div>
							
						</div>
					),
					gamePlay: (
						<div>
							
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
							
							
							
							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.updateEpisode(2) ; game.updateTreeBranch(0) } }> Continue </button>
							</div>
							
						</div>
					),
					gamePlay: (
						<div>
							
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
							
							
							
							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.updateTreeBranch(1) } }> Hmmm ... </button>
							</div>
							
						</div>
					),
					gamePlay: (
						<div>
							
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


								<img id="cutlery-plastic-image" src={require('./images/tractor.png')} onClick={ ()=> selectSupplier("#cutlery-plastic-image", "#cutlery-wooden-image", "#cutlery-none-image", game, "cutlery")} />
								<img id="cutlery-wooden-image" src={require('./images/tractor.png')} onClick={ ()=> selectSupplier("#cutlery-wooden-image", "#cutlery-plastic-image", "#cutlery-none-image", game, "cutlery")} />
								<img id="cutlery-none-image" src={require('./images/tractor.png')}  onClick={ ()=> selectSupplier("#cutlery-none-image", "#cutlery-wooden-image", "#cutlery-plastic-image", game, "cutlery")} />

								<p id="packaging-hover" class="gameplay-text"> { packaging.packagingHover } </p>

							</div>
							
							
							
							
							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" disabled={game.cutleryDisabledButton} onClick={ () => { game.updateTreeBranch(assessCutleryDecision(game)) } }> Done </button>
							</div>
							
						</div>
					),
					gamePlay: (
						<div>
							
						</div>
					)

				},

				2: {

					id: "L1E0T0",
					main: (
						<div class="level-one-background grid-container-4x6" >
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')}/>
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>

							<p id="cutlery-last" > { cutlery.cutleryLast } </p>
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text"  onClick={ () => { game.updateTreeBranch(3) } }> Launch </button>
							</div>
							
						</div>
					),
					gamePlay: (
						<div>
							
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
							
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>


							<p id="weekly-earnings" class="gameplay-text"> </p>


							<div id="position-identifier"></div>

							<div class="week-number-container">
								<p id="weekly-timer" class="gameplay-text"> Week 0 </p>
							</div>
							
							<img id="planet-pizza-animation" class="planet-pizza" src={require('./images/restaurant.png')} onLoad={ () => {timePassing(game, 1, 18) ; animatePeople()} }/>
							<img id="person-one" src={require('./images/person-one.png')} />
							<img id="person-two" src={require('./images/person-two.png')} />
							<img id="person-three" src={require('./images/person-one.png')} />
							<img id="person-four" src={require('./images/person-two.png')} />
							<img id="person-five" src={require('./images/person-one.png')} />
							<img id="person-six" src={require('./images/person-two.png')} />
							<img id="person-seven" src={require('./images/person-one.png')} />
							<img id="person-eight" src={require('./images/person-two.png')} />
							<img id="person-nine" src={require('./images/person-one.png')} />
							<img id="person-ten" src={require('./images/person-two.png')} />
							<img id="person-eleven" src={require('./images/person-one.png')} />
							<img id="person-twelve" src={require('./images/person-two.png')} />
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" disabled={ game.timePassingButtonDisabled } onClick={ () => { game.updateLevel(4) ;  game.updateEpisode(0) ;  game.updateTreeBranch(0)  }}> Continue </button>
							</div>
							
						</div>
					),
					gamePlay: (
						<div>
							
						</div>
					)

				}



			}

		},	


		//====================
		// LEVEL -- WASTE
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
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>
							<p class="gameplay-text"> {levelOneIntro.descriptionOne} </p>
							
								
							<div class="flex-container gameplay-button-container">
								<button class="update-tree-button button-text" onClick={ () => game.updateTreeBranch(1) }> Great! </button>
							</div>
							
						</div>
					),
					gamePlay: (
						<div>
							
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
							
						</div>
					),
					gamePlay: (
						<div>
							
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
							<div class="icon-container pound-coin-icon-container">
								<img class="pound-coin-icon-image" src={require('./images/pound-coin.png')} />
								<p class="icon-text"> {game.money} </p>
							</div>
							<div class="icon-container leaf-icon-container">
								<img class="leaf-icon-image" src={require('./images/leaf.png')} />
								<p class="plain-text icon-text"> {game.sePoints} </p>
							</div>
							
							
							<p class="gameplay-text"> {l0E0T1.descriptionOne} </p>
							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => game.updateTreeBranch(3) }> Close Up </button>
								<button class="update-tree-button button-text" onClick={ () => {game.updateTreeBranch(11) ; game.moneyUp(game.money + 600, "up") } }> Stay Open </button>
							</div>
						
						</div>
					),
					gamePlay: (
						<div>
							
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
						
						</div>
					),
					gamePlay: (
						<div>
							
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
						
						</div>
					),
					gamePlay: (
						<div>
							
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
						
						</div>
					),
					gamePlay: (
						<div>
							
						</div>
					)
				},
				6: {
					id: "L1E0T6",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
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

							<p id="good-luck" class="gameplay-text align-center"> {beforeFestival.descriptionOne} </p>
							

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => game.updateTreeBranch(game.returnTreeFromFoodOrder()) }> Let's Do This </button>
							</div>
						
						</div>
					),
					gamePlay: (
						<div>
							
						</div>
					)
				},
				7: {
					id: "L1E0T7",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
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
							<p id="surplus-one" class="gameplay-text"> { festivalResults.surplus + " " + festivalResults.surplusWaste } </p>

							

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(10) ; game.moneyUp((game.money + ((game.festivalFoodOrder.report.profit))), "up")} }> Okay </button>
							</div>
						
						</div>
					),
					gamePlay: (
						<div>
							
						</div>
					)
				},
				8: {
					id: "L1E0T8",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
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
							<p id="home-early-one" class="gameplay-text"> {festivalResults.homeEarly + " " + festivalResults.homeEarlyTwo} </p>
							
							

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(10) ; game.moneyUp((game.money + ((game.festivalFoodOrder.report.profit))), "up")} }> Okay </button>
							</div>
						
						</div>
					),
					gamePlay: (
						<div>
							
						</div>
					)
				}, 
				9: {
					id: "L1E0T9",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
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
						
						</div>
					),
					gamePlay: (
						<div>
							
						</div>
					)
				},
				10: {
					id: "L1E0T10",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
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

							<div class="festival-report-container grid-container-4x6">
								<p id="festival-report-title" class="">  <span id="festival-report-title-span"> {festivalReport.title} </span>  </p>
								<p id="festival-report-time" class="gameplay-text"> {festivalReport.time} </p>
								<p id="festival-report-pizzas" class="gameplay-text"> {festivalReport.pizzas} </p>
								<p id="festival-report-waste" class="gameplay-text"> {festivalReport.waste} </p>
								<p id="festival-report-profit" class="gameplay-text"> {festivalReport.profit} </p>
								<p id="festival-report-time-number" class="gameplay-text align-center"> {game.festivalFoodOrder.report.time} </p>
								<p id="festival-report-pizzas-number" class="gameplay-text align-center"> {game.festivalFoodOrder.report.pizzas} </p>
								<p id="festival-report-waste-number" class="gameplay-text align-center"> {game.festivalFoodOrder.report.waste  + " bin bags"} </p>
								<p id="festival-report-profit-number" class="gameplay-text align-center"> {"£" + game.festivalFoodOrder.report.profit} </p>
								<p id="get-rid-of-waste"> { festivalReport.getRidOfWaste } </p>
							</div>

							

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(0); game.updateEpisode(1) } }> Sure </button>
							</div>
						
						</div>
					),
					gamePlay: (
						<div>
							
						</div>
					)
				},
				11: {
					id: "L1E0T11",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
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
							
							<p class="gameplay-text align-center"> {l0E0T3.descriptionTwo} </p>
							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => game.updateTreeBranch(12) }> Nice </button>
							</div>
						
						</div>
					),
					gamePlay: (
						<div>
							
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
						
						</div>
					),
					gamePlay: (
						<div>
							
						</div>
					)
				},
				13: {
					id: "L1E0T13",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
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
						
						</div>
					),
					gamePlay: (
						<div>
							
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
						
						</div>
					),
					gamePlay: (
						<div>
							
						</div>
					)
				},

				1: {
					id: "L1E1T1",
					main: (
						<div class="level-one-background grid-container-4x6">
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
							
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
								<img src="https://i.ibb.co/ZGZkS2h/pizzabox.png" id="drag-one-recycling" class="trash-item-image first-drag" draggable='true' onDragStart={(event) => { onDragStart(event); countdown(game) }}/>
								<img src="https://i.ibb.co/Xz70Tsx/pizza-crust.png"  id="drag-two-food" class="trash-item-image hide-drag-image" draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img src="https://i.ibb.co/KX9RZCF/can.png" id="drag-three-recycling" class="trash-item-image hide-drag-image" draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img src="https://i.ibb.co/Xxx0DmG/rocket.png" id="drag-four-food" class="trash-item-image hide-drag-image" draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img src="https://i.ibb.co/r5h4WGd/water-bottle.png" id="drag-five-recycling" class="trash-item-image hide-drag-image" draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img src="https://i.ibb.co/258WBWz/tomato.png" id="drag-six-food" class="trash-item-image hide-drag-image" draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img src="https://i.ibb.co/rvq7x0V/tomato-tin.png"  id="drag-seven-recycling" class="trash-item-image hide-drag-image" draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img src="https://i.ibb.co/Xz70Tsx/pizza-crust.png" id="drag-eight-food" class="trash-item-image hide-drag-image" draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img src="https://i.ibb.co/HgvKmJp/basil.png" id="drag-nine-food" class="trash-item-image hide-drag-image" draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img src="https://i.ibb.co/ZGZkS2h/pizzabox.png"  id="drag-ten-recycling" class="trash-item-image hide-drag-image" draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img src="https://i.ibb.co/KX9RZCF/can.png" id="drag-eleven-recycling" class="trash-item-image hide-drag-image" draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img src="https://i.ibb.co/Xz70Tsx/pizza-crust.png"  id="drag-twelve-food" class="trash-item-image hide-drag-image" draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img src="https://i.ibb.co/Xxx0DmG/rocket.png" id="drag-thirteen-food" class="trash-item-image hide-drag-image" draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img src="https://i.ibb.co/258WBWz/cheese.png" id="drag-fourteen-food" class="trash-item-image hide-drag-image" draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img src="https://i.ibb.co/rvq7x0V/tomato-tin.png"  id="drag-fifteen-recycling" class="trash-item-image hide-drag-image" draggable='true' onDragStart={(event) => onDragStart(event)}/>
								<img src="https://i.ibb.co/258WBWz/tomato.png" id="drag-sixteen-food" class="trash-item-image hide-drag-image" draggable='true' onDragStart={(event) => onDragStart(event)}/>
								
							</div>

							<img id="cross-image" src={require('./images/cross.png')} />
							<img id="tick-image" src={require('./images/tick.png')} />

							<audio id="trash-noise" preload='auto'>
								 <source src={require('./audio/trash.wav')} type="audio/wav"/>
							</audio>

							<audio id="trash-noise" preload='auto'>
								 <source src={require('./audio/trash.wav')} type="audio/wav"/>
							</audio>

							<audio id="battle-boss" preload='auto'>
								 <source src={require('./audio/battle-boss.mp3')} type="audio/mp3"/>
							</audio>

							<div class="timer-container flex-container">
								<p id="drag-drop-timer" class="gameplay-text"> :20 </p> 
							</div>

							<div class="trash-container">
								
								 <img src="https://i.ibb.co/MC0Nn5J/recycling-bin.png" id="drop-bin-one" onDragOver={(event) => onDragOver(event)} onDrop={(event) => { onDrop(event, game) ; displayNextImage()}}/>
							
								<img src="https://i.ibb.co/c179QjN/plastic-bin.png" id="drop-bin-two" onDragOver={(event) => onDragOver(event)} onDrop={(event) => { onDrop(event, game) ; displayNextImage()}}/>
							
								<img src="https://i.ibb.co/dMs2Fyb/food-bin.png" id="drop-bin-three"  onDragOver={(event) => onDragOver(event)} onDrop={(event) => { onDrop(event, game) ; displayNextImage()}}/>
								
							</div>
							


							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => game.updateTreeBranch(game.returnTreeFromTrashResult()) }> Finish </button>
							</div>
						
						</div>
					),
					gamePlay: (
						<div>
							
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
								<p id="incorrect-waste-text" class="gameplay-text">Incorrectly Disposed Waste: </p>
								<p id="correct-waste-number" class="gameplay-text"> {game.dragAndDropTrash.result.correct} </p>
								<p id="incorrect-waste-number" class="gameplay-text"> {game.dragAndDropTrash.result.incorrect} </p>
							</div>
							

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(0) ;  game.updateEpisode(2)} }> Continue </button>
							</div>
						
						</div>
					),
					gamePlay: (
						<div>
							
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
								<p id="incorrect-waste-text" class="gameplay-text">Incorrectly Disposed Waste: </p>
								<p id="correct-waste-number" class="gameplay-text"> {game.dragAndDropTrash.result.correct} </p>
								<p id="incorrect-waste-number" class="gameplay-text"> {game.dragAndDropTrash.result.incorrect} </p>
							</div>
							

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(0) ;  game.updateEpisode(2)}  }> Continue </button>
							</div>
						
						</div>
					),
					gamePlay: (
						<div>
							
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
								<p id="incorrect-waste-text" class="gameplay-text">Incorrectly Disposed Waste: </p>
								<p id="correct-waste-number" class="gameplay-text"> {game.dragAndDropTrash.result.correct} </p>
								<p id="incorrect-waste-number" class="gameplay-text"> {game.dragAndDropTrash.result.incorrect} </p>
							</div>
							
							<div>
							</div>
							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => game.updateTreeBranch(6) }> Bargain </button>
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(0) ;  game.updateEpisode(2) ; game.moneyUp((game.money - 250), "down")}  }> Pay & Continue </button>
							</div>
						
						</div>
					),
					gamePlay: (
						<div>
							
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
								<p id="incorrect-waste-text" class="gameplay-text">Incorrectly Disposed Waste: </p>
								<p id="correct-waste-number" class="gameplay-text"> {game.dragAndDropTrash.result.correct} </p>
								<p id="incorrect-waste-number" class="gameplay-text"> {game.dragAndDropTrash.result.incorrect} </p>
							</div>
							

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => game.updateTreeBranch(6) }> Bargain </button>
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(0) ;  game.updateEpisode(2) ; game.moneyUp((game.money - 500), "down")} }> Pay & Continue </button>
							</div>
						
						</div>
					),
					gamePlay: (
						<div>
							
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
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(0) ;  game.updateEpisode(2) ; game.moneyUp((game.money - 1000), "down")} }> Pay & Continue </button>
							</div>
						
						</div>
					),
					gamePlay: (
						<div>
							
						</div>
					)
				}
			}
			
		}

		// LEVEL 2
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

	}


	return result;
}




