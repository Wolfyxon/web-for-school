window.addEventListener("load", () => {
    const form = document.getElementById("form");
    const urlInp = document.getElementById("url-inp");
    const link =document.getElementById("link");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const url = urlInp.value;

        if(url == "") {
            alert("Uzupełnij pole");
            return;
        }

        if(url.includes("#")) {
            link.style.removeProperty("color");
            link.innerText = "Kliknij mnie";
        } else {
            link.style.color = "green";
            link.textContent = url; 
        }

        link.href = url;
    });
});