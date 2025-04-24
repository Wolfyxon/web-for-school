window.addEventListener("load", () => {    
    const img = document.getElementById("img");
    const caption = document.getElementById("caption");

    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");

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

    let idx = 0;

    function setImg(array) {
        img.src = "img/" + array[0];
        caption.innerText = array[1];
    }

    function shift(offset) {
        idx = (idx + offset) % imgs.length;
        
        if(idx < 0) {
            idx = imgs.length - 1;
        }

        setImg(imgs[idx]);
    }

    btnPrev.addEventListener("click", () => {
        shift(-1);
    });

    btnNext.addEventListener("click", () => {
        shift(1);
    });

    setImg(imgs[0]);
});