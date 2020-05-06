//================================================
//===============================================

// ARTICLE JS - CONTAINS REACT COMPONENT RENDERING ARTICLE ON PAGE

//================================================
//===============================================


// ====================
// IMPORTS
// ====================

import scrollmagic from 'scrollmagic';
import React from 'react';
import ReactDOM from 'react-dom';




export class Article extends React.Component {



	// ==============
	// Slideshow functionality
	//Code adapted from w3schools.com
	//Access 10-03-2020
	//https://www.w3schools.com/howto/howto_js_slideshow.asp
	// ==============

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
	// Scrollytelling functionality
	// ==============

	scroll = () => {

	  var windowWidth = window.innerWidth;

	  console.log(windowWidth)

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
	            .addIndicators() // add indicators (requires plugin)
	            .addTo(controller);
	  // var pin_image = function(){
	  var scene = new scrollmagic.Scene({triggerElement: "#trigger1", duration: 100})
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



					<img id="header-image" onLoad={() => {this.showSlides(this.slideIndex) ; this.scroll()  } } src="https://i.ibb.co/vvyrPfq/article-top-ucgxa0-c-scale-w-1400.png" alt="two people are thinking about business" />

					<div id="animate1" className="box1 red" >
						<p id="headline"></p>

					</div>



					<div id="animate2" className="box2 red">
						<p id="headline_change">"A Constant Battle"</p>
				    <p id="sub_head">The green entrepreneurs<br/>fighting for an ethical market</p>

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

						<p className="Date">
						May, 2020
						</p>

						<p className="opening-paragraph paragraph-margin">

							Leading scientists <a target="_blank" href="https://www.theguardian.com/world/2020/mar/25/coronavirus-nature-is-sending-us-a-message-says-un-environment-chief">are saying</a> that the covid-19 outbreak presents a “clear warning shot” of more deadly diseases to come if we do not stop destroying the natural world. However, pioneers of the “green” economy, businesses who care about more than just a bottom line, are in a “constant battle” to survive despite being considered as part of the solution to climate change

						</p>


						<p className="text paragraph-margin">

							Set in the heart of Carmarthen in Wales, <a target="_blank" href="https://www.warrenmanselst.co.uk/">The Warren</a> is a unique restaurant not only in its labyrinthine-like décor that sparks curiosity the moment you walk in but also in the way it was founded. The owner Deri Reed, a self-proclaimed “ethical chef”, opened The Warren to nurture relationships with other local businesses and to run a restaurant according to his vision of environmental sustainability. Every item on The Warren’s menu has been sourced from local farms that Deri Reed visits personally to ensure that they practice organic farming and follow the right animal welfare practices.

						</p>

						<p className="text paragraph-margin flex-container-column">

							Reed was brought up on a farm and has always had a special bond to nature. Having worked in kitchens for a decade, he started to feel alienated by the mass production of food in ways that he felt were unsustainable. Thus, The Warren was born from a desire to re-establish the processes of producing food that he was taught as a child. He says it’s a kind of romance, “between a restaurant and a farmer”.

						</p>

						<p className="text paragraph-margin flex-container-column">

							Businesses like The Warren are becoming more popular - as awareness grows of the impact of human processes on the environment - and are often praised for their dynamism. What’s talked about less frequently is “the constant battle between what is ethical and what isn’t” that overshadows every decision these businesses make. “My aspirations are very high in doing everything as environmentally-friendly as possible while not going into the red” says Reed. He emphasizes this “constant battle”, referring to it at least five times during our conversation.

						</p>




					</section>

					<div className="pictogram">
				    <div className="left_chart">
				      <div className="struggle">
								<p id="seventy-percent" className="pictogram_number">70%</p>
				        <p className="pictogram_text">of small business</p><p className="pictogram_text">struggle to embrace ethical practices</p>
				        <table className="tg">
				          <tr>
				            <td className="tg-green"></td>
				            <td className="tg-green"></td>
				            <td className="tg-green"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				          </tr>
				          <tr>
				            <td className="tg-green"></td>
				            <td className="tg-green"></td>
				            <td className="tg-green"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				          </tr>
				          <tr>
				            <td className="tg-green"></td>
				            <td className="tg-green"></td>
				            <td className="tg-green"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				          </tr>
				          <tr>
				            <td className="tg-green"></td>
				            <td className="tg-green"></td>
				            <td className="tg-green"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				          </tr>
				          <tr>
				            <td className="tg-green"></td>
				            <td className="tg-green"></td>
				            <td className="tg-green"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				          </tr>
				          <tr>
				            <td className="tg-green"></td>
				            <td className="tg-green"></td>
				            <td className="tg-green"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				          </tr>
				          <tr>
				            <td className="tg-green"></td>
				            <td className="tg-green"></td>
				            <td className="tg-green"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				          </tr>
				          <tr>
				            <td className="tg-green"></td>
				            <td className="tg-green"></td>
				            <td className="tg-green"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				          </tr>
				          <tr>
				            <td className="tg-green"></td>
				            <td className="tg-green"></td>
				            <td className="tg-green"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				          </tr>
				          <tr>
				            <td className="tg-green"></td>
				            <td className="tg-green"></td>
				            <td className="tg-green"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				            <td className="tg-red"></td>
				          </tr>
				        </table>
				        
				      </div>
				    </div>
				    <div className="right_chart">

				    <div className="costly">
				        <p className="pictogram_number">41%</p>
						<p className="pictogram_text">say it's too</p>
						<p className="pictogram_text">costly to implement</p>
				    </div>
				      

				    <div className="research">
				        <p className="pictogram_number">16%</p>
						<p className="pictogram_text">say it's too time-</p>
						<p className="pictogram_text">consuming to research</p>
				    </div>

				      
				      
				      
				    </div>
						<p id="vis-source">Source: <a target="_blank" href="https://www.creativebrief.com/user_files/24990/1520430598_18FeetRising_TheUprising_Report.pdf">The Uprising report</a></p>
				  </div>



					<section className="thin flex-container-column text-centralise">


						<p className="subtitle paragraph-margin">

							Walking a tightrope

						</p>


						<p className="text paragraph-margin">

							Even though being an environmentally-sustainable entrepreneur means something different to each individual, <a target="_blank" href="https://www-sciencedirect-com.abc.cardiff.ac.uk/science/article/pii/S0959652617300720">one recent study</a> suggests that the ultimate goal for these business owners is not great wealth but rather to “spread their green values, educate society and to follow their passions for a green business idea”. The issue for businesses is often “in terms of the supply chain” says Alex Fitoni, an environmental specialist with the Mabbett consultancy firm, "How do you make sure the products you use are sustainable?".  Suppliers and their processes have to be traceable so that a business can be sure all their ingredients and materials are grown and processed according to their own ethical standards.

						</p>


						<p className="text paragraph-margin">

							Traceability can be difficult. The fabric used in fashion businesses has usually been subject to several procedures ranging from fabric production to pre-treatment, dying, printing and finishing treatment by the time it reaches the designer’s hands. These procedures often take place in different countries and involve a huge number of different production processes. Many of these processes involve the treatment of fibres with harmful chemicals, that damage the environment when they get dumped into bodies of water. Untangling the knots within their supply chain can prove an impossible task for a small fashion brand already investing so much time into developing their business.

						</p>

						<p className="text paragraph-margin flex-container-column">

							Suzanna James, founder of Suzanna James Knitwear - a small fashion brand based in Wales, took four years to find her first yarn supplier. At the moment, she has four suppliers, three in the UK and one in Peru. All of her fabric is coloured with dyes found in the natural environment and comes from small farms that are free from cruelty. It’s common practice for farms producing yarn to supplement their incomes by selling livestock to the meat industry. James’s suppliers resist this and so can’t earn a living solely from farming. She has visited all of her suppliers including the sheep and alpaca farms and dyeing factories and is able to trace each batch of her yarn to individual herds of sheep or alpaca. “I deliberately make a point of going to meet them because I want to have a close working relationship with them and to make sure our incandescents are the same” says James.

						</p>

					</section>


					<section className="thin flex-container-column text-centralise">


						<p className="text paragraph-margin flex-container-column">

							<a target="_blank" href="http://www.maykher.com/">Maykher</a>, a fashion brand based in Cardiff, works with three small artisan groups in Guatemala, Haiti and India to produce fashion accessories according to their own vision of sustainability. The founder Heidi-Louise Griffiths says that of the 100 groups that she was introduced to when starting Maykher, only two “aligned with her sustainable values”. Craftspeople who work with Maykher have to be “completely honest and transparent about their practices from start to finish”. The Haitian organization that supplies products to Maykher produce their bags and jewelry from wasted leather they find locally.

						</p>


						<p className="text paragraph-margin">

							There are lots of financial risks that come with enforcing ethical standards on a supply chain. Businesses that do so will have a limited choices of partners, often small, unstable businesses, which cannot consistently guarantee the quantity of resources that they need. The morning we visited The Warren, Deri Reed had run out of beetroot, which he sources from a local farm.

						</p>


						<p className="paragraph-margin pull-quote">

							“It’s not 50% more, it’s a lot more expensive”

						</p>

						<p className="text paragraph-margin">

							On top of this, trading with these businesses almost always incurs a higher price tag. “It’s not 50% more, it’s a lot more expensive” says Reed. He points out that local, organically-grown vegetables are two times or even three times more expensive.

						</p>



						<p className="text paragraph-margin flex-container-column">

						For Joe Hill, director of <a target="_blank" href="https://www.oneplanetpizza.com/">One Planet Pizza</a> in Norwich, the high price that his suppliers charge has forced him to market his products as gourmet and to pass on some of this cost to his customers. However, this is not ideal or even possible for all businesses. “Customers are not aware of all the costs that I cut in bringing products into the shop”, says Suzanna James, who points out that there is a limit on how much people are prepared to pay in the current climate.

						</p>


						<p className="text paragraph-margin">

							Green business owners say they want to offer affordable prices. Reed has tried his best to make the prices on his menu similar to other restaurants in Carmarthen. “We are in an area where there isn’t tons of money and we’ve got to balance that” he says. Running an environmentally-sustainable business is like walking a tightrope.

						</p>


						<p className="paragraph-margin pull-quote">

							“I work on a very small scale. I have to be patient and accept my business is going to be very slow.”

						</p>

						<p className="text paragraph-margin flex-container-column">

							Tracing supply chains is a part of this balancing act and time spent doing so can take away from time spent growing the business. For Maykher, it took 18 months to find three artisan groups. Suzanna James recounts on her blog that she spends 90% of her time sourcing yarn, a process that normally takes around a year. James says “I work on a very small scale. I have to be patient and accept my business is going to be very slow. It’s incredibly hard to make a good profit at the moment for ethical and sustainable products”, a sentiment echoed by many of the business owners with similar ambitions that we spoke to.

						</p>


					</section>


					<section id="slide_init">

						<div className="slideshow-container">



						<div className="mySlides fade intro">
							<div className="numbertext"></div>
							<img className = "slide_image" src={require('./images/all_biz.jpg')}/>
							<div className="caption_text">
								<p className = 'intro_quote'>"It’s impossible for any business to be perfect...There is another way that we could be more sustainable but we just can’t do it"</p>
								<p className='intro_character'>Heidi-Louise Griffiths, co-founder of Maykher</p>
								<p className='image_courtesy'>@Image courtesy of The Warren, Maykher, Uplands Roast and Suzanna James Knitwear</p>
							</div>
						</div>

						<div className="mySlides fade">
							<div className="numbertext">1 / 3</div>
							<img className ="slide_image" src={require('./images/Hedi.JPG')}/>
							<div className="caption_text">
							<p className = 'first_quote'>“I wished I could have done it  [started using organic cotton] two or three years ago but I am not there yet” </p>
							<p className='character'>Heidi-Louise Griffiths, Maykher</p>
							<p className = 'analysis'>Maykher is still using cotton that hasn't been organically produced. Working with a handful of artisan groups that are only able to make a limited quantity of products means that Maykher cannot bulk order organic cotton at affordable prices.</p>
							</div>
						</div>

						<div className="mySlides fade">
							<div className="numbertext">2 / 3</div>
							<img className = "slide_image" src={require('./images/The_warren_2.JPG')}/>
							<div className="caption_text">
								<p className = "first_quote">“When we first opened, we were very hesitant to ever put things like 'organic' on our menu because some day it wouldn’t be”</p>
								<p className="character">Deri Reed, co-founder of The Warren</p>
								<p className = "analysis">“We can’t function without potatoes” – Reed said. With more storage he can bulk buy from his local supplier to make sure his restaurant never runs out of potatoes but can't guarantee the same for all of his vegetables. He still runs out of other ingredients and is forced to choose whether to change the whole menu or source from different suppliers. He says “it does happen, I can't lie about that".</p>
							</div>
						</div>

						<div className="mySlides fade">
							<div className="numbertext">3 / 3</div>
							<img className ="slide_image" src={require('./images/suzanna.jpg')}/>
							<div className="caption_text">
								<p className = "first_quote">“The thing I would really want to do, in a perfect world, is to have all the yarn that I use to be vegetarian”</p>
								<p className="character">Suzanna James, founder of Suzanna James Knitwear</p>
								<p className = "analysis">Apart from her Peruvian alpaca supplier, where the animals are also used as a food source, Suzanna’s yarn is 'slaughter-free'. She still wants to work with this supplier because she believes in supporting female empowerment and the preservation of craftsmanship in Peru.</p>
								<p className = "image_courtesy black">@Image courtesy: Suzanna James Knitwear</p>
							</div>

						</div>

						</div>
						<br/>

						<div id="dot-container">
							<span className="dot" onClick={() => this.currentSlide(1) }></span>
							<span className="dot" onClick={() => this.currentSlide(2) }></span>
							<span className="dot" onClick={() => this.currentSlide(3) }></span>
							<span className="dot" onClick={() => this.currentSlide(4) }></span>
						</div>

					</section>


					<section className="thin flex-container-column text-centralise">


						<p className="subtitle paragraph-margin">

							The problem with certificates

						</p>


						<p className="paragraph-margin pull-quote">

							“I want to have a business that doesn’t cause harm to myself, to others or to the environment”

						</p>

						<p className="text paragraph-margin">

							Green entrepreneurs hesitate to call themselves sustainable, with some dismissing the term altogether. “I want to have a business that doesn’t cause harm to myself, to others or to the environment. ‘Sustainability’, ‘eco’, ‘climate’, I would disregard myself from those terms”, says Stuart Collins, founder of <a target="_blank" href="https://uplandsroast.com/">Uplands Roast</a> an Edinburgh-based coffee business that trades directly with farmers. The term “sustainability” is sometimes abused by organizations taking advantage of the environment as a hot topic to increase their customer base. For committed green entrepreneurs sustainability is a journey rather than a destination.

						</p>


						<p className="text paragraph-margin">

							“The challenge is how to evidence that someone is doing something sustainable” explains Alex Fitoni. So, how do green businesses communicate their efforts to customers? Certificates from reputed ethical standards organizations are a common way of validating their sustainable practices. However, certification costs money and can be a lengthy, frustrating process points out Kirstie O’Neill, lecturer in Environmental Geography at Cardiff University. “Pret A Manger or Starbucks have teams of people who do that kind of work for them, but it’s so much harder for small businesses". Certification fees range from £1000 to £10000 per year for small businesses and involve a grueling process of collecting evidence, which can take years. Many of the small businesses we spoke to claim to meet the standards set by these organizations but simply cannot afford to become certified.

						</p>

						<p className="text paragraph-margin flex-container-column">

							Business owners also raised concerns about the usefulness of certificates. Deri Reed called it ‘ludicrous’ that farmers who don’t use pesticides must get certificates to prove this, whilst those that do forgo the need for certification. It’s unlikely that a single certificate can encompass all the distinct business practices involved in production and prove that a product is sustainable. “It’s pointless to have an organic cotton logo on the product”, says Suzanna James, “it’s fine that it’s organic but that doesn’t mean at all that it is a sustainable and ethical product”.

						</p>

						 <p className="text paragraph-margin">More than 90% of UK companies certified with <a target="_blank" href="https://bcorporation.net/">B Corporation</a>, an ethical certification organisation, are small or medium sized enterprises. One-third of these businesses  are consultancy firms and one-third are food businesses. However, this doesn’t represent the whole picture. There could be many more environmentally-sustainable businesses in a much wider range of industries that do not possess B Corporation certification.</p>


					</section>





					<section className="thin flex-container-column text-centralise">


						<p className="subtitle paragraph-margin">

							Unsustainable by default

						</p>

						<p className="text paragraph-margin">

							The idea of an environmentally-sustainable business, as O’Neill puts it, offers a different “way of looking at the world”, one that offers a different definition of success. For Collins at Uplands Roast this means prioritizing “doing good things” which he believes is “far more important than profit”.

						</p>


						<p className="text paragraph-margin">

							This doesn’t appeal to the majority of today’s investors who, as O’Neill points out, want a quick ten percent return on their investment. For businesses who are committed to standing by their own environmental standards, this return is more likely to be much slower and at a much lower rate of two or three percent. It seems like there is little financial incentive to ensure that processes like energy use, water use, supply chains and transportation adhere to higher standards. For this reason, Heidi-Louise Griffiths of Maykher feels that “it’s really easy for businesses to default to traditional methods. It’s hard, really hard to be sustainable”.

						</p>

						<p className="text paragraph-margin flex-container-column">

							“The government is on duty to ease the way” says Anna McMorrin, Labour MP for Cardiff North and member of the Environmental Audit Committee as well as the All-Party Parliamentary Climate Change Group. However, according to her, the UK government’s policies on supporting environmentally-sustainable businesses “are more green-washing words than actual actions”. McMorrin wants subsidies for green businesses and has been pushing for changes to the UK’s energy infrastructure.

						</p>

						<p className="text paragraph-margin">

							In 2015, according to O’Neill, the <a target="_blank" href="https://www.theguardian.com/environment/2015/jul/24/the-9-green-policies-killed-off-by-tory-government">UK government abandoned</a> a significant amount of the environmental policies and funding programs that they had pledged to help sustainable business growth. <a target="_blank" href="https://www.bbc.co.uk/news/science-environment-13312901">The promise of a Green Investment Bank</a> to provide financing for green projects and feed-in-tariff schemes making renewable energy more affordable were two notable energy policies that were never realised. O’Neill describes the government’s progress as “disastrous” and notes that representative bodies continue to call for a “clear strategy”.

						</p>

						<p className="paragraph-margin pull-quote">

							“It’s difficult to find the information that you need in such a crowded, confusing landscape and even more confusing if this is something new to you”

						</p>


						<p className="text paragraph-margin">

							By 2050, the UK government aims to reduce carbon emissions by 80% compared to the level recorded in 1990. Despite small businesses accounting for 90% of the UK’s business population, the government current policies on climate change “are not designed with small businesses in mind”, according to Amy Bainton, External Affairs Advisor for the Federation of Small Businesses (FSB) in Wales. Schemes that encourage property developers to build with energy-efficient materials and insulation or that subsidise the installation of renewable energy fall short of supporting small businesses that often don’t own their premises.

						</p>

						<p className="text paragraph-margin flex-container-column">

							Another major issue for the FSB is a lack of information for business owners who want to make changes or persuade their landlords to do so. The same goes for finding grants or loans, which Bainton calls “a minefield that could lead them down the wrong road”.  She says that small businesses “might spend quite a lot of time investigating something only to find that they are not eligible for funding. It’s difficult to find the information that you need in such a crowded, confusing landscape and even more confusing if this is something new to you”. The FSB wants the UK government to open a helpline for businesses to get advice and information about government environmental schemes.

						</p>

						<p className="text paragraph-margin">

							For the time being, green entrepreneurs still have to find their own way through these challenges. Their common determination shows no sign of letting up just yet. “We're just riding the wave at the moment for as long as we can do it” says Deri Reed.

						</p>

						<p id="last-paragraph" className="text paragraph-margin flex-container-column">

							It’s a choice to run environmentally-sustainable businesses and the owners seem happy with that choice, despite these challenges. “There is one lady who comes here three days every week just to hug people” Reed says, looking around his restaurant. “She comes in this morning just for hugs. She hugs everyone because it’s a nice place to be”.

						</p>


					</section>








				</main>


			</div>


			);

		return result;




	}
}
