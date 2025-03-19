var swiper = new Swiper(".main_swipper", {
    slidesPerView: 1,
    spaceBetween: 14,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
          600: {
              slidesPerView: 2,
          },
          880: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          2200: {
              slidesPerView: 5,
          },
      },
  });


  var swiper = new Swiper(".offer_swipper", {
    slidesPerView: 1.5,
    spaceBetween: 9,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
            650: {
              slidesPerView: 1.5,
              spaceBetween: 9,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            950: {
              slidesPerView: 3,
              spaceBetween: 20,
            }
        },
  });


  var swiper = new Swiper(".category_swipper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      centeredSlides: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
       
          800: {
            spaceBetween: 24,
          },
      },

  });


  var swiper = new Swiper(".advertise_swipper", {
    slidesPerView: 1.2,
    spaceBetween: 18,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
          750: {
              slidesPerView: 2,
          },
          800: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
          2200: {
              slidesPerView: 4,
          },
      },
  });