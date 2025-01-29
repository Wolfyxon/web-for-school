window.addEventListener("load", () => {
    const form = document.getElementById("form");
    
    function selectTab(id) {
        for(const tab of form.children) {
            tab.style.display = "none";
        }

        document.getElementById(id).style.removeProperty("display");
    }

    for(const btn of document.querySelectorAll("input[type=button]")) {
        const id = btn.getAttribute("data-target");
        
        btn.addEventListener("click", () => {
            selectTab(id);
        });
    }

    selectTab("tab-1")
});