window.addEventListener("load", () => {
    const checkboxContainer = document.getElementById("checkboxes");
    const res = document.getElementById("result");
    
    const checkBoxes = [];
    const nums = [10, 20, 50];

    const frag = document.createDocumentFragment();

    function update() {
        let sum = 0;

        for(const chk  of checkBoxes) {
            if(chk.checked) {
                sum += parseInt(chk.value);
            }
        }

        res.innerText = sum;
    }

    for(const n of nums) {
        const id = `chk-${n}`;

        const div = document.createElement("div");

        const checkbox = document.createElement("input");
        checkbox.value = n;
        checkbox.type = "checkbox";
        checkbox.id = id;

        const label = document.createElement("label");
        label.htmlFor = id;
        label.innerText = n;

        checkBoxes.push(checkbox);
        checkbox.addEventListener("click", update); 

        div.append(checkbox, label);
        frag.append(div);
    }

    checkboxContainer.append(frag);
    update();
});