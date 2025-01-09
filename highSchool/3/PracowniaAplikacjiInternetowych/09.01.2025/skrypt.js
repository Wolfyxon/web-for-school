window.addEventListener("load", () => {
	const map = document.getElementById("mapa");

	const mapW = 3;
	const mapH = 3;

	function initMap() {
		let mapHtml = "";

		for(let y = 0; y < mapH; y++) {
			for(let x = 0; x < mapW; x++) {
				mapHtml += "<img src='bialy.jpg'>";
			}

			mapHtml += "<br>";
		}
		
		map.innerHTML = mapHtml
	}

	initMap();
});