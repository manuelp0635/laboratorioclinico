$(document).ready(function () {
    if ($(window).width() > 1025) {
      $('#large-video').attr('autoplay', 'autoplay');
    } else {
      $('#small-video').attr('autoplay', 'autoplay');
    }
  });