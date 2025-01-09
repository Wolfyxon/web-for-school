window.addEventListener("load", () => {
	const map = document.getElementById("mapa");

	const mapW = 5;
	const mapH = 5;

	const emptyImg = "bialy.jpg"

	let pacman = {
		x: 0,
		y: 0
	};
	
	function initMap() {
		let mapHtml = "";

		for(let y = 0; y < mapH; y++) {
			for(let x = 0; x < mapW; x++) {
				mapHtml += `<img src='${emptyImg}' class='tile'>`;
			}

			mapHtml += "<br>";
		}
		
		map.innerHTML = mapHtml
	}

	function getTiles() {
		return document.getElementsByClassName("tile");
	}

	function getTile(x, y) {
		return getTiles()[y * mapW + x];
	}

	function setPacman(x, y) {
		const img = "pacman.jpg";
		
		for(const tile of getTiles()) {
			if(tile.src && tile.src.indexOf(img)) {
				tile.src = emptyImg;
			}
		}

		getTile(x, y).src = img;
		
		pacman.x = x;
		pacman.y = y;
	}

	window.addEventListener("keydown", (e) => {
		let dx = 0;
		let dy = 0;
		
		if(e.key == "ArrowLeft") dx = -1;
		if(e.key == "ArrowRight") dx = 1;
		if(e.key == "ArrowUp") dy = -1;
		if(e.key == "ArrowDown") dy = 1;

		if(dx != 0 || dy != 0) {
			const x = pacman.x + dx;
			const y = pacman.y + dy;
			
			if(x >= mapW || x < 0) return;
			if(y >= mapH || y < 0) return;
			
			setPacman(x, y);
		}
	});

	initMap();
	setPacman(pacman.x, pacman.y);
});