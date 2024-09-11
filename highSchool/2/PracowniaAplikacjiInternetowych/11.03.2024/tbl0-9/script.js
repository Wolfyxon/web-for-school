window.addEventListener("load", () => {
    const tbl = document.getElementById("tbl");

    for(let i=0; i<10; i++) {
        const tr = document.createElement("tr");
        
        const num = document.createElement("td");
        const power = document.createElement("td");

        num.innerText = i;
        power.innerText = i ** 2;

        tr.appendChild(num);
        tr.appendChild(power);

        tbl.appendChild(tr);
    }
});