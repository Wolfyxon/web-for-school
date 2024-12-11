window.addEventListener("load", () => {
    const form = document.querySelector("form");
    const chkPrivacy = document.getElementById("privacy");
    const chkPrivacyLbl = document.getElementById("privacy-label");

    form.addEventListener("submit", (e) => {
        if(!chkPrivacy.checked) {
            chkPrivacyLbl.style.color = "red";

            e.preventDefault();
            return;
        }
    });
});