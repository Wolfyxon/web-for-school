const gradeTxts = [
    "niezaliczony",
    "niedostateczny",
    "dopuszczjący",
    "dostateczny",
    "dobry",
    "bardzo dobry",
    "celujący"
];

window.addEventListener("load", () => {
    const ocena = 6;
    document.getElementById("opisoceny").innerText = gradeTxts[ocena] || "???";
});