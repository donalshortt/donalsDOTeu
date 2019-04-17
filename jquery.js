console.log("TESSSST");

$(document).ready(function() {
    console.log("HELLO");
});

$(window).on("scroll", function () {
    $(".projectNameContainer").animate({
        opacity: 1
    }, {
        duration: 1200,
        queue: false
    });
    $(".projectNameContainer").animate({
        "margin-top": "0px"
    }, {
        duration: 1200,
        specialEasing: {
            "margin-top": "easeOutCirc"
        },
        queue: false
    });
});