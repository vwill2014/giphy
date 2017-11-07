
$("#dog-button").on("click", function(){

var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dfysTSN10EXofldwYK0wMt3DYCzyLSK4&tag=dogs&rating=G&limit=10;"



$.ajax({

url: queryURL,
methond: "GET"

}).done(function(response){

var imageUrl = response.data.image_original_url;

var dogImage = $("<img>");

dogImage.attr("src", imageUrl);
dogImage.attr("alt", "dog image");

$("#images").prepend(dogImage);


});


});





// var animals = ["cats", "dogs", "hamsters", "birds"];

// function renderButtons(){

// $("animal-view").empty();

// for (var i = 0; i <animals.length; i++);{


// var a = $("<button>");
// a.addClass("animal");
// a.attr()





