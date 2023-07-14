function checkPages() {
  let links = document.querySelectorAll('.custom-navbar .nav-link');
  let currentLocation = window.location.pathname.split('/').pop().split('.')[0];

  for (let link of links) {
    let dataActive = link.getAttribute('data-active');
    if (dataActive === currentLocation) {
      link.classList.add('active');
      break; // Exit the loop after finding the active link
    }
  }
}

// Call the function to check the active page on page load
checkPages();

  
  //Collapsible
  function collapsibleShow() {
    var button = event.target;
    var content = button.nextElementSibling;
    button.classList.toggle("active");
    content.classList.toggle("collapsible-content-active");
  }
  
  //Front Page Slideshow
  var i = 0;
  var timer;
  var images = [
    "./assets/images/resizedtransition/Barrette.jpg",
    "./assets/images/resizedtransition/pebbletec.jpg",
    "./assets/images/resizedtransition/belgardpic.jpg",
    // Add the relative paths for the remaining images
  ];
  var slide = document.getElementById("slide");
  
  function changeImage() {
    console.log("Changing image"); // Debug message
    console.log("Current index:", i); // Debug message
    console.log("Current image path:", images[i]); // Debug message
  
    slide.style.opacity = 0; // Set initial opacity to 0
  
    setTimeout(function () {
      slide.src = images[i];
      slide.style.opacity = 1; // Fade in the image by setting opacity to 1
    }, 500); // Wait for 500 milliseconds before changing the image and fading in
  
    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }
  
    timer = setTimeout(changeImage, 3500); // Adjust the delay to match the fade duration
  }
  
  function stopShow() {
    clearTimeout(timer);
  }
  
  function runShow() {
    console.log("Slideshow started"); // Debug message
    changeImage();
  }
  
  document.addEventListener("DOMContentLoaded", runShow);
  
 //Brand Slideshow
var i = 0;
var timer;
var images = [
  "./assets/images/resizedtransition/Barrette.jpg",
  "./assets/images/resizedtransition/pebbletec.jpg",
  "./assets/images/resizedtransition/belgardpic.jpg",
  // Add the relative paths for the remaining images
];
var slide = document.getElementById("slide");

function changeImage1() {
  console.log("Changing image"); // Debug message
  console.log("Current index:", i); // Debug message
  console.log("Current image path:", images[i]); // Debug message

  slide.style.opacity = 0; // Set initial opacity to 0

  setTimeout1(function () {
    slide.src = images[i];
    slide.style.opacity = 1; // Fade in the image by setting opacity to 1
  }, 500); // Wait for 500 milliseconds before changing the image and fading in

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  timer = setTimeout1(changeImage, 3500); // Adjust the delay to match the fade duration
}

function stopShow1() {
  clearTimeout(timer);
}

function runShow1() {
  console.log("Slideshow started"); // Debug message
  changeImage();
}

document.addEventListener("DOMContentLoaded", runShow1);
