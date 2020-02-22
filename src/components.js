//========================
// This file contains components to be renderered 
// =======================

import React from 'react';
import './index.css';
import { characters, gameTitle, howToPlay, remember, levelOneIntro, l0E0T1, l0E0T3, l0E0T4, reviewOrder, beforeFestival, festivalResults, festivalReport } from './storylines.js';
import { arraysMatch, hoverHeadTextAppear, hoverHeadTextDisappear, addBorderOnClick, confirmOrder } from './utils.js';


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
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
						</div>
						),
					gamePlay: (
							<div class="plain-background bottom-button flex-columns-space-between">
								<div class="flex-container">
									<button id="opening-play-button" class="update-tree-button button-text" onClick={() => game.updateTreeBranch(1) }> Play!</button>
								</div>
								<div class="flex-container bottom">
									<img id="town-houses" src={require('./images/town-houses.png')} />
								</div>
							</div>
						)
				},
				1: {
					id: "L0E0T1",
					main: (
						<div class="plain-background title-screen grid-container-4x6">
							<h1 id="instructions-title" class="title align-center"> {howToPlay.title} </h1>
							<p id="pick-a-biz-desc" class="plain-text align-center"> <span class="bold"> {howToPlay.instructionsOne} </span> </p>
							
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
						</div>
					),
					gamePlay: (
						<div class="plain-background bottom-button flex-columns-space-between">
							<div class="flex-container">
								<button class="update-tree-button button-text" onClick={() => game.updateTreeBranch(2) }>Okay</button>
							</div>
							<div class="flex-container bottom">
								<img id="town-houses" src={require('./images/town-houses.png')} />
							</div>
						</div>
					)
				},
				2: {
					id: "L0E0T2",
					main: (
						<div class="plain-background title-screen grid-container-4x6">
							<h1 id="instructions-title" class="title align-center"> {howToPlay.title} </h1>
							<p id="to-win-desc" class="plain-text align-center"> <span class="bold"> {howToPlay.instructionsThree} </span> </p>
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
						</div>
						),
					gamePlay: (
						<div class="plain-background bottom-button flex-columns-space-between">
							<div class="flex-container">
								<button class="update-tree-button button-text" onClick={() => game.updateTreeBranch(3) }>Okay</button>
							</div>
							<div class="flex-container bottom">
								<img id="town-houses" src={require('./images/town-houses.png')} />
							</div>
						</div>
						)
				},
				3: {
					id: "L0E0T3",
					main: (
						<div class="plain-background title-screen grid-container-4x6">
							<h1 id="instructions-title" class="title align-center"> {howToPlay.title} </h1>
							<p id="money-icon-text" class="plain-text"> {howToPlay.instructionsTwo[0]} </p>
							<p id="se-icon-text" class="plain-text"> {howToPlay.instructionsTwo[1]} </p>
							<img id="pound-coin-instructions-icon" src={require('./images/pound-coin.png')} />
							<img id="leaf-instructions-icon" src={require('./images/leaf.png')} />
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
						</div>
						),
					gamePlay: (
						<div class="plain-background bottom-button flex-columns-space-between">
							<div class="flex-container">
								<button class="update-tree-button button-text" onClick={() => game.updateTreeBranch(4) }>Ready</button>
							</div>
							<div class="flex-container bottom">
								<img id="town-houses" src={require('./images/town-houses.png')} />
							</div>
						</div>
						)
				},

				4: {
					id: "L0E0T4",
					main: (
						<div class="plain-background title-screen grid-container-4x6">
							<h1 id="choose-a-character-title" class="title align-center"> Choose a Business Owner </h1>
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
							<div class="character-container">
								<div onClick={() => addBorderOnClick(".character-one-container", "#set-character-button")} class="character-one-container">
									<p class="character-name plain-text bold"> {characters[0].name} </p>
									<img id="joe-head" class="character-head" onMouseOver={() => hoverHeadTextAppear("#joe-description")} onMouseOut={() => hoverHeadTextDisappear("#joe-description")} src={require('./images/joe-head.png')}/>
								</div>
								<div class="character-description-container">
										<p id="joe-description" class="character-description"> {characters[0].description} </p>
								</div>
							</div>
						</div>
					),
					// Need to disable this button
					gamePlay: (
						<div class="plain-background bottom-button flex-columns-space-between">
							<div class="flex-container">

								<button id="set-character-button" class="update-tree-button button-text" onClick={() => { game.updateTreeBranch(5) }  }> Set </button>
							</div>
							<div class="flex-container bottom">
								<img id="town-houses" src={require('./images/town-houses.png')} />
							</div>
						</div>
					)

				},
				5: {
					id: "L0E0T5",
					main: (
						<div class="plain-background title-screen grid-container-4x6">
							<h1 id="remember-title" class="title align-center"> {remember.title} </h1>
							<p id="remember-description-one" class="plain-text"> {remember.descriptionOne}</p>
							<img id="tree-side" src={require('./images/just-tree-side.png')} />
							<img id="tree-side-inverse" src={require('./images/just-tree-inverse-side.png')} />
						</div>
						),
					gamePlay: (
						<div class="plain-background bottom-button flex-columns-space-between">
							<div class="flex-container">
								<button class="update-tree-button button-text" onClick={() => { game.updateLevel(1) ; game.updateEpisode(0) ;  game.updateTreeBranch(0) }  }> Go! </button>
							</div>
							<div class="flex-container bottom">
								<img id="town-houses" src={require('./images/town-houses.png')} />
							</div>
						</div>
						)
				}
			},
		},
		//====================
		// LEVEL ONE -- WASTE
		//====================	
		1: {
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
								<button class="update-tree-button button-text" onClick={ () => {game.updateTreeBranch(11) ; game.moneyUp(game.money + 600) } }> Stay Open </button>
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
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(5) ; game.confirmOrder() } }> Place Order </button>
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
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(6) ; game.moneyUp((game.money - ((game.festivalFoodOrder.cheese * 50) + (game.festivalFoodOrder.tomato * 7) + (game.festivalFoodOrder.basil * 50))))} }> Confirm </button>
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
							<p id="surplus-one" class="gameplay-text"> {festivalResults.surplus} </p>
							<p id="surplus-waste" class="gameplay-text"> {festivalResults.surplusWaste} </p>

							

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(10) ; game.moneyUp((game.money + ((game.festivalFoodOrder.report.profit))))} }> Okay </button>
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
							<p id="home-early-one" class="gameplay-text"> {festivalResults.homeEarly} </p>
							<p id="home-early-two" class="gameplay-text"> {festivalResults.homeEarlyTwo} </p>
							

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(10) ; game.moneyUp((game.money + ((game.festivalFoodOrder.report.profit))))} }> Okay </button>
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
							<p id="perfect-one" class="gameplay-text"> {festivalResults.perfect} </p>
							<p id="perfect-two" class="gameplay-text"> {festivalResults.perfectProfit} </p>
							

							<div class="flex-container gameplay-button-container gameplay-button-container-flex">
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(10) ; game.moneyUp((game.money + ((game.festivalFoodOrder.report.profit)))) } }> Okay </button>
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
								<p id="festival-report-title" class=""> {festivalReport.title} </p>
								<p id="festival-report-time" class="gameplay-text"> {festivalReport.time} </p>
								<p id="festival-report-pizzas" class="gameplay-text"> {festivalReport.pizzas} </p>
								<p id="festival-report-waste" class="gameplay-text"> {festivalReport.waste} </p>
								<p id="festival-report-profit" class="gameplay-text"> {festivalReport.profit} </p>
								<p id="festival-report-time-number" class="gameplay-text align-center"> {game.festivalFoodOrder.report.time} </p>
								<p id="festival-report-pizzas-number" class="gameplay-text align-center"> {game.festivalFoodOrder.report.pizzas} </p>
								<p id="festival-report-waste-number" class="gameplay-text align-center"> {game.festivalFoodOrder.report.waste  + " bin bags"} </p>
								<p id="festival-report-profit-number" class="gameplay-text align-center"> {"£" + game.festivalFoodOrder.report.profit} </p>
							</div>

							<p id="get-rid-of-waste"> { festivalReport.getRidOfWaste } </p>

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
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(13) ; game.confirmOrder() } }> Place Order </button>
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
								<button class="update-tree-button button-text" onClick={ () => { game.updateTreeBranch(6) ; game.moneyUp((game.money - ((game.festivalFoodOrder.cheese * 50) + (game.festivalFoodOrder.tomato * 7) + (game.festivalFoodOrder.basil * 50))))} }> Confirm </button>
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

	else if (level === 1) {

		Object.keys(componentsObjects[level]).forEach(function(key){

			if (episode.toString() === key.toString()) {

				result = componentsObjects[level][key][tree]
				
			}
		})

	}

	return result;
}




