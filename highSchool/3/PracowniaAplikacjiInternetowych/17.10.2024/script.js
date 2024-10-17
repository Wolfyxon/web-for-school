window.addEventListener("load", () => {
    const display = document.getElementById("display");
    const form = document.getElementById("form");

    const borderColorInput = document.getElementById("border-color");
    const bgColorInput = document.getElementById("bg-color");
    
    function updateStyle() {
        display.style.backgroundColor = bgColorInput.value;
        display.style.borderColor = borderColorInput.value;

        for(const chk of document.getElementsByName("border-size")) {
            if(chk.checked) {
                display.style.borderWidth = chk.value;                
                break;
            }
        }
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        updateStyle();
    });

    updateStyle();
});