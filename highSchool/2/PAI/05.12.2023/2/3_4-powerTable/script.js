window.addEventListener("load", () => {
    const table = document.getElementById("tbl");

    const rows = table.getElementsByTagName("tr");
    for(let i=0;i<rows.length;i++){
        const columns = rows[i].getElementsByTagName("td");
        columns[1].innerText = (columns[0].innerText**2).toString();
    }
})