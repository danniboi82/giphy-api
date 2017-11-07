
//OnClick to clear search results
$("#clear").on("click", function () {
    $("#buttons").html("");
    $("#animalSearch").html("");
    $("#searchResult").html("");
    $("#animalImage").html("");
});

//================================================================================================
//onClick to post userSearch as input and append buttons to #buttons 
$("#search").on("click", function () {
    //URL variable to hold 
    var queryURL;
    //Variable to hold user input     
    var userSearch = $("#animalSearch").val();
    //gets #button and adds button of user search 
    //append로  새버턴에 id추가 가능한가??? 
    $("#buttons").append("<button>" + userSearch + "</button>");
    console.log(userSearch);
});

//==============================================================================================
//onClick to buttons tag to append images to #animalImages div 
$("#buttons").on("click", function () {
    userSearch = $("#animalSearch").val();
    
    queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=nRGB4uWDK4c3ebx5sl2CWHeh6Yj6Mh2H&limit=10";
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .done(function (response) {
            console.log(response);
            // Storing an array of results in the results variable
            var results = response.data;
            for (var i = 0; i < results.length; i++) {

                var animalDiv = $("<div>");
                var p = $("<p>").text("Rating is : " + results[i].rating);

                var animalGif = $("<img>");
                animalGif.attr("src", results[i].images.fixed_height_still.url);
                animalGif.attr("data-still", results[i].images.fixed_height_still.url);
                animalGif.attr("data-animate", results[i].images.fixed_height.url);
                animalGif.attr("data-state", "still");
                animalGif.attr("class", "gif");
                
                animalDiv.append(p);
                animalDiv.prepend(animalGif);
                $("#animalImage").prepend(animalDiv);
                
//==============================================================================================
//onClick to img tags 
                $(".gif").on("click", function () {
                    var state = $(this).data("state");
                    
                    if (state == "still") {
                        $(this).attr("src", $(this).data("animate"));
                        $(this).attr("data-state", "still");
                    } else {
                        $(this).attr("src", $(this).data("still"));
                        $(this).attr("data-state", "still");
               
                    }
                
                });
            }
    
        })

});





