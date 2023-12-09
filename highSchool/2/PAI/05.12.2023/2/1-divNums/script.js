window.addEventListener("load",() => {
    const div = document.getElementById("wynik");
    const size = 100;
    for(let i=1;i<=size;i++){
        div.innerText += i;
        if(i<size) div.innerText += ","
    }
});