/* 
Napisz skrypt, który sprawdzi, czy podany napis ma przynajmniej 6 znaków, a dodatkowo sprawdzi także, 
czy łańcuch zakończony jest wyrazem kot. 
Przykład 1: warkot - wyraz ma co najmniej 6 znaków i kończy się napisem kot. 
Przykład 2: łaskotki - wyraz ma co najmniej 6 znaków, ale nie kończy się napisem kot. 
Przykład 3: kot - wyraz nie ma co najmniej 6 znaków, ale kończy się napisem kot. 
*/

const txt = prompt("Podaj napis");
let result = "wyraz ";

if(txt.length >= 6 && txt.endsWith("kot")) {
    result += "ma conajmniej 6 znaków i kończy się napisem kot.";
}
else if(txt.length >= 6 && !txt.endsWith("kot")) {
    result += "ma conajmniej 6 znaków, ale nie kończy się napisem kot.";
}
else if(txt.length < 6 && txt.endsWith("kot")) {
    result += "nie ma ma conajmniej 6 znaków, ale kończy się napisem kot.";
}

alert(result);