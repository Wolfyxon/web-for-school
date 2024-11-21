window.addEventListener("load", () => {
    const game = document.getElementById("gra");
    const pointsDisp = document.getElementById("punkty");
    const amountInp = document.getElementById("amount-inp");
    const btn = document.getElementById("rand-btn");

    btn.addEventListener("click", () => {
        const amt = parseInt(amountInp.value);
        if(!amt) return;

        let html = "";
        let points = 0;

        for(let i = 0; i < amt; i++) {
            const r = Math.floor(Math.random() * 6 + 1);

            points += r;
            html += `<img src='img/${r}.png'>`;
        }

        game.innerHTML = html;
        pointsDisp.innerText = points;
    });
});