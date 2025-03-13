window.addEventListener("load", () => {
    const urlInp = document.getElementById("url-input");
    const openBtn = document.getElementById("open-btn");

    let isSet = false;

    document.getElementById("change-lbl-btn").addEventListener("click", () => {
        openBtn.innerText = urlInp.value;
        isSet = true;
    });

    openBtn.addEventListener("click", () => {
        if(isSet) {
            window.location.href = openBtn.innerText;
        }
    });
});