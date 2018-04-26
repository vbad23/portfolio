
var d = new Date();
var year = d.getFullYear();

// On load
$( document ).ready(function() {
  $(".copyright").text("Copyright © " + year + " Vikram Badarinath - All Rights Reserved.");

  // Delayed appearance of full name
  setTimeout(function() {
    $(".name").css("opacity", "1");
    $(".first").css("margin-top", "390px");
    $(".last").css("margin-top", "292px");
  }, 2000);

  // Blur background on click
  $(".item").click(function() {
    $(".bg").css("background-image", 'url("../images/traverse-bw.jpg")');
    $(".bg").css("filter", "blur(5px)");
  });

  // Resets background when initials are clicked
  $(".initials").click(function() {
    $(".bg").css("background-image", 'url("../images/traverse.jpg")');
    $(".bg").css("filter", "blur(0px)");
  });
});
