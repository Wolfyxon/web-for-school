window.addEventListener("load", () => {    
    const img = document.getElementById("img");
    const caption = document.getElementById("caption");

    const imgPrev = document.getElementById("img-prev");
    const imgNext = document.getElementById("img-next");

    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const btnRandom = document.getElementById("btn-random");

    const imgs = [
        [
            "ohno.jpg",
            "Oh no"
        ],
        [
            "silly.webp",
            "Silly"
        ],
        [
            "normal.jpg",
            "Normal gat"
        ],
        [
            "scared.webp",
            "WAA"
        ]
    ];

    let currentIdx = 0;

    function getImg(idx) {
        if(idx < 0) {
            idx = imgs.length -1;
        }

        idx = idx % imgs.length;
        
        return imgs[idx];
    }

    function setImg(idx) {
        const prev = getImg(idx - 1);
        const next = getImg(idx + 1);
        const current = getImg(idx);

        img.src = "img/" + current[0];
        caption.innerText = current[1];

        imgPrev.src = "img/" + prev[0];
        imgNext.src = "img/" + next[0];

        currentIdx = currentIdx;
    }

    function shift(offset) {
        currentIdx = (currentIdx + offset) % imgs.length;
        
        if(currentIdx < 0) {
            currentIdx = imgs.length - 1;
        }

        setImg(currentIdx);
    }

    btnPrev.addEventListener("click", () => {
        shift(-1);
    });

    btnNext.addEventListener("click", () => {
        shift(1);
    });

    btnRandom.addEventListener("click", () => {
        setImg(Math.floor(Math.random() * imgs.length));
    });

    setImg(currentIdx);
});