
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

    });

    image("orange", (img, main) => {

    });

    image("fruits", (img, main, btn) => {

    });
    
    image("tutel", (img, main) => {
        
    });
});