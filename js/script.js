$(document).ready(function ($) {
  "use strict";

  // Preloader
  $(window).on("load", function () {
    $("#preloader").delay(600).fadeOut();
  });

  // Scroll
  $("body").scrollspy({
    target: "#nav",
    offset: $(window).height() / 2,
  });

  $("#nav .main-nav a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body").animate({ scrollTop: $(this.hash).offset().top }, 600);
  });

  // Go Top Button
  $("#go-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 600);
  });

  // Nav Collapse
  $("#nav .nav-collapse").on("click", function () {
    $("#nav").toggleClass("open");
  });

  $(".has-dropdown a").on("click", function () {
    $(this).parent().toggleClass("open-drop");
  });

  $(window).on("scroll", function () {
    var wScroll = $(this).scrollTop();
    wScroll > 1 ? $("#nav").addClass("fixed-nav") : $("#nav").removeClass("fixed-nav");
    wScroll > 700 ? $("#go-top").fadeIn() : $("#go-top").fadeOut();
  });
});
