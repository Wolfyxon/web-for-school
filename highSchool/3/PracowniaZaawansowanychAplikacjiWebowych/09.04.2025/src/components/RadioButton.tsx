import { useEffect } from "react";

export default function RadioButton() {
    
    useEffect(() => {
        const radio = document.getElementById("radio");
        let alreadyChecked = false;

        radio!.addEventListener("click", () => {
            if(alreadyChecked) return;
            alreadyChecked = true;

            alert("Radio button został włączony");
        });
    }, []);

    return (
        <>
            <input type="radio" id="radio" />
            <label htmlFor="radio">Radio button</label>
        </>
    );
}