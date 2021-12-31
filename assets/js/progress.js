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

  $(".progressbar1").LineProgressbar({
    percentage: 95,
    fillBackgroundColor: "#f34f3f",
    height: 5,
    duration: 3000,
  });
  $(".progressbar2").LineProgressbar({
    percentage: 80,
    fillBackgroundColor: "#f34f3f",
    height: 5,
    duration: 3000,
  });
  $(".progressbar3").LineProgressbar({
    percentage: 55,
    fillBackgroundColor: "#f34f3f",
    height: 5,
    duration: 3000,
  });

});
