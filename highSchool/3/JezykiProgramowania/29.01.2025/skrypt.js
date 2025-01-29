window.addEventListener("load", () => {
    const form = document.getElementById("form");
    
    function selectTab(id) {
        for(const tab of form.children) {
            tab.style.removeProperty("visibility");
        }

        document.getElementById(id).style.visibility = "visible";
    }

    for(const btn of document.querySelectorAll("input[type=button]")) {
        const id = btn.getAttribute("data-target");
        
        btn.addEventListener("click", () => {
            selectTab(id);
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const pass1 = document.getElementById("pass1-input").value;
        const pass2 = document.getElementById("pass2-input").value;

        if(pass1 != pass2) {
            return alert("Podane hasła różnią się");
        }

        const name = document.getElementById("name-input").value;
        const surname = document.getElementById("surname-input").value;
        
        console.log(`Witaj ${name} ${surname}`);
    })

    selectTab("tab-1");
});