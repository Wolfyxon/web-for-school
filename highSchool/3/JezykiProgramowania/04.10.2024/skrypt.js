window.addEventListener("load", () => {
    const form = document.getElementById("form");

    const nameInput = document.getElementById("name-input");
    const lastNameInput = document.getElementById("last-name-input");
    const emailInput = document.getElementById("email-input");
    const reportDropdown = document.getElementById("report-dropdown");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });
});