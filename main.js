
function calcularImc() {
    let altura = document.getElementById("estatura").value;
    let peso = document.getElementById("massa").value;

    if (altura == "") alert("Insira o valor da altura: ");

    else if (peso == "") alert("Insira o valor da massa corporal");

    else {
   
        let soma = Number(peso) / (Number(altura) * Number(altura));

        document.getElementById("imc").value = soma.toFixed(1);
        
        let classificacao = "";

        if (soma <= 18.5) {
            classificacao = "Abaixo do peso";
        } 
        else if (soma <= 24.9) {
            classificacao = "Peso adequado";
        } 
        else if (soma <= 29.9) {
            classificacao = "Sobrepeso";
        } 
        else if (soma <= 34.9) {
            classificacao = "Obesidade grau 1";
        } 
        else if (soma <= 39.9) {
            classificacao = "Obesidade grau 2";
        } 
        else {
            classificacao = "Obesidade mórbida";
        }
        document.getElementById("classificacaoImc").textContent = classificacao;
        
        
    }
 }

 function limparImc() {
    document.getElementById("estatura").value = "";
    document.getElementById("massa").value = "";
    document.getElementById("imc").value = "";
    document.getElementById("classificacaImc").textContent = "";

 }
