const foto = document.querySelectorAll('.foto');
const kontener = document.querySelector('#kontener');
function f5(){
	kontener.innerHTML='';
	for(const i of foto){
		if(i.checked){
			kontener.innerHTML+=`<img src="${i.value}" />`;
		}
	}
}