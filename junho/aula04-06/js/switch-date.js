// Criando case de aplicação

/*switch (new Date().getMonth()) {
    case 0:
        console.log('Janeiro');
        break;
    case 1:
        console.log('Fevereiro');
        break;
    case 2:
        console.log('Março');
        break;
    case 3:
        console.log('Abril');
        break;
    case 4:
        console.log('Maio');
        break;
    case 5:
        console.log('Junho');
        break;
}*/


// ----------------------------------------------------------------------------

//Comunicação via Html sobre o mês atual

let mes = prompt('Infome o mês que deseja ver, com 1 digito');


switch (parseInt(mes)) {
    case 1:
        alert('Janeiro');
        break;
    case 2:
        alert('Fevereiro');
        break;
    case 3:
        alert('Março');
        break;
    case 4:
        alert('Abril');
        break;
    case 5:
        alert('Maio');
        break;
    case 6:
        alert('Junho');
        break;
    case 7:
        alert('Junho');
        break;
    case 8:
        alert('Junho');
        break;
    case 9:
        alert('Junho');
        break;
    case 10:
        alert('Junho');
        break;
    case 11:
        alert('Junho');
        break;
    case 12:
        alert('Junho');
        break;
    default:
        alert('O mês que você informou não faz parte do calendario');
        break;

}