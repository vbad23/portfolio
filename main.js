$(document).ready(function() {
  $(".about-info").css("display", "flex").hide();
  $("#about").click(function() {
    $(".about-info").toggle().fade(500);
  });
});
