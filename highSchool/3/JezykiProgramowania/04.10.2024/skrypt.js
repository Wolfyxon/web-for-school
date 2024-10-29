window.addEventListener("load", () => {
    const form = document.getElementById("form");

    const nameInput = document.getElementById("name-input");
    const lastNameInput = document.getElementById("last-name-input");
    const emailInput = document.getElementById("email-input");
    const serviceDropdown = document.getElementById("service-dropdown");

    const nameOutput = document.getElementById("data-name");
    const emailOutput = document.getElementById("data-email");
    const serviceOutput = document.getElementById("data-service");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        nameOutput.innerText = nameInput.value + " " + lastNameInput.value;
        emailOutput.innerText = emailInput.value.toLowerCase();
        serviceOutput.innerText = "Usługa: " + serviceDropdown.value;
    });
});