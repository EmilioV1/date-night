// API call





























// 'Submit' button on click event
$(".submit-btn").on("click", function() {

    var input = $("#input-food").val().trim();
    var location= $("#input-address").val().trim();
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

