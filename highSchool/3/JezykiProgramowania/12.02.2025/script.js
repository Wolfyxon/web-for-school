window.addEventListener("load", () => {
    const inp = document.getElementById("age-inp");

    class RN {
        constructor(name, min, color) {
            this.name = name;
            this.min = min;
            this.color = color;
        }
    }    

    const ranges = [
        new RN("Niemowlę", 0, "#90ff36"),
        new RN("Dziecko", 2, "#366fff"),
        new RN("Nastolatek", 11, "#132c6e"),
        new RN("Student", 18, "#160be6"),
        new RN("Średni", 26, "#ffbf00"),
        new RN("Podeszły", 50, "#ff7700"),
        new RN("Stary", 70, "#9e1800")
    ];

    document.getElementById("check-btn").addEventListener("click", () => {
        const val = parseInt(inp.value);
        if(isNaN(val)) return;

        for(let i = 0; i < ranges.length; i++) {
            const range = ranges[ranges.length - 1 - i];

            if(range.min <= val) {
                inp.style.color = range.color;
                alert(range.name);
                break;
            }
        }
    });
});