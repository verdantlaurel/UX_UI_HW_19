// PRELOADER

function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 1800);



// SLIDESHOW

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
    



// ANCHOR LINK OFFSET

// function actually applying the offset
function offsetAnchor() {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY -120);
    }
  }
  
  // captures click events of all <a> elements with href starting with #
  $(document).on('click', 'a[href^="#"]', function(event) {
    // click events are captured before hashchanges
    // timeout causes offsetAnchor to be called after the page jump
    window.setTimeout(function() {
      offsetAnchor();
    }, 0);
  });
  
  // set the offset when entering page with hash present in the url
  window.setTimeout(offsetAnchor, 0);
  
