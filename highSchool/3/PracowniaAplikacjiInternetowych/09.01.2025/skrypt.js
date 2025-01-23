window.addEventListener("load", () => {
	const map = document.getElementById("mapa");
	const pointsDisp = document.getElementById("points");

	const mapW = 10;
	const mapH = 10;

	const emptyImg = "bialy.jpg";
	const cherryImg = "wisnie.jpg";
	const pacmanImg = "pacman.jpg";

	let points = 0;

	let pacman = {
		x: 0,
		y: 0
	};
	
	function randf(min, max) {
		return min + Math.random() * (max - min);
	}

	function randi(min, max) {
		return Math.floor(randf(min, max));
	}

	function isSrc(img, src) {
		return img.src && img.src.indexOf(src) != -1;
	}

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

	function getFreeTiles() {
		const res = [];

		for(const img of getTiles()) {
			if(isSrc(img, "bialy.jpg") || !img.src) {
				res.push(img);
			}
		}

		return res;
	}

	function getTile(x, y) {
		return getTiles()[y * mapW + x];
	}

	function getTilePos(img) {
		const idx = getTiles().indexOf(img);

		return {
			x: idx % mapW,
			y: idx / mapW
		}
	}

	function setPacman(x, y, rotation) {
		for(const tile of getTiles()) {
			if(isSrc(tile, pacmanImg)) {
				tile.src = emptyImg;
				tile.style.transform = "";
			}
		}

		const tile = getTile(x, y);

		tile.src = pacmanImg;
		tile.style.transform = `rotate(${rotation ?? 0}deg)`;
		
		pacman.x = x;
		pacman.y = y;
	}

	function setCherryRandom() {
		const free = getFreeTiles();
		const img = free[randi(0, free.length - 1)];

		img.src = cherryImg;
	}

	let dx = 0;
	let dy = 0;
	let rot = 0;

	function move() {
		if(dx != 0 || dy != 0) {
			const x = pacman.x + dx;
			const y = pacman.y + dy;
			
			if(x >= mapW || x < 0) return;
			if(y >= mapH || y < 0) return;
			
			const newTile = getTile(x, y);
			let cherry = false;

			if(isSrc(newTile, cherryImg)) {
				points++;
				cherry = true;
				pointsDisp.innerText = points;
			}

			setPacman(x, y, rot);

			if(cherry) setCherryRandom();
		}		
	}
	
	window.addEventListener("keydown", (e) => {
		const directions = {
			"ArrowLeft": [-1, 0, 180],
			"ArrowRight": [1, 0, 0],
			"ArrowUp": [0, -1, -90],
			"ArrowDown": [0, 1, 90]
		};

		const dir = directions[e.key];

		if(dir) {
			dx = dir[0];
			dy = dir[1];
			rot = dir[2];
		}
	});

	setInterval(move, 200);

	initMap();
	setPacman(randi(0, mapW), randi(0, mapH));
	setCherryRandom();
});