/**
* Display top foldable by default
*/
$("#mission-foldable").show();

/**
* Hide devteam foldable by default 
*/
$("#devteam-foldable").hide();

$(document).ready(function() {
  $("#misson-btn").on("click", function(event) {
    event.preventDefault();
    $("#mission-foldable").toggle();
  });
  $("#devteam-btn").on("click", function(event) {
    event.preventDefault();
    $("#devteam-foldable").toggle();
  })
});