function calculaIF(){
    var ValorNum1 = document.getElementById("ValorNum1").value;
    var Operacoes = document.getElementById("Operacoes").value;
    var ValorNum2 = document.getElementById("ValorNum2").value;
    

    if(Operacoes == "Soma"){
        var Resultado = parseFloat(ValorNum1) + parseFloat(ValorNum2);
        document.getElementById("Resultado").value = Resultado
}
else if(Operacoes == "Subtracao"){
    document.getElementById("Resultado").value = parseFloat(ValorNum1) - parseFloat(ValorNum2);
}
else if(Operacoes == "Divisao"){
    document.getElementById("Resultado").value = parseFloat(ValorNum1) / parseFloat(ValorNum2);
}
else if(Operacoes == "Multiplicacao"){
    document.getElementById("Resultado").value = parseFloat(ValorNum1) * parseFloat(ValorNum2);
}else{
    
    alert("Digite um valor numerico!");
    
}
}

function calculaSwitch(){
    var ValorNum1 = document.getElementById("ValorNum1").value;
    var Operacoes = document.getElementById("Operacoes").value;
    var ValorNum2 = document.getElementById("ValorNum2").value;
    

    switch(Operacoes){

        case "Soma":
        document.getElementById("Resultado").value = parseFloat(ValorNum1) + parseFloat(ValorNum2);
        break;

        case "Subtracao":
            document.getElementById("Resultado").value = parseFloat(ValorNum1) - parseFloat(ValorNum2);
            break;

        case "Divisao":
            document.getElementById("Resultado").value = parseFloat(ValorNum1) / parseFloat(ValorNum2);
            break;
        
        case "Multiplicacao":
            document.getElementById("Resultado").value = parseFloat(ValorNum1) * parseFloat(ValorNum2);
            break;
        default:
            alert("Digite um valor numerico!")


    }
}
function limpar(){
    document.location.reload(true)
}