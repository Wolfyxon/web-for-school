window.addEventListener('load', () => {
    const form = document.getElementById("form");
    const colorInput = document.getElementById("inp-color");
    const shapeOptions = document.getElementsByName("shape");
    const shapeContainer = document.getElementById("shapes")
    
    function getShapeName() {
        for(const rd of shapeOptions) {
            if(rd.checked) return rd.value;
        }
    }

    function update() {
        shapeContainer.innerHTML = "";
        const shape = getShapeName();

        const frag = document.createDocumentFragment();

        for(let i = 0; i < 5; i++) {
            const elm = document.createElement("div");
            elm.classList.add(shape);
            elm.style.backgroundColor = colorInput.value;
            frag.append(elm);
        }

        shapeContainer.append(frag);
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        update();
    });
    
    update();
});