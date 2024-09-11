window.addEventListener("load", () => {

    const mainImg = document.getElementById("main-img");
    const srcs = [];
    let idx = 0;

    for(const img of document.getElementById("gallery").children) {
        console.log(img.src)
        srcs.push(img.src);
        img.alt = "Miniatura";

        img.addEventListener("click", () => { setImg(img.src) });
    }


    function setImg(src) {
        idx = srcs.indexOf(src);
        mainImg.src = src;
    }

    function offset(amt) {
        let newIdx = idx + amt;
        if(newIdx < 0) newIdx = srcs.length - 1;
        if(newIdx >= srcs.length) newIdx = 0;
        
        setImg(srcs[newIdx]);
    }

    setImg(srcs[0]);

    document.getElementById("btn-prev").addEventListener("click", () => { offset(-1) });
    document.getElementById("btn-next").addEventListener("click", () => { offset(1) });
    


});