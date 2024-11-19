$(window).ready(() => {
    function r() {
        return Math.random() * 255;
    }

   $("button").click(() => {
        const color = `rgb(${r()}, ${r()}, ${r()})`;
        $("body").css("background", color)
   }); 
});