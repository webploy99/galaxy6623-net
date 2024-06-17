var btn = $(".Btn-backtotop1");
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
  


const FunVisible = () => {
  if (window.pageYOffset > 250) {
    $("header").addClass("is-sticky");
  } else {
    $("header").removeClass("is-sticky");
  }
};
window.addEventListener("scroll", FunVisible);

const swiper = new Swiper('.swiper1', {
    loop: true,
    slidesPerView: '1',
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
const swiper2 = new Swiper('.swiper2', {
    loop: true,
    slidesPerView: '1',
    pagination: {
      el: '#swiper-pagination2',
    },
    navigation: { 
      nextEl: '#swiper-button-next2',
      prevEl: '#swiper-button-prev2',
    },
  
  });

  $(".dropdown-menu-mobile").on("click", function () {
    $(this).closest("li").toggleClass("active");
    $(this).closest('li').find('.dropdown-menu-mobile-informations').toggleClass('hidden');
    $(this).find("svg").toggleClass("rotate-180");
  });