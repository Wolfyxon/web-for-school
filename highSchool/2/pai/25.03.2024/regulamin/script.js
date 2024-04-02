window.addEventListener("load", () => {
    const check = document.getElementById("check");
    const h1 = document.getElementById("h1");

    check.addEventListener("change", () => {
        if(check.checked) {
            h1.style.display = "";
        } else {
            h1.style.display = "none";
        }
    });
});