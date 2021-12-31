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

  $(window).scroll(function () {
    if (window.scrollY >= 350) {
      $(".nav").slideDown();
      $(".nav").addClass("sticky-top");
    } else if (window.scrollY < 350) {
      $(".nav").slideUp("fast");
    }
    if (window.scrollY <= 100) {
      $(".nav").addClass("d-none");
    } else {
      $(".nav").removeClass("d-none");
    }
  });


  $('.description').click(function(){
      $('.descriptionContent').removeClass('d-none').siblings('.cards').addClass('d-none');;
    $(this).addClass('active').siblings().removeClass('active');
  })

  $('.information').click(function(){
    $('.informationContent').removeClass('d-none').siblings('.cards').addClass('d-none');;
    $(this).addClass('active').siblings().removeClass('active');
  })  

  $('.review').click(function(){
    $('.reviews').removeClass('d-none').siblings('.cards').addClass('d-none');;
    $(this).addClass('active').siblings().removeClass('active');
  }) 
});
