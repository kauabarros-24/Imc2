function calcularImc() {
    let altura = document.getElementById("estatura").value;
    let peso = document.getElementById("massa").value;

    if (altura == "") alert("Insira o valor da altura: ");
    else if (peso == "") alert("Insira o valor da massa corporal");
    else {
        let soma = Number(peso) / (Number(altura) * Number(altura));
        document.getElementById("imc").value = soma;
    }
 }

 function limparImc() {
    
 }