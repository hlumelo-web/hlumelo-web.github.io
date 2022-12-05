// Smooth scrolling to anchor links
$('a[href^="#"]').click(function(e) {
    e.preventDefault();
    var target = this.hash;
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });
  
  // Responsive navigation menu
  function toggleMenu() {
    var nav = document.getElementById("nav");
    if (nav.className === "topnav") {
      nav.className += " responsive";
    } else {
      nav.className = "topnav";
    }
  }
