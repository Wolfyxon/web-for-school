
function image(id, callback) {
    const img = document.getElementById(id + "-img");
    const main = document.getElementById(id);
    
    for(const btn of main.getElementsByTagName("button")) {
        btn.addEventListener("click", () => {
            callback(img, btn);
        });
    }
    
}

window.addEventListener("load", () => {
    image("bee", (img) => {

    });

    image("orange", (img) => {

    });

    image("fruits", (img, btn) => {

    });
    
    image("tutel", (img) => {
        
    });
});