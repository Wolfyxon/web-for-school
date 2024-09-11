window.addEventListener("load", () => {
    const input = document.getElementById("color-input");
    const cells = document.querySelectorAll("#tbl-colors td");

    function genColor(color) {
        const rm = 20;
        let current = 100;

        for(const cell of cells) {
            cell.style.backgroundColor = `hsl(${color}, ${current}%, 50%)`;
            current -= rm;
        }
    }

    genColor(200);

   document.getElementById("btn-gen").addEventListener("click", () => {
        genColor(parseInt(input.value));
   }); 
});