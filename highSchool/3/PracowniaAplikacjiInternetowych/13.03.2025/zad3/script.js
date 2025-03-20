window.addEventListener("load", () => {
    const chks = [...document.querySelectorAll("input[type='checkbox']")];
    const blocks = document.querySelectorAll("#result > *");
    const form = document.getElementById("form");
    
    function hideAll() {
        for(const b of blocks) {
            b.style.display = "none";
        }
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        hideAll();

        for(const ch of chks) {
            if(!ch.checked) continue;

            const idx = chks.indexOf(ch);
            blocks[idx].style.removeProperty("display");
        }
    });

    hideAll();
});