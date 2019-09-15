$("#btn").on("click", function conversation() {

$.get( "https://cors-anywhere.herokuapp.com/https://www.conversationstarters.com/101.htm", function( htmlContent ) {
    let parser = new DOMParser();
    let parsedHtml = parser.parseFromString(htmlContent, 'text/html');
    // let liElements = parsedHtml.getElementsByTagName("ul")[1].children;
    

    let rawLiElements = parsedHtml.getElementsByTagName("li");
    let liElements = [];

    var question = rawLiElements[Math.floor(Math.random() * rawLiElements.length)].innerText
    $("#random-question").text(question);
});
});