// 'Submit' button on click event
// ===============================================================
$(".submit-btn").on("click", function() {

    // API call
    var location = $("#input-address").val().trim();
    var input = $("#input-food").val().trim();
    var queryUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=40&location=" + location + "&term=" + input;
    var restaurants =[];
    var selectedRestaurant;

    // Ajax to Yelp API
    $.ajax({
        url: queryUrl,
        method: "GET",
        contentType: "text/plain",
        headers: {
            "Authorization": "Bearer ywecqt0W3LheBcZHlrPN7UHTFXnNV0qEO6IUCGYoLDQYlhRcLMRv8XExahKsYaSJf5z5lvb0x0X4ox1Go-PdDX4oRf99SMrEVpbDwrpkiKPsWrTZpdDGL_VX0LZ5XXYx"
        },
    }).then(function(response){
        // If the user enters nothing...
        if ( input === "" || location === "" ) {
            // Display this message
            M.toast({html: "Please enter a topic and location!"})
            return false
        } else {
            for ( var i = 0; i < response.businesses.length; i++) {
                restaurants.push(response.businesses[i])
                };
            // Select Random Restaurant from list of 40 
            selectedRestaurant = Math.floor(Math.random() * 40);
            // Business Info 
            var ratingNumber = restaurants[selectedRestaurant].rating;
            var bizInfo = `<ul>
            <li><a target="_blank" href="${restaurants[selectedRestaurant].url}">${restaurants[selectedRestaurant].name}</a></li>
            <li><strong>Rating: </strong><span><img src="assets/images/yelp_stars/web_and_ios/regular/regular_${ratingNumber}.png" title="Rating: ${ratingNumber}"></span></li>
            <li><strong>Price:</strong> ${restaurants[selectedRestaurant].price}</li>
            <li><strong>Address:</strong> ${restaurants[selectedRestaurant].location.display_address}</li>
            <li><img class="yelp-logo" src="assets/images/YelpLogo_Trademark/Screen(R)/Yelp_trademark_RGB_outline.png" alt="Yelp Logo"></li>
            </ul>`;
            // Business Image 
            var imgUrl = restaurants[selectedRestaurant].image_url;
            var image = $("<img class='res-image' title='" + restaurants[selectedRestaurant].name + "'>");
            image.attr("src", imgUrl)
            // Div Variable
            var div = $("<div class='card card-2'>");
            var content = $("<div class=\"section col s12 m6 content1 center\">");
            var content2 = $("<div class=\"section col s12 m6 content2\">" + bizInfo + "</div>")
            // Search Again button 
            var btn = $("<button class='section col s4 offset-s4 btn waves-effect waves-red btn-large grey darken-4 reset-btn' type='submit' name='action'>Search Again</button>");
            content.append(image);
            div.html("<strong><h5 class=\"center\">You will be going here tonight!</h5></strong>")
            div.append(content);
            div.append(content2)
            div.append(btn);
            // Else display the user's input and clear the entered topic
            $("#input-food").val("");
            $(".card-1").hide()
            $("#restaurant-area").append(div);
        }   
    })
})

// 'Submit Again' button on click event
// ===============================================================
$(document).on("click", ".reset-btn", function() {
    $(".card-2").hide();
    $(".card-1").show();
});


    
