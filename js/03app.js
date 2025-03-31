var num=document.querySelector("#num");
var vk=document.querySelector("#vk");
var res=document.querySelector("#res");
num.oninput=()=>{
    res.innerHTML="<img src='img/car.gif' width='200px' height='200px' class='m-auto'>";
    setTimeout(()=>{

   
    let tablaHTML=" ";
    vk.innerHTML=num.value;
    let n=parseInt(num.value);
    for(i=1; i<=10;i++){
        tablaHTML+="<p>"+n+"x"+i+"="+(i*n)+"</p>"
    }
    res.innerHTML=tablaHTML;
},1000);
setTimeout(()=>{

},1000);
}