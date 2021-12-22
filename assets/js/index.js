$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(".side-menu").css({ width: "100%", transition: "0.3s" });
    $(".side-menu-item").addClass("animate__fadeInRight");
  });
  $(".fa-times").click(function () {
    $(".side-menu").css({
      width: "0px",
      padding_left: "15px",
    });
    $(".side-menu-item").removeClass("animate__fadeInRight");
  });

  $(".categories").click(function () {
    $(".categories-dropdown").slideToggle();
  });

  $(window).scroll(function () {
    if (window.scrollY >= 650) {
      $(".nav").slideDown();
      $(".nav").addClass("sticky-top");
    } else if (window.scrollY < 650) {
      $(".nav").slideUp("fast");
    }
    if (window.scrollY <= 100) {
      $(".nav").addClass("d-none");
    } else {
      $(".nav").removeClass("d-none");
    }
  });

  const headerImages = [...document.querySelectorAll(".header-slider img")];

  $(".main-slider").owlCarousel({
    nav:true,
    responsive:{
      1024:{
        nav:false,
      } 
    },
    loop:true,
    dots:false,
    autoplay: true,
    autoplayTimeout:3000,
    items:1
  });

  $('.header-slider').owlCarousel({
    nav:true,
    loop:true,
    autoplay:true,
    animateOut: 'fadeOut',
    animateTimeout:5000,
    mouseDrag: false,
    touchDrag:false,
    items:1,
    onChange: (para)=>{
      const index = para.item.index - 1;
      console.log(index);
      headerImages.forEach((img, i)=>{
        if(i === index){
          $(img).css({transform: 'scale(1.03)'})
        }else{
          $(img).css({transform: 'scale(1.0)'})
        }
      })
    }
  });

  $('.owl-next').children().html('<i class="fas fa-long-arrow-alt-right fa-2x"></i>')
  $('.owl-prev').children().html('<i class="fas fa-long-arrow-alt-left fa-2x"></i>')
});
