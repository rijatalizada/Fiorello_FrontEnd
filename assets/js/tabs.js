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

  $(".cards-button").click(function () {
    $(this).addClass("active").siblings("button").removeClass("active");
    if ($(this).hasClass("services")) {
      $(this)
        .parent()
        .siblings(".tab-body")
        .children(".services-body")
        .removeClass("d-none")
        .siblings()
        .addClass("d-none");
    } else if ($(this).hasClass("shop")) {
      $(this)
        .parent()
        .siblings(".tab-body")
        .children(".shop-body")
        .removeClass("d-none")
        .siblings()
        .addClass("d-none");
    } else if ($(this).hasClass("product")) {
      $(this)
        .parent()
        .siblings(".tab-body")
        .children(".product-body")
        .removeClass("d-none")
        .siblings()
        .addClass("d-none");
    }
  });

});
