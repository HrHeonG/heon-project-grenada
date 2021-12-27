console.log("Next Slide :-)")

setTimeout(function(){console.log(document.getElementById("slides"))}, 5000)

if (document.getElementById("slides")) {
  console.log("Next Slide :-)")
  var top_slide_element = document.getElementsByClassName("caption-green")[0]
  top_slide_element.style.marginLeft = "0px";
  var slides = document.querySelectorAll('.slide');
  var currentSlide = 0;

  var captionSlides = document.querySelectorAll('.main-caption-text');
  var currentCaptionSlide = 0;

  var slideInterval = setInterval(nextSlide,5000);

  function nextSlide() {
      console.log("Next Slide :-)")
      slides[currentSlide].className = 'slide';
      currentSlide = (currentSlide+1)%slides.length;
      slides[currentSlide].className = 'slide showing';

      var oldCaptionSlide = currentCaptionSlide
      currentCaptionSlide = (currentCaptionSlide+1)%captionSlides.length;

      captionSlides[currentCaptionSlide].style.marginLeft = "0px"
      
      captionSlides[currentCaptionSlide].style.zIndex = 4
      // captionSlides[currentCaptionSlide].style.transition ="margin-left 2s";
      // captionSlides[currentCaptionSlide].style.marginLeft = "200px";

      // captionSlides[currentCaptionSlide].classList.toggle(".slide-onscreen")

      setTimeout(function(){
        captionSlides[oldCaptionSlide].style.zIndex = 1
        captionSlides[oldCaptionSlide].style.marginLeft = "100%"
        captionSlides[currentCaptionSlide].style.zIndex = 3
      }, 3000)
  }

}
