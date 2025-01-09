let pozycjaPacmana=0;
let pozycjaWisni=0;

function losujWisnie(){
	do{
		pozycjaWisni=Math.floor(9*Math.random());
	}while(pozycjaWisni==pozycjaPacmana);
	document.images[pozycjaWisni].src='wisnie.jpg';
}
losujWisnie();
function f1(event){
	const klawisz=event.keyCode;
	if(klawisz==39){
		if(pozycjaPacmana!=2 && pozycjaPacmana!=5 && pozycjaPacmana!=8){
			pozycjaPacmana++;
			/*umieszczenie obrazu pacmana tam, gdzie wskazuje zmienna pozycjaPacmana*/
			document.images[pozycjaPacmana].src='pacman.jpg';
			/*wyczyszczenie poprzedniej pozycji pacmana*/
			document.images[pozycjaPacmana-1].src='bialy.jpg';    
		}
	}
	if(klawisz==37){
		if(pozycjaPacmana!=0 && pozycjaPacmana!=3 && pozycjaPacmana!=6){
			pozycjaPacmana--;
			document.images[pozycjaPacmana].src='pacman.jpg';
			document.images[pozycjaPacmana+1].src='bialy.jpg';       
		}
	}
	if(pozycjaPacmana==pozycjaWisni){
		setTimeout('losujWisnie()',100);
	}
}
