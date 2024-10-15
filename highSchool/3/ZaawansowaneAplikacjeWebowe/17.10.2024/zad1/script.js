$(document).ready(() => {
    
    function r() {
        return Math.floor(Math.random() * 255);
    }

    $("#btn-change").click(() => {
        $("body").css("background-color", `rgb(${r()}, ${r()}, ${r()})`);
    })
});