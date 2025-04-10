text=document.querySelector("#text");
trad=document.querySelector("#trad");
// para cambiar las letras por la terminacion
trad.onkeyup=()=>{
    var fra=text.value;
    fra=fra.replace("a","<b>a</b>f<b>a</b>");
    fra=fra.replace("e","efe");
    fra=fra.replace("i","ifi");
    fra=fra.replace("o","ofo");
    fra=fra.replace("u","ufu");
    trad.innerHTML=fra.toUpperCase()
}
