$(document).ready(() => {
    const rows = 3;
    const cols = 3;

    const gallery = $("#gallery");
    const imgs = [];

    function genRow() {
        const row = $("<div class='row'></div>");

        for(let i = 0; i < cols; i++) {
            const img = genImg();

            updateImg(img);

            imgs.push(img);
            row.append(img);
        }
        
        return row;
    }

    function updateImg(img) {
        img.attr("src", `https://cataas.com/cat?type=square&nocache=${Math.random()}`);
    }

    function genImg() {
        const img = $(`<img
            class="col h-25"
            crossorigin="annonymous"
        >`);

        return img
    }

    function load() {
        for(const img of imgs) {
            updateImg(img);
        }
    }

    for(let i = 0; i < rows; i++) {
        gallery.append(genRow());
    }

    $("#btn-reload").click(load);

    load();
});