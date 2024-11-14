$(window).ready(() => {
    $("button").click(() => {
        $("img").animate({
            opacity: $("#input-opacity").val()
        });
    });
});