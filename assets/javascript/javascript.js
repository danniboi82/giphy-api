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
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=nRGB4uWDK4c3ebx5sl2CWHeh6Yj6Mh2H&limit=10";
    //Variable to hold user input     
    var userSearch = $("#animalSearch").val();
    $("#buttons").append("<button>" + userSearch + "</button>");
    
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

        });

    console.log(userSearch);
});




//==============================================================================================
//onClick to buttons tag to append images to #animalImages div 
$("button").on("click", function () {
    $("#animalImages").append("<img>" + response.data.image + "<img>");
})



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