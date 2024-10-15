$(document).ready(() => {
    
    function r() {
        return Math.floor(Math.random() * 255);
    }

    function randColor() {
        return `rgb(${r()}, ${r()}, ${r()})`;
    }

    $("#btn-change").click(() => {
        for(const elm of $("body *")) {
            if(elm.tagName != "P") continue;
            
            $(elm).css("color", randColor());
        }
    })
});