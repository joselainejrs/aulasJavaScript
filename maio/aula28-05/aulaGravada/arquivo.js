
//  Inclusão de uma variacél 
var nome = "Joselaine";

// requisção da variavél
var fs = require('fs');

// escrever o caminho do arquivo (tando ele cria do zero um pasta ou pode criar e mandar), gravar um mensagem dentro do arquivo
fs.writeFile("C:\\Users\\joselaine.rsoares\\Documents\\GitHub\\aulasJavaScript\\maio\\aula28-05\\projetoJS\\aulaGravada\\test.txt", 
"Olá Seja bem vinda " + nome, function (erro) {

    if (erro) {
        throw erro; // comando throw permite verificar o input / output
    }
    console.log("Arquivo Salvo")
});