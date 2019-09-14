// name, rating, price, image, address and url

// 'Submit' button on click event
$(".submit-btn").on("click", function() {

    // API call
var location = $("#input-address").val().trim();
var input = $("#input-food").val().trim();
var queryUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=40&location=" + location + "&term=" + input

var restaurants =[];
var selectedRestaurant;

$.ajax({
    url: queryUrl,
    method: "GET",
    contentType: "text/plain",
    headers: {
        "Authorization": "Bearer ywecqt0W3LheBcZHlrPN7UHTFXnNV0qEO6IUCGYoLDQYlhRcLMRv8XExahKsYaSJf5z5lvb0x0X4ox1Go-PdDX4oRf99SMrEVpbDwrpkiKPsWrTZpdDGL_VX0LZ5XXYx"
    },
   }).then(function(response){
    
    // console.log(response);
    for ( var i = 0; i < response.businesses.length; i++) {
    restaurants.push(response.businesses[i])
    };
    console.log(restaurants[selectedRestaurant].name);
    console.log(restaurants[selectedRestaurant].rating);
    console.log(restaurants[selectedRestaurant].location.address1);
    console.log(restaurants[selectedRestaurant].price);
    console.log(restaurants[selectedRestaurant].image_url);
    console.log(restaurants[selectedRestaurant].url);
    
    
})

selectedRestaurant = Math.floor(Math.random() * 40);

    var div = $("<div class='card card-2 center'>");
    var content = $("<div class=\"section col s12 m6\">" + input + "</div>")
    var content2 = $("<div class=\"section col s12 m6\">" + input + "</div>")
    var btn = $("<button class='btn waves-effect waves-red btn-large grey darken-4 reset-btn' type='submit' name='action'>Search Again</button>");
    div.html("<strong><h5>You will be going here tonight!!</h5></strong>")
    div.append(content);
    div.append(content2)
    div.append(btn);

    // If the user enters nothing...
    if ( input === "" || location === "" ) {
        // Display this message
        M.toast({html: "Please enter a topic and location!"})
    } else {
        // Else display the user's input 
        $("#input-food").val("");
        $(".card-1").hide()
        $("#restaurant-area").append(div);
    }
    

})

// 'Submit Again' button on click event
$(document).on("click", ".reset-btn", function() {
    $(".card-2").hide();
    $(".card-1").show();
})

