$(document).ready(function() {
  if (sessionStorage.getItem("currentProcess") === "search") {
    toLatLng(sessionStorage.getItem("address"));
  } else if (sessionStorage.getItem("currentProcess") === "trails") {
    if (
      sessionStorage.getItem("trailArray") === undefined ||
      sessionStorage.getItem("trailArray") === ""
    ) {
      toLatLng(sessionStorage.getItem("address"));
    } else {
      makeTrailCards();
    }
  } else if (sessionStorage.getItem("currentProcess") === "nearby") {
    makeNearbyCards(sessionStorage.getItem("trailNum"));
  }
});
