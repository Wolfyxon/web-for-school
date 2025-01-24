
function image(id, callback) {
    const img = document.getElementById(id + "-img");
    const main = document.getElementById(id);
    
    for(const btn of main.getElementsByTagName("button")) {
        btn.addEventListener("click", () => {
            callback(img, main, btn);
        });
    }
    
}

window.addEventListener("load", () => {
    image("bee", (img, main) => {

        for(const opt of main.getElementsByTagName("input")) {
            if(opt.type == "radio" && opt.checked) {
                img.style.filter = opt.value;
                break;
            }
        }
    });

    image("orange", (img, main, btn) => {
        img.style.filter = btn.getAttribute("data-effect");
    });

    image("fruits", (img, main, btn) => {
        const val = document.getElementById("fruits-transparency").value;

        img.style.opacity = `${100 - val}%`;
    });
    
    image("tutel", (img, main) => {
        const val = document.getElementById("tutel-brightness").value;

        img.style.filter = `brightness(${val}%)`;
    });
});