window.addEventListener("load", () => {
    const in1 = document.getElementById("input1");
    const in2 = document.getElementById("input2");

    document.getElementById("btn-swap").addEventListener("click", () => {
        let split1 = in1.value.split("");
        let split2 = in2.value.split("");

        if(split1.length === 0 || split2.length === 0) {
            alert("Oba pola muszą być wypełnione");
            return;
        }

        const oldSplit1first = split1[0];
        split1[0] = split2[0];
        split2[0] = oldSplit1first;

        in1.value = split1.join("");
        in2.value = split2.join("");
    });
});