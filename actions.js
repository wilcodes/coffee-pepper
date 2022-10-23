/*Fade in and Fade out for the Heading and sub description */

$(document).ready(function () {
  setTimeout(() => {
    $(".main-p").fadeOut("slow");
  }, 300);

  setTimeout(() => {
    $(".main-p").fadeIn("slow");
  }, 300);
});

$(document).ready(function () {
  setTimeout(() => {
    $(".main-h1").fadeOut("slow");
  }, 300);

  setTimeout(() => {
    $(".main-h1").fadeIn("slow");
  }, 300);
});

$(document).ready(function () {
  setTimeout(() => {
    $(".main-p").fadeOut("slow");
  }, 300);

  setTimeout(() => {
    $(".main-p").fadeIn("slow");
  }, 300);
});

$(document).ready(function () {
  setTimeout(() => {
    $(".main-h1").fadeOut("slow");
  }, 300);

  setTimeout(() => {
    $(".main-h1").fadeIn("slow");
  }, 300);
});

$(".btn btn-primary").click(function () {
  $(this).toggleClass("card");
  $(this).parent().find(".arrow").toggleClass("arrow-animate");
  $(this).parent().find(".content").slideToggle(280);
});

/*Accordion Logic */

/*Show, Hide and toggle Logic*/

$(document).ready(function () {
  $("#hide").click(function () {
    $("#hideImage").toggle(700);
  });
});

$(document).ready(function () {
  $("#show").click(function () {
    $("#showImage").toggle(700);
  });
});

$(document).ready(function () {
  $("#toggle").click(function () {
    $("#toggleImage").toggle(600);
  });
});
