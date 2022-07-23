//Chamada da biblioteca
let leitura = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');

// function carrega() {
// let ArquivoObtido = document.getElementById('leituraDeArquivo').files[0];
// }

//Leitura do arquivo
function carrega() {
  leitura.open('get', 'arquivo.txt', true);

  //passo da leitura do arquivo
  leitura.onreadystatechange = mostraElemento;

  //Envia informações para o Server
  leitura.send(null);
}

// mostrar os conteudo do arquivo
function mostraElemento() {
  switch (leitura.readyState) {
    //Informa que a rwuisição foi iniciada
    case 0:
      console.info('Requisiçã do arquivo');
      break;
    //Conexão com PC estabelecida
    case 1:
      console.info('Conexão ok');
      break;
    //Processamento da Requisição recebida
    case 2:
      console.info('Processamento da recebida');
      break;
    //Processamento da Requisição 
    case 3:
      console.info('Processamento da Requisição');
      break;
    case 4:

      //novo elemento da div principal        //document.elementeById('principal').append(extracaoTexto(leitura.responseText))

      document.getElementById('principal').innerHTML = extracaoTexto(leitura.responseText).outerHTML
      break;

    default:
      console.warn('Não foi possivél abrir o arquivo');
  }

}

//extrair texto
function extracaoTexto(txt) {

  //transformando minha string em vetor
  let linhas = txt.split(/\r\n|\n/);
  let paragrafo = document.createElement('p')

  //percorre todas as minha linhas
  for (let i = 0; i < linhas.length; i++)
    paragrafo.append(linhas[i], document.createElement('br'))
  return paragrafo;

}