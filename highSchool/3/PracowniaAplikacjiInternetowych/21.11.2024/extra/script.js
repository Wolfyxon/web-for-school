window.addEventListener("load", () => {
    const chart = document.getElementById("chart");
    
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
});