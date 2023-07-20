
//Check Pages
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


