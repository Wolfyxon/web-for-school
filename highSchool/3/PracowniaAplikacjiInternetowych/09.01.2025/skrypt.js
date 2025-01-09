window.addEventListener("load", () => {
	const map = document.getElementById("mapa");

	const mapW = 3;
	const mapH = 3;

	const emptyImg = "bialy.jpg"

	let pacman = {
		x: 0,
		y: 0
	};
	
	function initMap() {
		let mapHtml = "";

		for(let y = 0; y < mapH; y++) {
			for(let x = 0; x < mapW; x++) {
				mapHtml += `<img src='${emptyImg}'>`;
			}

			mapHtml += "<br>";
		}
		
		map.innerHTML = mapHtml
	}

	function getTile(x, y) {
		return map.children[y * mapW + x];
	}

	function setPacman(x, y) {
		const img = "pacman.jpg";
		
		for(const tile of map.children) {
			if(tile.src == img) {
				tile.src = emptyImg;
			}
		}

		getTile(x, y).src = img;
		
		pacman.x = x;
		pacman.y = y;
	}

	initMap();
	setPacman(pacman.x, pacman.y);
});