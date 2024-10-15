$(document).ready(() => {
 
    const ps = $("p");
    const btn = $("#btn-change");

    for(let i = 0; i < ps.length; i++) {
        const elm = $(ps[i]);
        elm.text(`${i + 1}. ${elm.text()}`);

        if((i + 1) % 2 == 0) { 
            btn.click(() => {
                elm.css("font-family", '"Lucida Console", "Courier New", monospace');
            });
        }
    }
});