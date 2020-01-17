$(function() {
  $(window).on("load", function() {
    $("#loading")
      .delay(1000)
      .fadeOut("slow");
    $("body")
      .delay(2000)
      .removeClass("noscroll");
  });
  function loaderClose() {
    $("#loading").fadeOut("slow");
    $("body").removeClass("noscroll");
  }
  setTimeout(loaderClose, 10000);
});
