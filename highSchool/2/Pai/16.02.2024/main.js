window.addEventListener("load", () => {
    const btnOblicz = document.getElementById("btn-oblicz");
    const inputRodzaj = document.getElementById("rodzaj");
    const inputLitry = document.getElementById("litry");
    const result = document.getElementById("result");


    btnOblicz.addEventListener ("click", () => {
        // result.value = ...
        const litry = inputLitry.value;
        console.log(inputRodzaj.value)
        switch (inputRodzaj.value) {
            case "1": { //benzyna
                result.value = litry * 4;
                break;
            }
            case "2": { // olej
                result.value = litry * 3.5;
                break;
            }

            default: {
                result.value = "Nieznany typ paliwa";
            }
        }
    });
});
 