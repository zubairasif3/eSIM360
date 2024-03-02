const navbar = document.querySelector(".navbar");
const topBtn = document.getElementById("topBtn");
const navbarMenu = document.querySelector(".navbar-collapse");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const closeNavLink = document.querySelectorAll(".close_nav");


// Add click event listener to each nav link
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    // Remove active class from all nav links
    navLinks.forEach(function (link) {
      link.classList.remove("active");
    });

    // Add active class to the clicked nav link
    this.classList.add("active");
  });
});

// CLOSE NAVBAR MENU WHEN USER CLICK ON NAV LINK
closeNavLink.forEach((element) => {
  element.addEventListener("click", () => {
    navbarMenu.classList.remove("show");
  });
});

// TOP BTN ANIMATION

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    topBtn.classList.add("icon-animate");
  } else {
    topBtn.classList.remove("icon-animate");
  }
});

const scrollAnimation = () => {
  const windowHeight = window.innerHeight;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientScroll = document.documentElement.scrollTop;
  const currentScroll = (clientScroll / (scrollHeight - windowHeight)) * 100;

  const gradientColor = `conic-gradient(#2fbf71 ${currentScroll}%, #ffffff1a ${currentScroll}%)`;

  // Apply the gradient background to the button
  topBtn.style.background = gradientColor;
};

// Add event listener to update the gradient on scroll
window.addEventListener("scroll", scrollAnimation);

// SWIPER JS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    380: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// FILTER BUTTONS SECTION
const filterBtn = document.querySelectorAll(".filter_btn button");
console.log(filterBtn);

filterBtn.forEach((element) => {
  element.addEventListener("click", () => {
    filterBtn.forEach(element => {
      return element.classList.remove('active')
    })
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    } else {
      element.classList.add("active");
    }
  });
});



// DEVICE BUTTON
const deviceBtn = document.querySelectorAll('.device_filter_btn button');
console.log(deviceBtn);

deviceBtn.forEach(element => {
  element.addEventListener('click' , () => {
    deviceBtn.forEach(element => element.classList.remove('active'))
    element.classList.add('active')
  })
})

$(window).scroll(function() {
  $(".anm_mod").each(function() {
    const position = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll > position - windowHeight) {
      $(this).addClass("active");
    }
    // if (scroll < 100) {
    //   $(this).removeClass("active");
    // }
  });
});
$(window).scroll();