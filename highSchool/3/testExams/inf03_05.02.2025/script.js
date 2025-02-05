window.addEventListener("load", () => {
    const output = document.getElementById("bin-output");
    const input = document.getElementById("inp-dec");

    function convert(dec) {
        let bin = "";

        for(let i = 0; dec > 0; i++) {
            if(i % 4 == 0) {
                bin = " " + bin;
            }

            bin = (dec % 2) + bin;
            dec = Math.floor(dec / 2);
        }
        
        output.innerHTML = `${bin} <sub>(2)</sub>`;
    }

    document.getElementById("btn-convert").addEventListener("click", () => {
        convert(parseInt(input.value));
    });
});