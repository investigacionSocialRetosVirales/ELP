let noticias = ["notice1",
    "notice2",
    "notice3",
    "notice4",
    "notice5",
    "notice6",
    "notice7",
    "notice8",
    "notice9",
    "notice10",
    "notice11",
    "notice12"];

function mostrar(noticia){
    document.getElementById(noticia).style.visibility = "visible";
}

function aleatorio(){
    var i, j, k;
    i = noticias.length;
    if(typeof(noticias[0]) == "undefined"){
        detener();
    }else{
        j = Math.floor(Math.random() * i);
        k = noticias[i - 1];
        noticias[i - 1] = noticias[j];
        noticias[j] = k;
        mostrar(noticias.pop())
    }
}

let temporizador;

function retardo(){
    
    temporizador = setInterval("aleatorio()",500);
    
}

function detener(){
    clearInterval(temporizador);
}




