$(document).ready(() => {
    const count = 9;

    const gallery = $("#gallery");

    function addRandomCat() {
        const img = $(`<img 
            src="https://cataas.com/cat?type=square&nocache=${Math.random()}"
            class="col h-25"
            crossorigin="annonymous"
        >`);

        gallery.append(img);
    }

    function load() {
        gallery.empty();

        for(let i = 0; i < count; i++) {
            if(i % 3 == 0) {
                gallery.append($(`<div class="w-100"></div>`))
            }

            addRandomCat();
        }
    }

    $("#btn-reload").click(load);

    load();
});