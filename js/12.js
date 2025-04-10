var dia=document.querySelector("#dia")
var mes=document.querySelector("#mes")

dia.oninput=()=>{CalcularSigno()}

mes.onchange=()=>{CalcularSigno()}
const CalcularSigno=()=>{
    mami=["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"]
    document.querySelector('#vdia').textContent=dia.value
    document.querySelector('#fecha').textContent=dia.value+"DE"+mami[mes.value-1];
    let s="";
    switch(parseInt(mes.value)){
        case 1: s=(dia.value<=19)?"img/capricornio.jpg":"acuario.jpg";
        break;
        case 2: s=(dia.value<=18)?"img/acuario.jpg":"picis.jpg";
        break;
        case 3: s=(dia.value<=20)?"img/picis.jpg":"aries.jpg";
        break;
        case 4: s=(dia.value<=19)?"img/aries.jpg":"tauro.jpg";
        break;
        case 5: s=(dia.value<=20)?"img/tauro.jpg":"geminis.jpg";
        break;
        case 6: s=(dia.value<=20)?"img/geminis.jpg":"cancer.jpg";
        break;
        case 7: s=(dia.value<=22)?"img/cancer.jpg":"leo.jpg";
        break;
        case 8: s=(dia.value<=22)?"img/leo.jpg":"virgo.jpg";
        break;
        case 9: s=(dia.value<=22)?"img/virgo.jpg":"libra.jpg";
        break;
        case 10: s=(dia.value<=22)?"img/libra.jpg":"escorpio.jpg";break;
        case 11: s=(dia.value<=21)?"img/escorpio.jpg":"sagitario.jpg";break;
        case 12: s=(dia.value<=21)?"img/sagitario.jpg":"capricornio.jpg";break;
    }
    
    document.querySelector('#zo').src=s;
}