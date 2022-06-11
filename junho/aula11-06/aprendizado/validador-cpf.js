
function testaCPF() {
    var soma;
    var resto;
    soma = 0;

    //criar  um if para validar a entrada do nuúmero para cálculo
    if (validador.strCPF.value == "00000000000") return false
    if (validador.strCPF.value == "11111111111") return false

    //Criando a primeira etapa do nosso cálculo
    for (contador = 1; contador <= 9; contador++)
        soma = soma + parseInt(validador.strCPF.value.substring(contador - 1, contador)) * (11 - contador);
    resto = (soma * 10) % 11;

    //resultado do cálculo
    if ((resto == 10) || (resto == 11)) resto = 0
    if ((resto != parseInt(validador.strCPF.value.substring(9, 10)))) return false

    //criando a segunda etapa do nosso calculo
    soma = 0;
    for (contador = 1; contador <= 10; contador++)
        soma = soma + parseInt(validador.strCPF.value.substring(contador - 1, contador)) * (12 - contador);
    resto = (soma * 10) % 11;

    //resultado do cálculo
    if ((resto == 10) || (resto == 11)) resto = 0
    if (resto != parseInt(validador.strCPF.value.substring(10, 11))) return false;
    return true;

}

function resultado() {
    // var strCPF = "45006774886"
    // alert(parseInt(validador.strCPF.value));
    alert(testaCPF(parseInt(validador.strCPF)));
    console.log(testaCPF(parseInt(validador.strCPF)));
}


