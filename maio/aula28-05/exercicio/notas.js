
const nomes = ["Joselaine", "Maria", "Bernardo"];
const nota1 = [7, 10, 8];
const nota2 = [2, 5, 9];

//Laço de repetição

for (contador = 0; contador < 3; contador++) {
    console.log(nomes[contador]+ " - Media do Aluno " + (nota1[contador] + nota2[contador])/2);

    // console.log('Mostra informações sobre alunos aprovados e reprovados')
    if(contador <= 5){
        console.log('Aluno Reprovado ' + nomes[contador])
    }
}