window.addEventListener("load", () => {
	const gallery = document.getElementById("galeria");
	const imgInput = document.getElementById("current-img");
	const brdColorInput = document.getElementById("img-border-color")
	const widthInput = document.getElementById("img-width");

	function getCurrentImg() {
		for(const img of gallery.children) {
			if(img.src.endsWith(imgInput.value)) {
				return img;
			}
		}
	}

	document.getElementById("btn-apply-border-color").addEventListener("click", () => {
		for(const img of gallery.children) {
			img.style.borderColor = brdColorInput.value;
		}
	});

	document.getElementById("btn-rm-border").addEventListener("click", () => {
		for(const img of gallery.children) {
			img.style.borderBottom = "none";
		}
	});

	document.getElementById("btn-update-width").addEventListener("click", () => {
		const px = parseFloat(widthInput.value);
		const img = getCurrentImg();

		if(!px || isNaN(px) || !isFinite(px)) {
			return alert("Wpisz szerokość");
		}

		if(!img) {
			return alert("Nie wybrałeś zdjęcia");
		}

		img.style.width = px + "px";
	});

});