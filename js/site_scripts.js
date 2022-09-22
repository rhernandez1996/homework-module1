//partners

      var photos = []; //Declare an empty array to store img element
      var fileNames = []; //Declare an empty element to store file names
      var imageList = []; //Declare an empty array to store html list that contain an image
      var image; //Declare an empty variable to store the assembled list code
      var openList = "<li class='partner'>"; //Declare a variable to contain open list tag
      var closeList = "</li>"; //Declare a variable to contain a close list tag

      //Create loop to create 6 images starting with index of 0
      for (var i = 0; i < 6; i++) {
        fileNames.push("partner" + (i + 1));
        photos.push("<img src='images/partners/" + fileNames[i] + ".png'>"); //Assemble file name into image element and store in an array
        image = openList + photos[i] + closeList; //Assemble image element from array with list
        imageList.push(image); //Store(push) the assembled list codes into an array
      }
      //Display all six image codes stored in the array
      document.getElementById("partners").innerHTML = imageList.join(" "); //.join (" ") to get rid of ,
