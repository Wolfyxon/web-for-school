window.addEventListener("load", () => {
    const tabs = document.querySelectorAll("#tabs > *");
    
    function showTab(tab) {
        tabs.forEach((t) => {
            if(t == tab) {
                t.style.removeProperty("display");
            } else {
                t.style.display = "none";
            }
        });
    }

    document.querySelectorAll("#tab-btns > *").forEach((btn) => {
        const targetId = btn.getAttribute("data-target");
        const target = document.getElementById(targetId);
        
        btn.addEventListener("click", () => {
            showTab(target);
        });
    });

    showTab(tabs[0]);
});