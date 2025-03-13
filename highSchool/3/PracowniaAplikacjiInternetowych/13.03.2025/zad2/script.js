window.addEventListener("load", () => {
    const options = document.getElementById("options");
    const form = document.getElementById("form");
    const result = document.getElementById("result");

    const nums = [10, 20, 50];
    let optionsHtml = "";

    nums.forEach((n) => {
        const id = `option-${n}`;

        optionsHtml += `
            <div>
                <input type="checkbox" id="${id}" data-number="${n}">
                <label for="${id}">${n}</label>
            </div>
        `;
    });

    options.innerHTML = optionsHtml;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let sum = 0;

        for(const ch of document.querySelectorAll("input")) {
            if(ch.checked) {
                sum += parseInt(ch.getAttribute("data-number"));
            }
        }

        result.innerText = sum;

        if(sum > 50) {
            result.style.backgroundColor = "red";
        } else {
            result.style.removeProperty("background-color");
        }
    })
});