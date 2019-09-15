$(document).ready(function () {

    $(".fixed-action-btn").on("click", function conversation() {

        $.get("https://cors-anywhere.herokuapp.com/https://www.conversationstarters.com/101.htm", function (htmlContent) {
            let parser = new DOMParser();
            let parsedHtml = parser.parseFromString(htmlContent, 'text/html');

            let rawLiElements = parsedHtml.getElementsByTagName("li");
            let liElements = [];

            var question = rawLiElements[Math.floor(Math.random() * rawLiElements.length)].innerText;
            var toastHtml = `
                <span>${question}</span>
                <p style="margin-left: 3em; font-size: 11px; color: gray;">
                    Swipe to Dismiss
                </p>`
            M.toast({
                html: toastHtml,
                displayLength: Infinity
            });
            console.log(question);

        });
    })
});