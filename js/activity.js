$(document).ready(function () {
  $("td").on("click", function () {
    //select data cell
    var content = $(this).text();

    if (content != "Not Avaliable") {
      $(this).toggleClass("tdhighlight"); //add or remove cell when selected

      if ($(this).hasClass("tdhighlight")) {
        //check if selected cell has class
        $("displaySelected").css("visibility", "visible"); //make display box visible
        $("displaySelected").css("margin-top", "2em"); //add space above display box
        $("#result").append("<p>" + content + "</p>"); //add child element with contents of cell
      } else {
        //if selectedd cell dont have class
        $("#result p:contains(" + content + ")").remove(); //remove child element

        if ($("#result").has("p").length == false) {
          //checkif there are any child elements within parent
          $("displaySelected").css("visibility", "hidden"); //make display box hidden
          $("displaySelected").css("margin-top", "0"); //remove spaces above display box

          if ($(this).hasClass("tdhighlight")) {
             var index = $( "td" ).eq( 1 ).index( this );
            $ (content).text("at" + index);
          }
        }
      }
    }
  });
});
