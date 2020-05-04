$(document).ready(function ($) {
  "use strict";

  // Preloader
  $(window).on("load", function () {
    $("#preloader").delay(600).fadeOut();
  });

  // Sticky Nav
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $("#head").addClass("lt-bg");
      $("#head a").addClass("dk-co");
    } else {
      $("#head").removeClass("lt-bg");
      $("#head a").removeClass("dk-co");
    }
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
