$(document).ready(function() {
  //slide class has to be initialized to default value
  $("#hamburger-helper").addClass("slideDown");
  $("#hamburger").on("click", function(event) {
    event.preventDefault();

    if ($("#hamburger").data("toggle") === "true") {
      $("#hamburger-helper").removeClass("slideDown");
      $("#hamburger-helper").addClass("navOut");
      var transition = setTimeout(function() {
        $("#hamburger-helper").css("display", "none");
        $("#hamburger").data("toggle", "false");
        console.log("changed to false");
        clearTimeout(transition);
      }, 350);
    } else {
      $("#hamburger-helper").removeClass("navOut");
      $("#hamburger-helper").addClass("slideDown");
      $("#hamburger-helper").css("display", "flex");
      $("#hamburger").data("toggle", "true");
      console.log("changed to true");
    }
  });
});