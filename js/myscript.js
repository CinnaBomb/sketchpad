 $(document).ready(function() {
   var gridSize = 16;
   var color = "black";
   $(".box").append("<table></table>");
   makeGrid(gridSize);

   //brush
   $(document).on("mouseenter", "td", function() {
     if (color === "random") {
       $(this).css({
         "background-color": randomColor(),
         "opacity": "1"
       });
     } else if (color === "fade") {
       var opacity = Number($(this).css("opacity"));
       if (opacity < 1) {
         opacity = opacity + 0.1;
         $(this).css({
           "background-color": "black",
           "opacity": opacity
         });
       }
     } else if (color === "white") {
       $(this).css({
         "background-color": "rgba(255,255,255,0)",
         "opacity": "0"
       });

     } else {
       $(this).css({
         "background-color": "black",
         "opacity": "1"
       });
     }

   });

   //New Grid
   $("#new").click(function() {
     gridSize = prompt("Pick a number between 16 and 40");
     if (gridSize >= 16 && gridSize <= 40) {
       $("table").empty();
       makeGrid(gridSize);
       color = "black";
     } else {
       alert("You didn't pick a valid number between 16 and 40. Try again.");
     }
   });
   //Clear All
   $("#clear").click(function() {
     $("td").css("background-color", "white");
   });

   //brush colors
   $("#black").click(function() {
     color = "black";
   });

   $("#fade").click(function() {
     color = "fade";
   });

   $("#color").click(function() {
     color = "random";
   });

   $("#erase").click(function() {
     color = "white";
   });

 });

 function makeGrid(gridSize) {
   var pixels = Math.floor(500 / gridSize) + "px";

   for (var i = 0; i < gridSize; i++) {
     $("table").append("<tr></tr>");
     for (var j = 0; j < gridSize; j++) {
       $("tr:last-child").append("<td></td>");
     }
   }
   $("td").height(pixels);
   $("td").width(pixels);
   $("td").css("opacity", "0");
 }

 function randomColor() {
   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);
   var rgb = "rgb(" + r + "," + g + "," + b + ")";
   return rgb;
 }