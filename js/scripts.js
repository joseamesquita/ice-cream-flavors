$(document).ready(function() {
      var flavors = ["Strawberry", "Chocolate", "Vanilla", "Cherry", "Pineapple", "Oreo"];
      flavors.forEach(function(flavor){
        document.getElementById("flavs").innerHTML += flavor + "<br>";
        // ("$li").append(flavor);

      });
       
  });