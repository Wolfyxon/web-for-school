window.addEventListener("load", () => {
    const game = document.getElementById("gra");
    const btn = document.querySelector("input");

    btn.addEventListener("click", () => {
        let html = "";
        
        for(let i = 0; i < 2; i++) {
            const src = `${Math.floor(Math.random() * 6 + 1)}.png`;
            html += `<img src='${src}'>`;
        }

        game.innerHTML = html;
    });
});