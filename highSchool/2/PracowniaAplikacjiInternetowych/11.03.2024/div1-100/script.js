window.addEventListener("load", () => {
    const div = document.getElementById("wynik");

    for(let i=0; i <= 100; i++) {
        div.innerText += i + ", ";
    }
});