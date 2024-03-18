window.addEventListener("load", () => {
    const btn = document.getElementById("btn-welcome");
    const header = document.getElementById("welcome-header");

    btn.addEventListener("click", () => {
        btn.remove();
        header.style.display = "";
    });
});