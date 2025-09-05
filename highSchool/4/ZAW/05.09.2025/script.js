$(document).ready(() => {
    const count = 9;

    const gallery = $("#gallery");

    function addRandomCat() {
        const img = $(`<img 
            src="https://cataas.com/cat?type=square&nocache=${Math.random()}"
            crossorigin="annonymous"
        >`);

        gallery.append(img);
    }

    function load() {
        gallery.empty();

        for(let i = 0; i < count; i++) {
            addRandomCat();
        }
    }

    $("#btn-reload").click(load);

    load();
});