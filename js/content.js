window.onload = function() {
  $("html,body").animate({ scrollTop: 0 }, "1");

  var a = $("#about_wrap").offset().top;
  var b = a - $(window).height();
  $(window).scroll(function() {
    if ($(window).scrollTop() > b) {
      $("#about_wrap").removeClass("invisible");
      $("#about").show();
    }
  });

  var c = $("#date_wrap").offset().top;
  var d = c - $(window).height();
  $(window).scroll(function() {
    if ($(window).scrollTop() > d) {
      $("#date_wrap").removeClass("invisible");
      $("#date").show();
    }
  });

  var e = $("#performer_wrap").offset().top;
  var f = e - $(window).height();
  $(window).scroll(function() {
    if ($(window).scrollTop() > f) {
      $("#performer_wrap").removeClass("invisible");
      $("#performer").show();
    }
  });

  var g = $("#share_wrap").offset().top;
  var h = g - $(window).height();
  $(window).scroll(function() {
    if ($(window).scrollTop() > h) {
      $("#share_wrap").removeClass("invisible");
      $("#share").show();
    }
  });
};
