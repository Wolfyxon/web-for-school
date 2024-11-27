window.addEventListener("load", () => {
    const chart = document.getElementById("chart");
    const throwsInp = document.getElementById("throws");
    const scoreDisp = document.getElementById("score");    

    function doThrow() {
        let score = 0;
        let individual = {};

        const amt = parseInt(throwsInp.value);

        if(isNaN(amt)) {
            throwsInp.style.animationName = "none";
            throwsInp.offsetHeight; // this causes a reflow for some reason
            
            setTimeout(() => {
                throwsInp.style.animationName = "error"; 
            });
            return;
        }
        
        for(let i = 1; i <= 6; i++) {
            individual[i] = 0;
        }

        for(let i = 0; i < amt; i++) {
            const n = Math.floor(Math.random() * 6 + 1);
            
            individual[n]++;
            score += n;
        }

        for(let i = 1; i <= 6; i++) {
            const throws = individual[i];

            const bar = document.getElementById(`bar-${i}`);
            const val = document.getElementById(`value-${i}`);
            
            bar.style.width = `${(throws / amt) * 100 }%`
            val.innerText = throws;
        }

        scoreDisp.innerText = score;
    }

    let chartHtml = "";

    for(let i = 1; i <= 6; i++) {
        chartHtml += `<div>
                <img src="img/${i}.png">
                
                <div class="bar-container">
                    <div class="bar" id="bar-${i}">
                        <div class="value" id="value-${i}">0</div>
                    </div>
                </div>
            </div>
        `;
    }

    chart.innerHTML = chartHtml;

    document.getElementById("btn-throw").addEventListener("click", doThrow);
    doThrow();
});