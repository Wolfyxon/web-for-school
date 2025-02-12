window.addEventListener("load", () => {
    const inp = document.getElementById("age-inp");

    class RN {
        constructor(name, min) {
            this.name = name;
            this.min = min;
        }
    }    

    const ranges = [
        new RN("Niemowlę", 0),
        new RN("Dziecko", 2),
        new RN("Nastolatek", 11),
        new RN("Student", 18),
        new RN("Średni", 26),
        new RN("Podeszły", 50),
        new RN("Stary", 70)
    ];

    document.getElementById("check-btn").addEventListener("click", () => {
        const val = parseInt(inp.value);
        if(isNaN(val)) return;

        for(let i = 0; i < ranges.length; i++) {
            const range = ranges[ranges.length - 1 - i];

            if(range.min <= val) {
                alert(range.name);
                break;
            }
        }
    });
});