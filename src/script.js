// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "grid";
  dots[slideIndex-1].className += " active";
}

var scroll = function(){
  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
  					// trigger animation by adding a css class
  					.setClassToggle("#animate1", "zap")
  					// .addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
  					.addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
  					// trigger animation by adding a css class
  					.setClassToggle("#animate2", "zip")
  					//.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
  					.addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
            // trigger animation by adding a css class
            .setClassToggle("#animate3", "appear")
            //.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
            .addTo(controller);
  // var pin_image = function(){
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 270})
                    .setPin("#header")
                    // .addIndicators({name: "1 (duration:3000)"})
                    .addTo(controller);
};

scroll()

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
          // trigger animation by adding a css class
          .setClassToggle("#flip_cloud_content", "flipped")
          //.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
          .addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
          // trigger animation by adding a css class
          .setClassToggle("#flip_cloud_content_customer", "flipped1")
          //.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
          .addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
          // trigger animation by adding a css class
          .setClassToggle("#flip_cloud_content_marketing", "flipped2")
          //.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
          .addTo(controller);
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
var flip_header = function(){
  var header_phone_content = document.getElementById("header_phone_content")
  header_phone_content.classList.toggle('flipped4')
}
