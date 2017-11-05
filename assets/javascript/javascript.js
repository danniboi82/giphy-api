/*
api key :    nRGB4uWDK4c3ebx5sl2CWHeh6Yj6Mh2H

HOST:        api.giphy.com

PATH:        GET /v1/gifs/search

*/




//OnClick to clear search results
$("#clear").on("click", function () {
    $("#buttons").html("");
    $("#animalSearch").html("");
    $("#searchResult").html("");
});


//================================================================================================
//onClick to post userSearch as input and append buttons to #buttons 
$("#search").on("click", function () {
    //URL variable to hold 
    var queryURL;
    //Variable to hold user input     
    var userSearch = $("#animalSearch").val();
    //gets #button and adds button of user search 
    $("#buttons").append("<button>" + userSearch + "</button>");
});





//==============================================================================================
//onClick to buttons tag to append images to #animalImages div 
$("button").on("click", function () {
    userSearch = $("#animalSearch").val();
    
    queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=nRGB4uWDK4c3ebx5sl2CWHeh6Yj6Mh2H&limit=25";
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
//                $("#animalImage").prepend
                $("img").attr("src", results[i].images.original.url);

                animalDiv.append(p);
                animalDiv.prepend(animalGif);
                $("#animalImage").prepend(animalDiv);
            }
        })

});

console.log(userSearch);









//==============================================================================================
//onClick to img tags 
$("img").on("click", function () {
    if (state == "still") {
        $(this).attr("src", $(this).data("animate"));
        $(this).attr("data-state", "still");
    } else {
        $(this).attr("src", $(this).data("still"));
        $(this).data("state", "still");
        console.log("Switched state: " + $(this).data("state"));

    }

});