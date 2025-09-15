$(document).ready(() => {
    const rows = 3;
    const cols = 3;

    const gallery = $("#gallery");

    function genRow() {
        const row = $("<div class='row'></div>");

        for(let i = 0; i < cols; i++) {
            row.append(getRandomCat())
        }

        return row;
    }

    function getRandomCat() {
        const img = $(`<img 
            src="https://cataas.com/cat?type=square&nocache=${Math.random()}"
            class="col h-25"
            crossorigin="annonymous"
        >`);

        return img
    }

    function load() {
        gallery.empty();

        for(let i = 0; i < rows; i++) {
            gallery.append(genRow());
        }
    }

    $("#btn-reload").click(load);

    load();
});