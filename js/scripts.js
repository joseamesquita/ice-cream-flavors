$(document).ready(function () {
  $("#favorites").submit(function () {
    $("#hide").hide();
    var day = $("#day").val();
    var food = $("#food").val();
    var sport = $("#sport").val();
    var holiday = $("#holiday").val();

    var input = [day, food, sport, holiday];

    $("#favoriteList").append("<li>" + input[0] + "</li>");
    $("#favoriteList").append("<li>" + input[1] + "</li>");
    $("#favoriteList").append("<li>" + input[2] + "</li>");
    $("#favoriteList").append("<li>" + input[3] + "</li>");

    event.preventDefault();

    $("#hide").show();
    // $("#favoriteList").hide();

  });
  $("#iceCream").click(function () {
    var flavorss = ["strawberry", "vanilla", "chocolate", "oreo"];

    for (var i = 0; i <= flavorss.length - 1; i++) {
      $("#flavors").append("<li>" + flavorss[i].toUpperCase() + "</li>");
    };
  })

});