console.log("Welcome to Stuart's Game")


// DOM 
const gamePlay = document.querySelector('.game-play')
const buttonBox = document.querySelector(".button-box")
const farmDecision = document.querySelector("#farm-decision")
const supplierDecision = document.querySelector("#supplier-decision")
const instruction = document.querySelector('.instruction')

// Hide Display Helper Function
const hideElement = function(element) {
	element.style.display = "none"
}

// Create new button Helper Function
const newDecisionButton = function(text, priceText, coin, id) {
	const container = document.createElement("div")
	container.className = "decision"
	container.id = id
	const mainText = document.createElement("p")
	mainText.className = "main-text"
	mainText.innerHTML = text
	const price = document.createElement("p")
	price.className = "price"
	price.innerHTML = priceText

	// If coin == true
	if (coin === true) {
		const coin = document.createElement("img")
		coin.src = "coin.svg"
		coin.className = "coin"
		container.appendChild(coin)
	}

	container.appendChild(mainText)
	container.appendChild(price)
	buttonBox.appendChild(container)

}

const createD3Chart = function(data) {
	d3.select(".chart")
		.selectAll("div")
		.data()
		.enter().append("div")
		.style("width", function(d) { return d * 10 + "px"; })
}


const createChart = function(scoreArray, nCoins) {
	const chart = document.createElement("div")
	chart.className = "chart"
	const barOne = document.createElement("div")
	barOne.style.width = scoreArray[0] + "px"
	barOne.innerHTML = "0 Coins would give you ... " + scoreArray[0] + " profit"
	const barTwo = document.createElement("div")
	barTwo.style.width = scoreArray[1] + "px"
	barTwo.innerHTML = "You got " + nCoins + " coins, making " + scoreArray[1] + " profit"
	const barThree = document.createElement("div")
	barThree.style.width = scoreArray[2] + "px"
	barThree.innerHTML = "10 coins (max) would give you " + scoreArray[2] + " profit"
	chart.appendChild(barOne)
	chart.appendChild(barTwo)
	chart.appendChild(barThree)

	gamePlay.appendChild(chart)
}


farmDecision.addEventListener('click', function() {
	console.log("You decided farm beans")
	// Change Instructions 
	instruction.innerHTML = "Great so you decided to buy beans from the farm in Dalat! It's Monday morning and before opening the van you have to visit the cash and carry to buy cups. The store has a huge selection of non-biodegradable cups and a few bio-degradable cups, but there are only a few cups that fit your drink sizes. Do you want to buy bio-degradable cups or non-biodegradable cups?"

	// Hide old buttons
	hideElement(supplierDecision)
	hideElement(farmDecision)

	// Create new buttons
	newDecisionButton("Bio-degradable Cups", "50p", true, "bio")
	newDecisionButton("Non Bio-degradable Cups", "20p", false, "non-bio")

	// Select new Buttons
	const bioButton = document.querySelector('#bio')
	const nonBioButton = document.querySelector('#non-bio')

	// BIO BUTTON
	bioButton.addEventListener("click", function() {
		// Change Instructions
		instruction.innerHTML = "You choose Bio-degradable cups. Nice. Okay time to start selling coffee! Business is going well until about 3pm when you are running low on milk. Do you call your local milk supplier who delivers in glass bottles or head to the local supermarket to stock up?"

		// Hide Old Buttons
		hideElement(bioButton)
		hideElement(nonBioButton)

		// Create new Buttons
		newDecisionButton("Local Supplier", "£1.00 a pint", true, "local-milk")
		newDecisionButton("Supermarket", "40p a pint", false, "supermarket-milk")

		// Select new buttons
		const localMilk = document.querySelector('#local-milk')
		const supermarketMilk = document.querySelector('#supermarket-milk')

		// SUPERMARKET MILK 
		supermarketMilk.addEventListener('click', function() {
			instruction.innerHTML = "It's almost the end of the day and you decide to wait until you close to head to the supermarket. Just before you do a regular customer comes by and wants to buy some food. You don't have any traybakes left. She mentions a friend who makes homemade brownies that come wrapped in paper bags. You know that you can get them much cheaper from the cash and carry."

			// Hide Old Buttons
			hideElement(localMilk)
			hideElement(supermarketMilk)

			// Create new Buttons
			newDecisionButton("Sounds Good", "£2.50 a brownie", true, "homemade-brownie")
			newDecisionButton("Hmm... No Thanks", "£1.00 a brownie", false, "shop-bought-brownie")

			// Select new Buttons 
			const homemadeBrownie = document.querySelector('#homemade-brownie')
			const shopBoughtBrownie = document.querySelector('#shop-bought-brownie')

			homemadeBrownie.addEventListener('click', function() {
					instruction.innerHTML = "Great, you hope that these homemade brownies will bring in some new customers. You head home after a good days work."

					// Hide Old Buttons
					hideElement(homemadeBrownie)
					hideElement(shopBoughtBrownie)

					// Create new Buttons 
					newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
					newDecisionButton("Finish Game. Read The Article", " ", false, "article")

					// Select new Buttons 
					const dailyReport = document.querySelector('#daily-report')
					const article = document.querySelector('#article')

					dailyReport.addEventListener('click', function() {
						instruction.innerHTML = "Here's how you did today"

						// Hide Old Buttons 
						hideElement(dailyReport)
						hideElement(article)
						// Create graph 
						createChart([500, 300, 100], 5)
					})			
			})

		shopBoughtBrownie.addEventListener('click', function() {
			instruction.innerHTML = "Yeah those brownies are just too expensive for the students who come by regularly! You can pick some traybakes up from the cash and carry in the morning. You head home after a good days work."

				// Hide Old Buttons
				hideElement(homemadeBrownie)
				hideElement(shopBoughtBrownie)

				// Create new Buttons 
				newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
				newDecisionButton("Finish Game. Read The Article", " ", false, "article")

				// Select new Buttons 
				const dailyReport = document.querySelector('#daily-report')
				const article = document.querySelector('#article')

				dailyReport.addEventListener('click', function() {
					instruction.innerHTML = "Here's how you did today"

					// Hide Old Buttons 
					hideElement(dailyReport)
					hideElement(article)
					// Create graph 
					createChart([500, 300, 100], 5)
				})
			})
		})

		// LOCAL MILK BUTTON 
		localMilk.addEventListener('click', function() {
			instruction.innerHTML = "The milk lady arrives just as your closing up for the day. You chat for a while and put the milk in the fridge for tomorrow. This should last you til the end of the week! Give her a free coffee?"

			// Hide Old Buttons
			hideElement(localMilk)
			hideElement(supermarketMilk)

			// Create new Buttons
			newDecisionButton("Of Course!", "- £3.50", false, "free-coffee")
			newDecisionButton("No Way!", "£0.00", false, "no-free-coffee")

			// Select new Buttons 
			const freeCoffee = document.querySelector('#free-coffee')
			const noFreeCoffee = document.querySelector('#no-free-coffee')

			// NO FREE COFFEE 
			noFreeCoffee.addEventListener('click', function() {
				instruction.innerHTML = "You say goodbye to the milk lady and begin to pack up for the day. Just before you do a regular customer comes by and wants to buy some food. You don't have any traybakes left. She mentions a friend who makes homemade brownies that come wrapped in paper bags. You know that you can get them much cheaper from the cash and carry."

				// Hide Old Buttons
				hideElement(freeCoffee)
				hideElement(noFreeCoffee)

				// Create new Buttons
				newDecisionButton("Sounds Good", "£2.50 a brownie", true, "homemade-brownie")
				newDecisionButton("Hmm... No Thanks", "£1.00 a brownie", false, "shop-bought-brownie")

				// Select new Buttons 
				const homemadeBrownie = document.querySelector('#homemade-brownie')
				const shopBoughtBrownie = document.querySelector('#shop-bought-brownie')

				// HOMEMADE BROWNIE
				homemadeBrownie.addEventListener('click', function() {
					instruction.innerHTML = "Great, you hope that these homemade brownies will bring in some new customers. You head home after a good days work."

					// Hide Old Buttons
					hideElement(homemadeBrownie)
					hideElement(shopBoughtBrownie)

					// Create new Buttons 
					newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
					newDecisionButton("Finish Game. Read The Article", " ", false, "article")

					// Select new Buttons 
					const dailyReport = document.querySelector('#daily-report')
					const article = document.querySelector('#article')

					dailyReport.addEventListener("click", function() {
						instruction.innerHTML = "Here's how you did today"

						// Hide Old Buttons 
						hideElement(dailyReport)
						hideElement(article)
						// Create graph 
						createChart([500, 300, 100], 5)
					})
				})

				// SHOP BOUGHT BROWNIE
				shopBoughtBrownie.addEventListener('click', function() {
					instruction.innerHTML = "Yeah those brownies are just too expensive for the students who come by regularly! You can pick some traybakes up from the cash and carry in the morning. You head home after a good days work."

					// Hide Old Buttons
					hideElement(homemadeBrownie)
					hideElement(shopBoughtBrownie)

					// Create new Buttons 
					newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
					newDecisionButton("Finish Game. Read The Article", " ", false, "article")

					// Select new Buttons 
					const dailyReport = document.querySelector('#daily-report')
					const article = document.querySelector('#article')

					dailyReport.addEventListener('click', function() {
						instruction.innerHTML = "Here's how you did today"

						// Hide Old Buttons 
						hideElement(dailyReport)
						hideElement(article)
						// Create graph 
						createChart([500, 300, 100], 5)
					})
				})
			})

			// FREE COFFEE BUTTON 
			freeCoffee.addEventListener("click", function() {
				instruction.innerHTML = "You chat for a while longer and mention that your running low on your traybakes. The milk lady suggests that you buy some from her friend. She makes homemade brownies that are wrapped in paper bags. You know that you can get them much cheaper from the cash and carry."

				// Hide Old Buttons
				hideElement(freeCoffee)
				hideElement(noFreeCoffee)

				// Create new Buttons 
				newDecisionButton("Sounds Good", "£2.50 a brownie", true, "homemade-brownie")
				newDecisionButton("Hmm... No Thanks", "£1.00 a brownie", false, "shop-bought-brownie")

				// Select new Buttons 
				const homemadeBrownie = document.querySelector('#homemade-brownie')
				const shopBoughtBrownie = document.querySelector('#shop-bought-brownie')

				homemadeBrownie.addEventListener("click", function() {
					instruction.innerHTML = "Great, you hope that these homemade brownies will bring in some new customers. You head home after a good days work."

					// Hide Old Buttons
					hideElement(homemadeBrownie)
					hideElement(shopBoughtBrownie)

					// Create new Buttons 
					newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
					newDecisionButton("Finish Game. Read The Article", " ", false, "article")

					// Select new Buttons 
					const dailyReport = document.querySelector('#daily-report')
					const article = document.querySelector('#article')

					dailyReport.addEventListener("click", function() {
						instruction.innerHTML = "Here's how you did today"

						// Hide Old Buttons 
						hideElement(dailyReport)
						hideElement(article)
						// Create graph 
						createChart([500, 300, 100], 5)
					})


				})
				// SHOP BOUGHT BROWNIE
				shopBoughtBrownie.addEventListener('click', function() {
					instruction.innerHTML = "Yeah those brownies are just too expensive for the students who come by regularly! You can pick some traybakes up from the cash and carry in the morning. You head home after a good days work."

					// Hide Old Buttons
					hideElement(homemadeBrownie)
					hideElement(shopBoughtBrownie)

					// Create new Buttons 
					newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
					newDecisionButton("Finish Game. Read The Article", " ", false, "article")

					// Select new Buttons 
					const dailyReport = document.querySelector('#daily-report')
					const article = document.querySelector('#article')

					dailyReport.addEventListener('click', function() {
						instruction.innerHTML = "Here's how you did today"

						// Hide Old Buttons 
						hideElement(dailyReport)
						hideElement(article)
						// Create graph 
						createChart([500, 300, 100], 5)
					})
				})

			})
		})

	})
	// NON BIO BUTTON
	nonBioButton.addEventListener("click", function() {
		// Change Instructions
		instruction.innerHTML = "You choose Non bio-degradable cups. Fair enough! Okay time to start selling coffee! Business is going well until about 3pm when you are running low on milk. Do you call your local milk supplier who delivers in glass bottles or head to the local supermarket to stock up?"

		// Hide Old Buttons
		hideElement(bioButton)
		hideElement(nonBioButton)

		// Create new Buttons
		newDecisionButton("Local Supplier", "£1.00 a pint", true, "local-milk")
		newDecisionButton("Supermarket", "40p a pint", false, "supermarket-milk")

		// Select new buttons
		const localMilk = document.querySelector('#local-milk')
		const supermarketMilk = document.querySelector('#supermarket-milk')

		// LOCAL MILK
		localMilk.addEventListener('click', function() {
			instruction.innerHTML = "The milk lady arrives just as your closing up for the day. You chat for a while and put the milk in the fridge for tomorrow. This should last you til the end of the week! Give her a free coffee?"

			// Hide Old Buttons
			hideElement(localMilk)
			hideElement(supermarketMilk)

			// Create new Buttons
			newDecisionButton("Of Course!", "- £3.50", false, "free-coffee")
			newDecisionButton("No Way!", "£0.00", false, "no-free-coffee")

			// Select new Buttons 
			const freeCoffee = document.querySelector('#free-coffee')
			const noFreeCoffee = document.querySelector('#no-free-coffee')

			// NO FREE COFFEE
			noFreeCoffee.addEventListener('click', function() {
				instruction.innerHTML = "You say goodbye to the milk lady and begin to pack up for the day. Just before you do a regular customer comes by and wants to buy some food. You don't have any traybakes left. She mentions a friend who makes homemade brownies that come wrapped in paper bags. You know that you can get them much cheaper from the cash and carry."

				// Hide Old Buttons
				hideElement(freeCoffee)
				hideElement(noFreeCoffee)

				// Create new Buttons
				newDecisionButton("Sounds Good", "£2.50 a brownie", true, "homemade-brownie")
				newDecisionButton("Hmm... No Thanks", "£1.00 a brownie", false, "shop-bought-brownie")

				// Select new Buttons 
				const homemadeBrownie = document.querySelector('#homemade-brownie')
				const shopBoughtBrownie = document.querySelector('#shop-bought-brownie')

				// HOMEMADE BROWNIE
				homemadeBrownie.addEventListener('click', function() {
					instruction.innerHTML = "Great, you hope that these homemade brownies will bring in some new customers. You head home after a good days work."

					// Hide Old Buttons
					hideElement(homemadeBrownie)
					hideElement(shopBoughtBrownie)

					// Create new Buttons 
					newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
					newDecisionButton("Finish Game. Read The Article", " ", false, "article")

					// Select new Buttons 
					const dailyReport = document.querySelector('#daily-report')
					const article = document.querySelector('#article')

					dailyReport.addEventListener("click", function() {
						instruction.innerHTML = "Here's how you did today"

						// Hide Old Buttons 
						hideElement(dailyReport)
						hideElement(article)
						// Create graph 
						createChart([500, 300, 100], 5)
					})
				})

				// SHOP BOUGHT BROWNIE
				shopBoughtBrownie.addEventListener('click', function() {
					instruction.innerHTML = "Yeah those brownies are just too expensive for the students who come by regularly! You can pick some traybakes up from the cash and carry in the morning. You head home after a good days work."

					// Hide Old Buttons
					hideElement(homemadeBrownie)
					hideElement(shopBoughtBrownie)

					// Create new Buttons 
					newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
					newDecisionButton("Finish Game. Read The Article", " ", false, "article")

					// Select new Buttons 
					const dailyReport = document.querySelector('#daily-report')
					const article = document.querySelector('#article')

					dailyReport.addEventListener('click', function() {
						instruction.innerHTML = "Here's how you did today"

						// Hide Old Buttons 
						hideElement(dailyReport)
						hideElement(article)
						// Create graph 
						createChart([500, 300, 100], 5)
					})
				})
			})

			// FREE COFFEE
			freeCoffee.addEventListener('click', function() {
				instruction.innerHTML = "You chat for a while longer and mention that your running low on your traybakes. The milk lady suggests that you buy some from her friend. She makes homemade brownies that are wrapped in paper bags. You know that you can get them much cheaper from the cash and carry."

				// Hide Old Buttons
				hideElement(freeCoffee)
				hideElement(noFreeCoffee)

				// Create new Buttons 
				newDecisionButton("Sounds Good", "£2.50 a brownie", true, "homemade-brownie")
				newDecisionButton("Hmm... No Thanks", "£1.00 a brownie", false, "shop-bought-brownie")

				// Select new Buttons 
				const homemadeBrownie = document.querySelector('#homemade-brownie')
				const shopBoughtBrownie = document.querySelector('#shop-bought-brownie')

				// HOMEMADE BROWNIE
				homemadeBrownie.addEventListener('click', function() {
					instruction.innerHTML = "Great, you hope that these homemade brownies will bring in some new customers. You head home after a good days work."

					// Hide Old Buttons
					hideElement(homemadeBrownie)
					hideElement(shopBoughtBrownie)

					// Create new Buttons 
					newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
					newDecisionButton("Finish Game. Read The Article", " ", false, "article")

					// Select new Buttons 
					const dailyReport = document.querySelector('#daily-report')
					const article = document.querySelector('#article')

					dailyReport.addEventListener('click', function() {
						instruction.innerHTML = "Here's how you did today"

						// Hide Old Buttons 
						hideElement(dailyReport)
						hideElement(article)
						// Create graph 
						createChart([500, 300, 100], 5)
					})
				})
				shopBoughtBrownie.addEventListener('click', function() {
					instruction.innerHTML = "Yeah those brownies are just too expensive for the students who come by regularly! You can pick some traybakes up from the cash and carry in the morning. You head home after a good days work."

					// Hide Old Buttons
					hideElement(homemadeBrownie)
					hideElement(shopBoughtBrownie)

					// Create new Buttons 
					newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
					newDecisionButton("Finish Game. Read The Article", " ", false, "article")

					// Select new Buttons 
					const dailyReport = document.querySelector('#daily-report')
					const article = document.querySelector('#article')

					dailyReport.addEventListener('click', function() {
						instruction.innerHTML = "Here's how you did today"

						// Hide Old Buttons 
						hideElement(dailyReport)
						hideElement(article)
						// Create graph 
						createChart([500, 300, 100], 5)
					})

				})
			})

		})

		// SUPERMARKET MILK
		supermarketMilk.addEventListener('click', function() {
			instruction.innerHTML = "It's almost the end of the day and you decide to wait until you close to head to the supermarket. Just before you do a regular customer comes by and wants to buy some food. You don't have any traybakes left. She mentions a friend who makes homemade brownies that come wrapped in paper bags. You know that you can get them much cheaper from the cash and carry."

			// Hide Old Buttons
			hideElement(localMilk)
			hideElement(supermarketMilk)

			// Create new Buttons
			newDecisionButton("Sounds Good", "£2.50 a brownie", true, "homemade-brownie")
			newDecisionButton("Hmm... No Thanks", "£1.00 a brownie", false, "shop-bought-brownie")

			// Select new Buttons 
			const homemadeBrownie = document.querySelector('#homemade-brownie')
			const shopBoughtBrownie = document.querySelector('#shop-bought-brownie')

			homemadeBrownie.addEventListener('click', function() {
					instruction.innerHTML = "Great, you hope that these homemade brownies will bring in some new customers. You head home after a good days work."

					// Hide Old Buttons
					hideElement(homemadeBrownie)
					hideElement(shopBoughtBrownie)

					// Create new Buttons 
					newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
					newDecisionButton("Finish Game. Read The Article", " ", false, "article")

					// Select new Buttons 
					const dailyReport = document.querySelector('#daily-report')
					const article = document.querySelector('#article')

					dailyReport.addEventListener('click', function() {
						instruction.innerHTML = "Here's how you did today"

						// Hide Old Buttons 
						hideElement(dailyReport)
						hideElement(article)
						// Create graph 
						createChart([500, 300, 100], 5)
					})			
			})

		shopBoughtBrownie.addEventListener('click', function() {
			instruction.innerHTML = "Yeah those brownies are just too expensive for the students who come by regularly! You can pick some traybakes up from the cash and carry in the morning. You head home after a good days work."

				// Hide Old Buttons
				hideElement(homemadeBrownie)
				hideElement(shopBoughtBrownie)

				// Create new Buttons 
				newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
				newDecisionButton("Finish Game. Read The Article", " ", false, "article")

				// Select new Buttons 
				const dailyReport = document.querySelector('#daily-report')
				const article = document.querySelector('#article')

				dailyReport.addEventListener('click', function() {
					instruction.innerHTML = "Here's how you did today"

					// Hide Old Buttons 
					hideElement(dailyReport)
					hideElement(article)
					// Create graph 
					createChart([500, 300, 100], 5)
				})
			})
		})

	})

})


// SUPPLIER DECISION

supplierDecision.addEventListener("click", function() {
	console.log('You decided Supplier')
	// Change Instructions 
	instruction.innerHTML = "Great so you decided to buy beans from the farm in Dalat! It's Monday morning and before opening the van you have to visit the cash and carry to buy cups. The store has a huge selection of non-biodegradable cups and a few bio-degradable cups, but there are only a few cups that fit your drink sizes. Do you want to buy bio-degradable cups or non-biodegradable cups?"

	// Hide old buttons
	hideElement(supplierDecision)
	hideElement(farmDecision)

	// Create new buttons
	newDecisionButton("Bio-degradable Cups", "50p", true, "bio")
	newDecisionButton("Non Bio-degradable Cups", "20p", false, "non-bio")

	// Select new Buttons
	const bioButton = document.querySelector('#bio')
	const nonBioButton = document.querySelector('#non-bio')

	// BIO BUTTON
	bioButton.addEventListener("click", function() {
		// Change Instructions
		instruction.innerHTML = "You choose Bio-degradable cups. Nice. Okay time to start selling coffee! Business is going well until about 3pm when you are running low on milk. Do you call your local milk supplier who delivers in glass bottles or head to the local supermarket to stock up?"

		// Hide Old Buttons
		hideElement(bioButton)
		hideElement(nonBioButton)

		// Create new Buttons
		newDecisionButton("Local Supplier", "£1.00 a pint", true, "local-milk")
		newDecisionButton("Supermarket", "40p a pint", false, "supermarket-milk")

		// Select new buttons
		const localMilk = document.querySelector('#local-milk')
		const supermarketMilk = document.querySelector('#supermarket-milk')

		// SUPERMARKET MILK 
		supermarketMilk.addEventListener('click', function() {
			instruction.innerHTML = "It's almost the end of the day and you decide to wait until you close to head to the supermarket. Just before you do a regular customer comes by and wants to buy some food. You don't have any traybakes left. She mentions a friend who makes homemade brownies that come wrapped in paper bags. You know that you can get them much cheaper from the cash and carry."

			// Hide Old Buttons
			hideElement(localMilk)
			hideElement(supermarketMilk)

			// Create new Buttons
			newDecisionButton("Sounds Good", "£2.50 a brownie", true, "homemade-brownie")
			newDecisionButton("Hmm... No Thanks", "£1.00 a brownie", false, "shop-bought-brownie")

			// Select new Buttons 
			const homemadeBrownie = document.querySelector('#homemade-brownie')
			const shopBoughtBrownie = document.querySelector('#shop-bought-brownie')

			homemadeBrownie.addEventListener('click', function() {
					instruction.innerHTML = "Great, you hope that these homemade brownies will bring in some new customers. You head home after a good days work."

					// Hide Old Buttons
					hideElement(homemadeBrownie)
					hideElement(shopBoughtBrownie)

					// Create new Buttons 
					newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
					newDecisionButton("Finish Game. Read The Article", " ", false, "article")

					// Select new Buttons 
					const dailyReport = document.querySelector('#daily-report')
					const article = document.querySelector('#article')

					dailyReport.addEventListener('click', function() {
						instruction.innerHTML = "Here's how you did today"

						// Hide Old Buttons 
						hideElement(dailyReport)
						hideElement(article)
						// Create graph 
						createChart([500, 300, 100], 5)
					})			
			})

		shopBoughtBrownie.addEventListener('click', function() {
			instruction.innerHTML = "Yeah those brownies are just too expensive for the students who come by regularly! You can pick some traybakes up from the cash and carry in the morning. You head home after a good days work."

				// Hide Old Buttons
				hideElement(homemadeBrownie)
				hideElement(shopBoughtBrownie)

				// Create new Buttons 
				newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
				newDecisionButton("Finish Game. Read The Article", " ", false, "article")

				// Select new Buttons 
				const dailyReport = document.querySelector('#daily-report')
				const article = document.querySelector('#article')

				dailyReport.addEventListener('click', function() {
					instruction.innerHTML = "Here's how you did today"

					// Hide Old Buttons 
					hideElement(dailyReport)
					hideElement(article)
					// Create graph 
					createChart([500, 300, 100], 5)
				})
			})
		})

		// LOCAL MILK BUTTON 
		localMilk.addEventListener('click', function() {
			instruction.innerHTML = "The milk lady arrives just as your closing up for the day. You chat for a while and put the milk in the fridge for tomorrow. This should last you til the end of the week! Give her a free coffee?"

			// Hide Old Buttons
			hideElement(localMilk)
			hideElement(supermarketMilk)

			// Create new Buttons
			newDecisionButton("Of Course!", "- £3.50", false, "free-coffee")
			newDecisionButton("No Way!", "£0.00", false, "no-free-coffee")

			// Select new Buttons 
			const freeCoffee = document.querySelector('#free-coffee')
			const noFreeCoffee = document.querySelector('#no-free-coffee')

			// NO FREE COFFEE 
			noFreeCoffee.addEventListener('click', function() {
				instruction.innerHTML = "You say goodbye to the milk lady and begin to pack up for the day. Just before you do a regular customer comes by and wants to buy some food. You don't have any traybakes left. She mentions a friend who makes homemade brownies that come wrapped in paper bags. You know that you can get them much cheaper from the cash and carry."

				// Hide Old Buttons
				hideElement(freeCoffee)
				hideElement(noFreeCoffee)

				// Create new Buttons
				newDecisionButton("Sounds Good", "£2.50 a brownie", true, "homemade-brownie")
				newDecisionButton("Hmm... No Thanks", "£1.00 a brownie", false, "shop-bought-brownie")

				// Select new Buttons 
				const homemadeBrownie = document.querySelector('#homemade-brownie')
				const shopBoughtBrownie = document.querySelector('#shop-bought-brownie')

				// HOMEMADE BROWNIE
				homemadeBrownie.addEventListener('click', function() {
					instruction.innerHTML = "Great, you hope that these homemade brownies will bring in some new customers. You head home after a good days work."

					// Hide Old Buttons
					hideElement(homemadeBrownie)
					hideElement(shopBoughtBrownie)

					// Create new Buttons 
					newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
					newDecisionButton("Finish Game. Read The Article", " ", false, "article")

					// Select new Buttons 
					const dailyReport = document.querySelector('#daily-report')
					const article = document.querySelector('#article')

					dailyReport.addEventListener("click", function() {
						instruction.innerHTML = "Here's how you did today"

						// Hide Old Buttons 
						hideElement(dailyReport)
						hideElement(article)
						// Create graph 
						createChart([500, 300, 100], 5)
					})
				})

				// SHOP BOUGHT BROWNIE
				shopBoughtBrownie.addEventListener('click', function() {
					instruction.innerHTML = "Yeah those brownies are just too expensive for the students who come by regularly! You can pick some traybakes up from the cash and carry in the morning. You head home after a good days work."

					// Hide Old Buttons
					hideElement(homemadeBrownie)
					hideElement(shopBoughtBrownie)

					// Create new Buttons 
					newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
					newDecisionButton("Finish Game. Read The Article", " ", false, "article")

					// Select new Buttons 
					const dailyReport = document.querySelector('#daily-report')
					const article = document.querySelector('#article')

					dailyReport.addEventListener('click', function() {
						instruction.innerHTML = "Here's how you did today"

						// Hide Old Buttons 
						hideElement(dailyReport)
						hideElement(article)
						// Create graph 
						createChart([500, 300, 100], 5)
					})
				})
			})

			// FREE COFFEE BUTTON 
			freeCoffee.addEventListener("click", function() {
				instruction.innerHTML = "You chat for a while longer and mention that your running low on your traybakes. The milk lady suggests that you buy some from her friend. She makes homemade brownies that are wrapped in paper bags. You know that you can get them much cheaper from the cash and carry."

				// Hide Old Buttons
				hideElement(freeCoffee)
				hideElement(noFreeCoffee)

				// Create new Buttons 
				newDecisionButton("Sounds Good", "£2.50 a brownie", true, "homemade-brownie")
				newDecisionButton("Hmm... No Thanks", "£1.00 a brownie", false, "shop-bought-brownie")

				// Select new Buttons 
				const homemadeBrownie = document.querySelector('#homemade-brownie')
				const shopBoughtBrownie = document.querySelector('#shop-bought-brownie')

				homemadeBrownie.addEventListener("click", function() {
					instruction.innerHTML = "Great, you hope that these homemade brownies will bring in some new customers. You head home after a good days work."

					// Hide Old Buttons
					hideElement(homemadeBrownie)
					hideElement(shopBoughtBrownie)

					// Create new Buttons 
					newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
					newDecisionButton("Finish Game. Read The Article", " ", false, "article")

					// Select new Buttons 
					const dailyReport = document.querySelector('#daily-report')
					const article = document.querySelector('#article')

					dailyReport.addEventListener("click", function() {
						instruction.innerHTML = "Here's how you did today"

						// Hide Old Buttons 
						hideElement(dailyReport)
						hideElement(article)
						// Create graph 
						createChart([500, 300, 100], 5)
					})


				})
				// SHOP BOUGHT BROWNIE
				shopBoughtBrownie.addEventListener('click', function() {
					instruction.innerHTML = "Yeah those brownies are just too expensive for the students who come by regularly! You can pick some traybakes up from the cash and carry in the morning. You head home after a good days work."

					// Hide Old Buttons
					hideElement(homemadeBrownie)
					hideElement(shopBoughtBrownie)

					// Create new Buttons 
					newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
					newDecisionButton("Finish Game. Read The Article", " ", false, "article")

					// Select new Buttons 
					const dailyReport = document.querySelector('#daily-report')
					const article = document.querySelector('#article')

					dailyReport.addEventListener('click', function() {
						instruction.innerHTML = "Here's how you did today"

						// Hide Old Buttons 
						hideElement(dailyReport)
						hideElement(article)
						// Create graph 
						createChart([500, 300, 100], 5)
					})
				})

			})
		})

	})
	// NON BIO BUTTON
	nonBioButton.addEventListener("click", function() {
		// Change Instructions
		instruction.innerHTML = "You choose Non bio-degradable cups. Fair enough! Okay time to start selling coffee! Business is going well until about 3pm when you are running low on milk. Do you call your local milk supplier who delivers in glass bottles or head to the local supermarket to stock up?"

		// Hide Old Buttons
		hideElement(bioButton)
		hideElement(nonBioButton)

		// Create new Buttons
		newDecisionButton("Local Supplier", "£1.00 a pint", true, "local-milk")
		newDecisionButton("Supermarket", "40p a pint", false, "supermarket-milk")

		// Select new buttons
		const localMilk = document.querySelector('#local-milk')
		const supermarketMilk = document.querySelector('#supermarket-milk')

		// LOCAL MILK
		localMilk.addEventListener('click', function() {
			instruction.innerHTML = "The milk lady arrives just as your closing up for the day. You chat for a while and put the milk in the fridge for tomorrow. This should last you til the end of the week! Give her a free coffee?"

			// Hide Old Buttons
			hideElement(localMilk)
			hideElement(supermarketMilk)

			// Create new Buttons
			newDecisionButton("Of Course!", "- £3.50", false, "free-coffee")
			newDecisionButton("No Way!", "£0.00", false, "no-free-coffee")

			// Select new Buttons 
			const freeCoffee = document.querySelector('#free-coffee')
			const noFreeCoffee = document.querySelector('#no-free-coffee')

			// NO FREE COFFEE
			noFreeCoffee.addEventListener('click', function() {
				instruction.innerHTML = "You say goodbye to the milk lady and begin to pack up for the day. Just before you do a regular customer comes by and wants to buy some food. You don't have any traybakes left. She mentions a friend who makes homemade brownies that come wrapped in paper bags. You know that you can get them much cheaper from the cash and carry."

				// Hide Old Buttons
				hideElement(freeCoffee)
				hideElement(noFreeCoffee)

				// Create new Buttons
				newDecisionButton("Sounds Good", "£2.50 a brownie", true, "homemade-brownie")
				newDecisionButton("Hmm... No Thanks", "£1.00 a brownie", false, "shop-bought-brownie")

				// Select new Buttons 
				const homemadeBrownie = document.querySelector('#homemade-brownie')
				const shopBoughtBrownie = document.querySelector('#shop-bought-brownie')

				// HOMEMADE BROWNIE
				homemadeBrownie.addEventListener('click', function() {
					instruction.innerHTML = "Great, you hope that these homemade brownies will bring in some new customers. You head home after a good days work."

					// Hide Old Buttons
					hideElement(homemadeBrownie)
					hideElement(shopBoughtBrownie)

					// Create new Buttons 
					newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
					newDecisionButton("Finish Game. Read The Article", " ", false, "article")

					// Select new Buttons 
					const dailyReport = document.querySelector('#daily-report')
					const article = document.querySelector('#article')

					dailyReport.addEventListener("click", function() {
						instruction.innerHTML = "Here's how you did today"

						// Hide Old Buttons 
						hideElement(dailyReport)
						hideElement(article)
						// Create graph 
						createChart([500, 300, 100], 5)
					})
				})

				// SHOP BOUGHT BROWNIE
				shopBoughtBrownie.addEventListener('click', function() {
					instruction.innerHTML = "Yeah those brownies are just too expensive for the students who come by regularly! You can pick some traybakes up from the cash and carry in the morning. You head home after a good days work."

					// Hide Old Buttons
					hideElement(homemadeBrownie)
					hideElement(shopBoughtBrownie)

					// Create new Buttons 
					newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
					newDecisionButton("Finish Game. Read The Article", " ", false, "article")

					// Select new Buttons 
					const dailyReport = document.querySelector('#daily-report')
					const article = document.querySelector('#article')

					dailyReport.addEventListener('click', function() {
						instruction.innerHTML = "Here's how you did today"

						// Hide Old Buttons 
						hideElement(dailyReport)
						hideElement(article)
						// Create graph 
						createChart([500, 300, 100], 5)
					})
				})
			})

			// FREE COFFEE
			freeCoffee.addEventListener('click', function() {
				instruction.innerHTML = "You chat for a while longer and mention that your running low on your traybakes. The milk lady suggests that you buy some from her friend. She makes homemade brownies that are wrapped in paper bags. You know that you can get them much cheaper from the cash and carry."

				// Hide Old Buttons
				hideElement(freeCoffee)
				hideElement(noFreeCoffee)

				// Create new Buttons 
				newDecisionButton("Sounds Good", "£2.50 a brownie", true, "homemade-brownie")
				newDecisionButton("Hmm... No Thanks", "£1.00 a brownie", false, "shop-bought-brownie")

				// Select new Buttons 
				const homemadeBrownie = document.querySelector('#homemade-brownie')
				const shopBoughtBrownie = document.querySelector('#shop-bought-brownie')

				// HOMEMADE BROWNIE
				homemadeBrownie.addEventListener('click', function() {
					instruction.innerHTML = "Great, you hope that these homemade brownies will bring in some new customers. You head home after a good days work."

					// Hide Old Buttons
					hideElement(homemadeBrownie)
					hideElement(shopBoughtBrownie)

					// Create new Buttons 
					newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
					newDecisionButton("Finish Game. Read The Article", " ", false, "article")

					// Select new Buttons 
					const dailyReport = document.querySelector('#daily-report')
					const article = document.querySelector('#article')

					dailyReport.addEventListener('click', function() {
						instruction.innerHTML = "Here's how you did today"

						// Hide Old Buttons 
						hideElement(dailyReport)
						hideElement(article)
						// Create graph 
						createChart([500, 300, 100], 5)
					})
				})
				shopBoughtBrownie.addEventListener('click', function() {
					instruction.innerHTML = "Yeah those brownies are just too expensive for the students who come by regularly! You can pick some traybakes up from the cash and carry in the morning. You head home after a good days work."

					// Hide Old Buttons
					hideElement(homemadeBrownie)
					hideElement(shopBoughtBrownie)

					// Create new Buttons 
					newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
					newDecisionButton("Finish Game. Read The Article", " ", false, "article")

					// Select new Buttons 
					const dailyReport = document.querySelector('#daily-report')
					const article = document.querySelector('#article')

					dailyReport.addEventListener('click', function() {
						instruction.innerHTML = "Here's how you did today"

						// Hide Old Buttons 
						hideElement(dailyReport)
						hideElement(article)
						// Create graph 
						createChart([500, 300, 100], 5)
					})

				})
			})

		})

		// SUPERMARKET MILK
		supermarketMilk.addEventListener('click', function() {
			instruction.innerHTML = "It's almost the end of the day and you decide to wait until you close to head to the supermarket. Just before you do a regular customer comes by and wants to buy some food. You don't have any traybakes left. She mentions a friend who makes homemade brownies that come wrapped in paper bags. You know that you can get them much cheaper from the cash and carry."

			// Hide Old Buttons
			hideElement(localMilk)
			hideElement(supermarketMilk)

			// Create new Buttons
			newDecisionButton("Sounds Good", "£2.50 a brownie", true, "homemade-brownie")
			newDecisionButton("Hmm... No Thanks", "£1.00 a brownie", false, "shop-bought-brownie")

			// Select new Buttons 
			const homemadeBrownie = document.querySelector('#homemade-brownie')
			const shopBoughtBrownie = document.querySelector('#shop-bought-brownie')

			homemadeBrownie.addEventListener('click', function() {
					instruction.innerHTML = "Great, you hope that these homemade brownies will bring in some new customers. You head home after a good days work."

					// Hide Old Buttons
					hideElement(homemadeBrownie)
					hideElement(shopBoughtBrownie)

					// Create new Buttons 
					newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
					newDecisionButton("Finish Game. Read The Article", " ", false, "article")

					// Select new Buttons 
					const dailyReport = document.querySelector('#daily-report')
					const article = document.querySelector('#article')

					dailyReport.addEventListener('click', function() {
						instruction.innerHTML = "Here's how you did today"

						// Hide Old Buttons 
						hideElement(dailyReport)
						hideElement(article)
						// Create graph 
						createChart([500, 300, 100], 5)
					})			
			})

		shopBoughtBrownie.addEventListener('click', function() {
			instruction.innerHTML = "Yeah those brownies are just too expensive for the students who come by regularly! You can pick some traybakes up from the cash and carry in the morning. You head home after a good days work."

				// Hide Old Buttons
				hideElement(homemadeBrownie)
				hideElement(shopBoughtBrownie)

				// Create new Buttons 
				newDecisionButton("Check Out Daily Report", " ", false, "daily-report")
				newDecisionButton("Finish Game. Read The Article", " ", false, "article")

				// Select new Buttons 
				const dailyReport = document.querySelector('#daily-report')
				const article = document.querySelector('#article')

				dailyReport.addEventListener('click', function() {
					instruction.innerHTML = "Here's how you did today"

					// Hide Old Buttons 
					hideElement(dailyReport)
					hideElement(article)
					// Create graph 
					createChart([500, 300, 100], 5)
				})
			})
		})

	})

})
