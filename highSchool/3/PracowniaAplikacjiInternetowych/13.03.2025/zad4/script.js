window.addEventListener("load", () => {
    const image = document.getElementById("image");
    const images = document.querySelectorAll("#gallery img");

    function setImg(src) {
        image.src = src;
    }

    images.forEach((img) => {
        img.addEventListener("click", () => {
            setImg(img.src);
        });
    });

    setImg(images[0].src);
});