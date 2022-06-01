
/*const nomes = ["Joselaine", "Maria", "Bernardo"];
const nota1 = [7, 10, 8];
const nota2 = [2, 5, 9];

//Laço de repetição

for (contador = 0; contador < 3; contador++) {
    console.log(nomes[contador] + " - Media do Aluno " + (nota1[contador] + nota2[contador]) / 2);

    // console.log('Mostra informações sobre alunos aprovados e reprovados')
    if (contador <= 5) {
        console.log('Aluno Reprovado ' + nomes[contador])
    }
}*/

const aluno = [
    { nome: "Joselaine", notaAluno1: 5, notaAluno2: 6 },
    { nome: "Maria", notaAluno1: 8, notaAluno2: 7 },
    { nome: "Bernardo", notnotaAluno1a1: 9, notaAluno2: 10 }
];

function nomes(value) {

    // for (contador = 0; contador < 3; contador++) {
    //     console.log(value.nome == 'Joselaine' + " - Media do Aluno " + (value.notaAluno1[contador] + value.notaAluno2[contador]) / 2);
    // }
    return value.nome == 'Joselaine';
}

console.log(aluno.find(nomes));


// Array.prototype.find()
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find