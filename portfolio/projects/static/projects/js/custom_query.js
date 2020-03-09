$(function () {
    $('.project-container').hover(function () {
        var text = $(this).find("h3").text();
        $(".current-project").animate({
            bottom: "4em",
            opacity: 1
        });
        $( this ).css("transition", "0.5s");
        $( this ).css("background-color", "lightskyblue");
        $( this ).find('.close').css('display', 'block');
        $(".current-project").css("background-color", "whitesmoke");
        $(".current-project").find('h4').text("You are currently viewing " + text + ".");
    });
    $('.project-container').mouseleave(function () {
        $(".current-project").animate({
            bottom: "0",
            opacity: 0
        });
        $( this ).css("transition", "0.5s");
        $( this ).css("background-color", "lightblue");
        $( this ).find('.close').css('display', 'none');
        $(".current-project").css("background-color", "whitesmoke");
    });
    $('.available').click(function() {
        var href = $(this).attr("href");
        alert("You are being redirected to " + href + ".");
    });
    $('.unavailable').click(function() {
        $(".current-project").find('h4').text("This link is not working!");
        $(".current-project").css("background-color", "coral");
    });
});