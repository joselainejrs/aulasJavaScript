nome = prompt('Informe seu nome');

anoNac = prompt('Informe o seu ano de nascimento');
let data = new Date().getFullYear();
retornoData = data - anoNac

function dataAtual() {
    let data = new Date(),
        dia = data.getDate().toString(),
        diaA = (dia.length == 1) ? '0' + dia : dia,
        mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesA = (mes.length == 1) ? '0' + mes : mes,
        ano = data.getFullYear();
    return diaA + "/" + mesA + "/" + ano;
}

alert('Hoje é dia ' + dataAtual + '. Seu nome é ' + nome + ", voce nasceu em " + retornoData);