function relogio(){
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();

    
    // alert(hora + ":" + min + ":" + seg)  
    //Montando o relogio
    if(hora<10){
        // insere o "0" para obter 2 digitos até chegar no "09"
        hora = "0" + hora 
    }
    
    if(min<10){
        // insere o "0" para obter 2 digitos até chegar no "09"
        min = "0" + min 
    }
    
    if(seg<10){
        // insere o "0" para obter 2 digitos até chegar no "09"
        seg = "0" + seg 
    }
    
    //Chamar no HTML
    var horaAtual = hora + ":" + min + ":" + seg;

    document.getElementById("rel").value = horaAtual;

    // ou esse modelo
    // rel.innerText = value = horaAtual;
}

// executa 
var time = setInterval(relogio,1000);
alert(relogio()); 