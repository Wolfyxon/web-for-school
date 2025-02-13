window.addEventListener("load", () => {
    const tabs = document.querySelectorAll("#tabs > *");

    const bar = document.getElementById("bar-val");
    let barWidth = 0;

    function showTab(tab) {
        tabs.forEach((t) => {
            if(t == tab) {
                t.style.removeProperty("display");
            } else {
                t.style.display = "none";
            }
        });
    }

    function updateBar() {
        if(barWidth > 100) barWidth = 100;

        bar.style.width = barWidth + "%";
    }

    document.querySelectorAll("#tab-btns > *").forEach((btn) => {
        const targetId = btn.getAttribute("data-target");
        const target = document.getElementById(targetId);
        
        btn.addEventListener("click", () => {
            showTab(target);
        });
    });

    const typeBlacklist = [
        "button",
        "submit"
    ];
    
    document.querySelectorAll("input").forEach((inp) => {
        if(!typeBlacklist.includes(inp)) {
            inp.addEventListener("blur", () => {
                barWidth += 12;
                updateBar();
            });
        }
    });

    showTab(tabs[0]);
});