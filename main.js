
var d = new Date();
var year = (d.getFullYear()).toString();

function showAbout() {
  $(".about-text").css("opacity", "1");
}

function showWebsites() {
  $(".websites-text").css("opacity", "1");
}

function showGithub() {
  $(".github-text").css("opacity", "1");
}

function hideAbout() {
  $(".about-text").css("opacity", "0");
}

function hideWebsites() {
  $(".websites-text").css("opacity", "0");
}

function hideGithub() {
  $(".github-text").css("opacity", "0");
}

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
    $(".background").css("background-image", 'url("images/traverse-bw.jpg")');
    $(".background").css("filter", "blur(5px)");
  });

  $("#about").click(function() {
    showAbout();
    hideWebsites();
    hideGithub();
  });

  $("#websites").click(function() {
    hideAbout();
    showWebsites();
    hideGithub();
  });

  $("#github").click(function() {
    hideAbout();
    hideWebsites();
    showGithub();
  });

  // Resets background when initials are clicked
  $(".initials").click(function() {
    $(".background").css("background-image", 'url("images/traverse.jpg")');
    $(".background").css("filter", "blur(0px)");
    hideAbout();
    hideWebsites();
    hideGithub();
  });
});
