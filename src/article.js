//==================
// ARTICLE JS - CONTAINS REACT COMPONENT RENDERING ARTICLE ON PAGE 
//==================


// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }



// ====================
// IMPORTS 
// ====================

import scrollmagic from 'scrollmagic';
import React from 'react';
import ReactDOM from 'react-dom';




// REWRITE THIS AS A SEPARATE JS FILE AND RENDER A REACT COMPONENT 



export class Article extends React.Component {
	


	// // ==============
	// // SLIDESHOW STUFF
	// // ==============

	slideIndex = 1;



	plusSlides = (n) => {
	  this.showSlides(this.slideIndex += n);
	}

	currentSlide = (n) => {
	  this.showSlides(this.slideIndex = n);
	}

	// CONSIDER REVISING
	showSlides = (n) => {
	  var i;
	  var slides = document.getElementsByClassName("mySlides");
	  var dots = document.getElementsByClassName("dot");
	  if (n > slides.length) {this.slideIndex = 1}
	  if (n < 1) {this.slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";
	  }
	  for (i = 0; i < dots.length; i++) {
	      dots[i].className = dots[i].className.replace(" active", "");
	  }
	  slides[this.slideIndex-1].style.display = "grid";
	  dots[this.slideIndex-1].className += " active";
	}

	



	// ==============
	// SCROLLING STUFF
	// ==============

	scroll = () => {



	  var controller = new scrollmagic.Controller();

	  var scene = new scrollmagic.Scene({triggerElement: document.querySelector("#trigger1")})
	  					// trigger animation by adding a css class
	  					.setClassToggle("#animate1", "zap")
	  					// .addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
	  					.addTo(this.controller);

	  var scene = new scrollmagic.Scene({triggerElement: document.querySelector("#trigger1")})
	  					// trigger animation by adding a css class
	  					.setClassToggle("#animate2", "zip")
	  					//.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
	  					.addTo(this.controller);

	  var scene = new scrollmagic.Scene({triggerElement: document.querySelector("#trigger1")})
	            // trigger animation by adding a css class
	            .setClassToggle("#animate3", "appear")
	            //.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
	            .addTo(controller);
	  // var pin_image = function(){
	  var scene = new scrollmagic.Scene({triggerElement: "#trigger1"})
	                    .setPin("#header")
	                    // .addIndicators({name: "1 (duration:3000)"})
	                    .addTo(this.controller);


		var scene = new scrollmagic.Scene({triggerElement: document.querySelector("#trigger1")})
          // trigger animation by adding a css class
          .setClassToggle(document.querySelector("#flip_cloud_content"), "flipped")
          //.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
          .addTo(this.controller);

		var scene = new scrollmagic.Scene({triggerElement: document.querySelector("#trigger1")})
		          // trigger animation by adding a css class
		          .setClassToggle("#flip_cloud_content_customer", "flipped1")
		          //.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
		          .addTo(this.controller);
		var scene = new scrollmagic.Scene({triggerElement: document.querySelector("#trigger1")})
		          // trigger animation by adding a css class
		          .setClassToggle("#flip_cloud_content_marketing", "flipped2")
		          //.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
		          .addTo(this.controller);



		var scene = new scrollmagic.Scene({triggerElement: "#trigger2"})
		          // trigger animation by adding a css class
		          .setClassToggle(".fixed-top", "hide-fixed-top")


		          //.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
		          .addTo(this.controller);


		


	};


	controller = new scrollmagic.Controller();


	


	flip_header = () => {
	  var header_phone_content = document.getElementById("header_phone_content")
	  header_phone_content.classList.toggle('flipped4')
	}



	// ==============
	// RENDER ARTICLE ON PAGE
	// ===============

	render() {

	
		let result = (

			<div>
				<header id="top-header-container" className="fixed-top">

					<img id="header-image" src={require('./images/article-top.png')}  alt="two people are thinking about business" onLoad={() => {this.showSlides(this.slideIndex) ; this.scroll()} }/>


					<div id="animate1" className="box1 red">
						<p id="headline"></p>
						
					</div>
					


					<div id="animate2" className="box2 red">
						<p id="headline_change">"A Constant Battle"</p>
				    <p id="sub_head">The challenges facing environmentally <br/>sustainable small businesses</p>
						
					</div>
					<div className="flip_cloud">
						
						<div id="flip_cloud_content">
							<img className="cloud sustainablility" src={require('./images/ethical-hand.png')}/>
							<img className="cloud profit" src={require('./images/profit-hand.png')}/>
						</div>
					</div>

					<div className="flip_cloud_customer">
						<div id="flip_cloud_content_customer">
							<img className="cloud customer" src={require('./images/customer-hand.png')}/>
							<img className="cloud community" src={require('./images/community-hand.png')}/>
						</div>
					</div>

					<div className="flip_cloud_marketing">
						<div id="flip_cloud_content_marketing">
							<img className="cloud marketing" src={require('./images/marketing-hand.png')}/>
							<img className="cloud awareness" src={require('./images/awareness.png')}/>
						</div>
					</div>

				</header>

				


				<div id="trigger1" className="spacer s0"></div>


				<div id="trigger2" className="spacer s1"></div>


				<main className="margin-body">

					
						
							
								

					<section className="thin flex-container-column text-centralise">


						<p className="byline">

							By Rahel Golub, Thi Hao Linh Vuong, Poojil Tiwari & Andy Clarke

						</p>

						<p className="opening-paragraph paragraph-margin">

							It’s 2020 ... In the midst of school strikes, climate conferences and ever-growing warnings of the upcoming environmental crisis, the UK’s business sector continues to plow forward with its eyes set on the ultimate goal of yet more profit-making. Nonetheless an expanding group of indomitable idealists hold out against the onrushing waves of business growth… And life is not easy for the sustainable businesses who garrison the fortified camps of nature.

						</p>


						<p className="text paragraph-margin">

							Set in the heart of Carmarthen in Wales, The Warren is a unique restaurant not only in its labyrinthine décor that sparks curiosity the moment you walk in but also in the way it was founded. The owner Deri Reed, self-proclaimed as an “ethical chef”, opened The Warren to nurture relationships with other local businesses and to run a restaurant according to his vision of environmental sustainability. Every item on The Warren’s menu has been sourced from local farms that Deri Reed personally visits to ensure that they practice organic farming and are aware of animal welfare practices.

						</p>

						<p className="text paragraph-margin flex-container-column">

							Reed was brought up on a farm and has always had a special bond to nature. Having worked in kitchens for a decade, he started to feel alienated by the habitual “mass production” of food in ways that he felt were unsustainable. Thus, The Warren was born from a desire to re-establish the processes of producing food that he was taught as a child. As he puts it; “a romantic story between a restaurant and a farmer”.

						</p>

						<p className="text paragraph-margin flex-container-column">

							As awareness of the impact of human processes on the environment grows, businesses like The Warren are becoming more popular and are often praised for their dynamism. Less known is “the constant battle between what is ethical and what isn’t” that occupies every decision that these businesses make. “My aspirations are very high in doing everything as environmentally friendly as possible while not going into the red” said Reed. He emphasized this “constant battle” at least five times during our conversation.

						</p>




					</section>



					
					<section id="slide_init">

						<div className="slideshow-container">

						<div className="mySlides fade">
						  <div className="numbertext">1 / 3</div>
						  
							<img className = "slide_image" src={require('./images/The_warren.JPG')} />
						  <div className="caption_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quos velit, quis sint reiciendis dicta, ipsa placeat iure adipisci expedita explicabo dignissimos minima ab, quod obcaecati consequatur praesentium, nobis eius.</div>
						</div>

						<div className="mySlides fade">
						  <div className="numbertext">2 / 3</div>
						  
							<img className ="slide_image" src={require('./images/Hedi.JPG')} />
						  <div className="caption_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ab sed voluptatem laudantium et labore! Debitis accusantium pariatur provident, officiis ea cumque aspernatur. Praesentium vitae, qui ab! Non, laborum, dolore.</div>
						</div>

						<div className="mySlides fade">
						  <div className="numbertext">3 / 3</div>
						  
							<img className ="slide_image" src={require('./images/suzanna.jpg')} />
						  <div className="caption_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi in quo eum rerum quasi optio earum ad perferendis enim repellendus modi alias blanditiis, reiciendis consequuntur quaerat dolore quas, veritatis perspiciatis.</div>
						</div>

						

						</div>
						<br/>

						<div id="dot-container">
							<span className="dot" onClick={() => this.currentSlide(1) }></span>
							<span className="dot" onClick={() => this.currentSlide(2) }></span>
							<span className="dot" onClick={() => this.currentSlide(3) }></span>
						</div>

					</section>


		
					

					<section className="thin flex-container-column text-centralise">


						<p className="subtitle paragraph-margin">

							Walking on a tightrope

						</p>

						<p className="text paragraph-margin">

							Even though being an environmentally sustainable entrepreneur means something different to each individual, recent studies suggest that  the ultimate goal for these business owners is not to seek great wealth but rather to “spread their green values, educate society and to follow their passions for a green business idea”. For businesses committed to their own vision of sustainability, the issue is often “in terms of the supply chain” says Alex Fitoni, an environmental consultant with Mabbett. “How do you make sure the products you use are sustainable”.  Suppliers and their processes have to be traceable so that businesses can be assured that all of their ingredients and materials are grown and processed according to their own ethical standards.  

						</p>


						<p className="text paragraph-margin">

							Traceability can be a difficult thing to achieve in some industries. The fabric used in fashion businesses has usually been subject to several procedures from fabric production to pre-treatment, dying, printing and finishing treatment before finally reaching the designers’ hands. Those procedures can often take place in different countries and involve a huge number of different production processes. Synthetic fabrics, which are made from man-made fibers that have been heavily treated with chemicals, would be considered unsustainable by some but not by others. Untangling the knots within their supply chain can prove an impossible task for a small fashion brand already investing so much time into growing their business.

						</p>

						<p className="text paragraph-margin flex-container-column">

							Suzanna James, founder of Suzanna James Knitwear - a small fashion brand, took 4 years to find her first yarn supplier. At the moment, she has four suppliers, three in the UK and one in Peru. All of her fabric is naturally dyed and comes from small farms that are free from slaughter or cruelty. It’s common practice for farms producing yarn to supplement their incomes by selling livestock to the meat industry. James’ suppliers resist doing this and consequentially don’t earn a living solely from farming. She has visited all of her suppliers including the sheep and alpaca farms and dying factories and is able to trace each batch of her yarn to individual herds of sheep or alpaca. “I deliberately make a point of going to meet them because I want to have a close working relationship with them and to make sure our incandescents are the same” says James.

						</p>

						<p className="text paragraph-margin flex-container-column">

							Maykher, a fashion brand based in Cardiff, works with three small artisan groups in Guatemala, Haiti and India to produce fashion accessories according to their own vision of sustainability. Heidi-Louise Griffiths, said of the 100 groups that she was introduced to when founding Maykher, she found only two that “aligned with her sustainable values”. Artisan groups that work with Maykher have to be “completely honest and transparent about their practices from start to finish”. The Haitian organization that Maykher source products from make their bags and jewelry from wasted leather they find locally. 

						</p>

						<p className="text paragraph-margin">

							There are lots of financial risks that come with enforcing ethical standards on a supply chain. Businesses that do so will have a limited choices of partners often consisting of small, unstable businesses, which cannot consistently guarantee the quantity of resources that they need. The morning we visited The Warren, Deri Reed had run out of beetroot, which he sources from a local farm. On top of this, trading with these businesses almost always incurs a higher price tag. “It’s not 50% more, it’s a lot more expensive” – says Reed. He pointed out that local, organically grown vegetables are two times or even three times more costly.  

						</p>

						<p className="text paragraph-margin flex-container-column">

							For Joe of One Planet Pizza, based in Norwich, the high price that his suppliers charge has forced him to market his products as gourmet and to pass on some of this cost to his customers. However, this is not ideal or even possible for all businesses. “Customers are not aware of all the costs that I cut in bringing products into the shop”, said James who pointed out that there is a limit on how much people are prepared to pay in the current climate. It is often the case that green business owners want to offer affordable prices. Reed has tried his best to make the prices on his menu similar to other restaurants in Carmarthen. “We are in an area where there isn’t tons of money and we’ve got to balance that” he says. Running an environmentally sustainable business is like walking a tightrope.

						</p>

						<p className="text paragraph-margin flex-container-column">

							Tracing supply chains is a part of this balancing act and time spent doing so can take away from time spent growing the business. For Maykher, it took 18 months to find three artisan groups. Suzanna James wrote on her blog that she spends 90% of her time sourcing yarn, a process that normally takes around a year. James says “I work on a very small scale. I have to be patient and accept my business is going to be very slow … It’s incredibly hard to make a good profit at the moment for ethical and sustainable products”, a sentiment echoed by many of the business owners we spoke to with similar ambitions. 

						</p>


					</section>




					<section className="thin flex-container-column text-centralise">


						<p className="subtitle paragraph-margin">

							The problem with certificates

						</p>

						<p className="text paragraph-margin">

							Green entrepreneurs hesitate to call themselves sustainable, with some dismissing the term altogether. “I want to have a business that doesn’t cause harm to myself, to others or to the environment … ‘Sustainability’, ‘eco’, ‘climate’, I would disregard myself from those terms” – says Stuart Collins, founder of Uplands Roast an Edinburgh based coffee business that supports direct trade with local farmers. The term ‘sustainability’ is sometimes misused by organizations taking advantage of the environment as a hot topic to increase their customer base. For committed green entrepreneurs sustainability is a journey rather than a destination.

						</p>


						<p className="text paragraph-margin">

							“The challenge is how to evidence that someone is doing something sustainable” said Alex Fitoni. So, how do green businesses communicate their efforts to customers? Certificates from reputed ethical standards organizations are a common way of validating sustainable practices. However, certification costs money and can be a lengthy, frustrating process, points out Kirstie O’Neill, a lecturer in environmental geography at Cardiff University. “Pret A Manger or Starbucks have teams of people who do that kind of work for them … but it’s so much harder for small businesses” – O’Neill continues.  Many of the small businesses we spoke to claim to meet the standards set by these organizations but simply cannot afford to become certified. 

						</p>

						<p className="text paragraph-margin flex-container-column">

							Business owners also raised concerns about the usefulness of certificates. Deri Reed called it ‘ludicrous’ that farmers that don’t use pesticides must get certificates to prove this, whilst those that do forgo the need for certification. It’s unlikely that a single certificate can encompass all the distinct business practices involved in a production process in order to prove that a product is sustainable. “It’s pointless to have an organic cotton logo on the product. Yeah, it is fine that it’s organic but that doesn’t mean at all that it is a sustainable and ethical product” says Suzanna James. 

						</p>


					</section>



					

					<section className="thin flex-container-column text-centralise">


						<p className="subtitle paragraph-margin">

							Unsustainable by default

						</p>

						<p className="text paragraph-margin">

							The idea of an environmentally sustainable business, as O’Neill puts it, offers a different “way of looking at the world”, one that offers a different definition of success. For Collins at Uplands Roast this means prioritizing “doing good things” which he believes is “far more important than profit”. 

						</p>


						<p className="text paragraph-margin">

							This doesn’t appeal to the majority of today’s investors, who as O’Neill points out, want a quick ten percent return on their investment. For businesses who are committed to standing by their own environmental standards, this return is more likely to be much slower and a much lower rate of two or three percent. It seems like there is little financial incentive to ensure that processes like energy use, water use, supply chains and transportation adhere to these standards. For this reason, Griffiths, co-founder of Maykher, bemoans that “it’s really easy for businesses to default to traditional methods … It’s hard, really hard to be sustainable”.

						</p>

						<p className="text paragraph-margin flex-container-column">

							“The government is on duty to ease the way [for sustainable businesses]” says Anna McMorrin, Labour MP for Cardiff North and member of the Environmental Audit Committee as well as the All Party Parliamentary Climate Change Group. However, according to her, the UK government’s policies on supporting environmentally sustainable businesses “are more green-washing words than actual actions”. McMorrin wants subsidies for green businesses and has been pushing for changes to the UK’s energy infrastructure.

						</p>

						<p className="text paragraph-margin">

							In 2015, according to O’Neill, the UK government abandoned a significant amount of the environmental policies, funding programs that they had pledged in support of sustainable business growth. The promise of a Green Investment Bank to provide financing for green projects and feed-in-tariff schemes making renewable energy more affordable, were two notable energy policies that were not realised. O’Neill describes the government’s progress as “disastrous” and notes that representative bodies continue to call for a “clear strategy”. 
						
						</p>


						<p className="text paragraph-margin">

							The current government policies tackling climate change are not “designed with small businesses in mind”, according to Amy Bainton, external affairs advisor for the Federation of Small Businesses (FSB) in Wales. Schemes that encourage developers to build with energy efficient materials and insulation or that subsidise installation of renewable energy fall short of supporting small businesses that often don’t own their business premises.
						
						</p>

						<p className="text paragraph-margin flex-container-column">

							Another major issue is the lack of information available for proactive business owners ready to make changes or to persuade their landlords to do so. The same goes for finding grants or loans, which Bainton calls a “minefield that could lead them down the wrong road”.  She says that small businesses “might spend quite a lot of time investigating something only to find that they are not eligible for funding … It’s difficult to find the information that you need in such a crowded, confusing landscape and even more confusing if this is something new to you”. FSB wants the government to open a line for businesses to get all the advice and necessary information about government schemes related to environmental issues.
						
						</p>

						<p className="text paragraph-margin">

							For the time being, green entrepreneurs still have to find their own way through these many challenges. Their common determination shows no sign of letting up just yet. “We're just riding the wave at the moment for as long as we can do it” says Deri Reed.
						</p>

						<p className="text paragraph-margin flex-container-column">

							It’s a lifestyle choice to run an environmentally sustainable business and business owners seem happy with that choice despite these challenges. Before we end our conversation, Deri looks around his place. “There is one lady who comes here three days every week just to hug people, she comes in this morning just for hugs. She hugs everyone because it’s a nice place to be”   							
						
						</p>


					</section>








				</main>


			</div>


			);

		return result;
		



	}
}

