//==================
// ARTICLE JS - CONTAINS REACT COMPONENT RENDERING ARTICLE ON PAGE 
//==================


// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }



// ====================
// IMPORTS 
// ====================

import ScrollMagic from 'scrollmagic/uncompressed/ScrollMagic.js';
import React from 'react';
import ReactDOM from 'react-dom';




// REWRITE THIS AS A SEPARATE JS FILE AND RENDER A REACT COMPONENT 



export const triggerArticle = function() {



	class Article extends React.Component {



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

		  var controller = new ScrollMagic.Controller();
		  var scene = new ScrollMagic.Scene({triggerElement: document.querySelector("#trigger1")})
		  					// trigger animation by adding a css class
		  					.setClassToggle("#animate1", "zap")
		  					// .addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
		  					.addTo(this.controller);

		  var scene = new ScrollMagic.Scene({triggerElement: document.querySelector("#trigger1")})
		  					// trigger animation by adding a css class
		  					.setClassToggle("#animate2", "zip")
		  					//.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
		  					.addTo(this.controller);

		  var scene = new ScrollMagic.Scene({triggerElement: document.querySelector("#trigger1")})
		            // trigger animation by adding a css class
		            .setClassToggle("#animate3", "appear")
		            //.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
		            .addTo(controller);
		  // var pin_image = function(){
		  var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 270})
		                    .setPin("#header")
		                    // .addIndicators({name: "1 (duration:3000)"})
		                    .addTo(this.controller);

		};


		controller = new ScrollMagic.Controller();


		scene = new ScrollMagic.Scene({triggerElement: document.querySelector("#trigger1")})
          // trigger animation by adding a css class
          .setClassToggle("#flip_cloud_content", "flipped")
          //.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
          .addTo(this.controller);
		scene = new ScrollMagic.Scene({triggerElement: document.querySelector("#trigger1")})
		          // trigger animation by adding a css class
		          .setClassToggle("#flip_cloud_content_customer", "flipped1")
		          //.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
		          .addTo(this.controller);
		scene = new ScrollMagic.Scene({triggerElement: document.querySelector("#trigger1")})
		          // trigger animation by adding a css class
		          .setClassToggle("#flip_cloud_content_marketing", "flipped2")
		          //.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
		          .addTo(this.controller);


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
					<header>

						<img id="header-image" src={require('./images/article-top.png')}  alt="two people are thinking about business" onLoad={() => {this.showSlides(this.slideIndex) ; this.scroll()} }/>

					</header>

					<main>


				<div id="trigger1" className="spacer s0"></div>
				<div id="animate1" className="box1 red">
					<p id="headline">Business</p>
					
				</div>
				

				<div id="trigger2" className="spacer s1"></div>
				<div id="animate2" className="box2 red">
					<p id="headline_change">Rethinking business</p>
			    <p id="sub_head">Why it is extremely difficult <br/> to run an environmentally sustainable small business?</p>
					
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


				<section className="thin flex-container-column text-centralise">

					<p className="text paragraph-margin">

						Lorem ipsum dolor sit amet, virtute concludaturque nec ad. In melius graecis eam, eos an alii iriure voluptua, no convenire intellegam mea. Eu ferri petentium ius. Usu virtute mediocritatem ne.

					</p>


					<p className="text paragraph-margin">

						Cu eos prima elitr regione. Has nullam oblique at, audire vidisse pro in. At eos choro torquatos, te scaevola inimicus ius, ad commune scaevola definitiones vix. Vim te magna velit sapientem, facer putant cu cum, timeam necessitatibus et eum. Phaedrum iudicabit ut vel. Verear recusabo lobortis mea ad, pertinax periculis posidonium ne per.

					</p>

					<p className="text paragraph-margin flex-container-column">

						Agam laudem definiebas his ne, vis no inani tacimates. Diceret delicatissimi id eam, cibo prompta noluisse vim cu. Ex vim menandri indoctum tincidunt, duo ludus latine id. Qui labore oporteat an, alienum necessitatibus has an. Has id scaevola complectitur, et vix inani impedit, cum ea possim habemus repudiandae.

					</p>

					<p className="text paragraph-margin flex-container-column">

						Mea te postea nostro tibique, mea in ubique noster atomorum. Ei nonumy scribentur mea, tota delenit his no. Elitr scaevola interpretaris ut est, sed te graeci scriptorem. Duo ex possit facete vituperata, ad velit altera sadipscing sea. Vidit decore offendit no nec, ea appareat percipitur complectitur sed. Eos tibique definitionem eu.

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

					<div>
						<span className="dot" onClick={() => this.currentSlide(1) }></span>
						<span className="dot" onClick={() => this.currentSlide(2) }></span>
						<span className="dot" onClick={() => this.currentSlide(3) }></span>
					</div>

				</section>

			</main>
				</div>


				);


			return result;



		}
	}


	// Call to render the page
	ReactDOM.render(
	  <Article />,
	  document.querySelector('#root')
	);



}




// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }






// var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 270})
//                   .setPin("#header-image-iphone")
//                   //.addIndicators({name: "1 (duration:3000)"})
//                   .addTo(controller);
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
//           // trigger animation by adding a css class
//           .setClassToggle("#flip_header_iphone", "flipped4")
//           //.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
//           .addTo(controller);
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 20})
//           .setPin("#header_for_iphone")
//           //.addIndicators({name: "1 (duration:3000)"})
//           .addTo(controller);
