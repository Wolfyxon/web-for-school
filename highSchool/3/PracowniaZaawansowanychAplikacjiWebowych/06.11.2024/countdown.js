let time = 10;

console.log("Launching in T-minus", time, "seconds");

const itv = setInterval(() => {
    if(time <= 0) {
        console.log("boom");
        clearInterval(itv);
        return;
    }

    console.log(time);
    time--;
}, 1000); 