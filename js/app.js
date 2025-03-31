const suma=()=>{
    let num1=parseInt(prompt("numero 1:"));
    let num2=parseInt(prompt("numero 2:"));
    let sum=num1+num2;
if(isNaN(suma)){
    alert("solo puedes ingresar valores numericos")
}else{
    alert("la suma es:  "+sum);
}
}
const resta=()=>{
    
        let num1=parseInt(prompt("numero 1:"));
        let num2=parseInt(prompt("numero 2:"));
    let res=num1-num2;
     if(isNaN(res)){
        alert("solo puedes ingresar valores numericos")
    }else{
        alert("la resta es:  "+res);
    }
    }
        const divi=()=>{
                let num1=parseInt(prompt("numero 1:"));
                let num2=parseInt(prompt("numero 2:"));
            let div=num1/num2;
            
            if(isNaN(divi)){
                alert("solo puedes ingresar valores numericos")
            }else{
                alert("la division es:  "+div);
            }}
            const mult=()=>{
                try{
                    let num1=parseInt(prompt("numero 1:"));
                    let num2=parseInt(prompt("numero 2:"));
                let mul=num1*num2;
                alert("la multiplicacion es:  "+mul);
                }catch(e){
                
                }
                }