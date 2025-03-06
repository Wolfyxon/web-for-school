window.addEventListener("load", () => {
    const urlInp = document.getElementById("url");
    const linkBtn = document.getElementById("btn-link");
    const link = document.getElementById("link");

    linkBtn.addEventListener("click", () => {
        window.location.href = link.href;
    })

    document.getElementById("btn-set").addEventListener("click", () => {
        linkBtn.disabled = false;
        link.href = urlInp.value;
        link.innerText = urlInp.value;
    });
});