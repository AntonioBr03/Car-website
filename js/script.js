$(document).ready(function () {
  // Select the cart icon container and dropdown element
  var cartIconContainer = $(".cart-icon-container");
  var cartDropdown = $("#cart-dropdown");

  // Attach click event listener to cart icon container
  cartIconContainer.click(function () {
    cartDropdown.toggleClass("cart-dropdown-hidden");
    cartDropdown.css({
      "background-color": "lightgray",
      "  overflow-y": " hidden",
    });
  });

  const WelcomeMessage = $("#WelcomeMessage");
  const WelcomeMessageTitle = $("#WelcomeSection h1");
  const ToTopBtn = $("#ScrollToTopBtn");
  const navbar = $(".navbar");
  const navbarBrand = $(".navbar-brand");
  const title = $(".navbar #TopWIndowTitle");
  $(window).scroll(function () {
    const scrollPosition = $(window).scrollTop();
    if (scrollPosition >= 300) {
      WelcomeMessage.css("animation", "ShowWelcome 1s forwards");
    }
    if (scrollPosition >= 100) {
      WelcomeMessageTitle.css("animation", "ShowWelcomeTitle 1s forwards");
    }

    if (scrollPosition >= 600) {
      ToTopBtn.css("animation", "AppendScrollToTopBtn 0.6s forwards"); // Show grip lines when scrolled past the threshold
    } else {
      ToTopBtn.css("animation", "none");
    }
    // Handle scroll positions and animations
    if (scrollPosition >= 600) {
      // If the user is scrolling down and crosses the 300 mark
      navbar.css({
        animation: "NavInScroll 1.2s forwards",
        "animation-timing-function": "ease",
      });
      navbarBrand.hide();
      title.show();
    } else if (scrollPosition <= 600) {
      // If the user is scrolling up and crosses the 300 mark in the opposite direction
      navbar.css("animation", "none");
      title.hide();
      navbarBrand.show();
    }

    const whychooseusphoto = $("#WhyChooseUsDiv img");
    const reasondiv2 = $("#ReasonDiv2");
    const reasondiv1 = $("#ReasonDiv1");

    if (scrollPosition >= 1000) {
      whychooseusphoto.css({
        animation: "WhyChooseUsShowPhoto 1.3s forwards ease-in-out",
      });
      reasondiv2.css({
        animation: "ShowReasonDiv2 0.8s forwards ease-in-out",
        "animation-delay": "1.3s",
      });
      reasondiv1.css({
        animation: "ShowReasonDiv1 0.8s forwards ease-in-out",
        "animation-delay": "0.8s",
      });
    }
    const div2 = $("#div2");

    if (scrollPosition >= 1250) {
      div2.css("background-image", " url(../bodyPhotos/2.jpg)");
    } else {
      div2.css("background-image", " url(../bodyPhotos/1.jpg)");
    }
    if (scrollPosition >= 1500) {
      statnum.each(function () {
        startCount($(this));
      });
    }
  });

  const ChevronUp = $(".fa-chevron-up");

  $("#ScrollToTopBtn").hover(
    function () {
      ChevronUp.css({
        transform: "translateY(-1.5vh)",
        transition: "transform 0.5s ease",
      });
    },
    function () {
      ChevronUp.css("transform", "translateY(0vh)");
    }
  );

  ToTopBtn.click(function () {
    window.scrollTo("top", 0);
  });

  const statnum = $(".stat-number");

  function startCount(el) {
    const goal = parseInt(el.data("target"), 10);
    let currentValue = parseInt(el.text(), 10);
    const incrementStep = Math.ceil(goal / 100);
    const interval = setInterval(() => {
      currentValue += incrementStep;
      if (currentValue >= goal) {
        currentValue = goal;
        clearInterval(interval);
      }
      el.text(currentValue);
    }, 10);
  }
});
