$(document).ready(function ($) {
  "use strict";

  // Preloader
  $(window).on("load", function () {
    $("#preloader").delay(600).fadeOut();
  });

  // Go Top Button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#go-top").fadeIn();
    } else {
      $("#go-top").fadeOut();
    }
  });
  $("#go-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 600);
  });
});
