$(document).ready(function() {
  $("#mission-btn").on("click", function(event) {
    console.log("click");
    event.preventDefault();
    $("#mission-foldable").toggle();
  });
  $("#devteam-btn").on("click", function(event) {
    event.preventDefault();
    console.log("click")
    $("#devteam-foldable").toggle();
  })
});