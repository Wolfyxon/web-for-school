window.addEventListener("load", () => {
    const game = document.getElementById("gra");
    const pointsDisp = document.getElementById("punkty");
    const btn = document.querySelector("input");

    btn.addEventListener("click", () => {
        let html = "";
        let points = 0;

        for(let i = 0; i < 2; i++) {
            const r = Math.floor(Math.random() * 6 + 1);

            points += r;
            html += `<img src='img/${r}.png'>`;
        }

        game.innerHTML = html;
        pointsDisp.innerText = points;
    });
});