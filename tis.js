function redireccionar(){
    document.location.href="enlaces.html";
  }

let reto = 0; 

function changeImage(imagen) {
    if (typeof (imagenes[1]) != "undefined" && reto < imagenes.length) {
        imagenes.pop();
        var i, j, k;
        i = imagenes.length;
        let ruta1 = "imagen/"
        let ruta2 = "imagen/"
        j = Math.floor(Math.random() * i);
        k = imagenes[i - 1];
        imagenes[i - 1] = imagenes[j];

        document.getElementById('pregunta').innerHTML = imagenes[j]["pregunta"];
        ruta1 += imagenes[j]["img1"];
        ruta2 += imagenes[j]["img2"];
        imagenes[j] = k;
        
        document.getElementById('challenge1').src = ruta1;
        document.getElementById('challenge2').src = ruta2;
        reto++;
        
    }else{
        document.getElementById('pregunta').innerHTML = "FIN DEL JUEGO";
        document.getElementById("challenge1").src = "imagen/gameover.png"
        document.getElementById("challenge2").src = "imagen/gameover.png"
        document.getElementById("challenge1").disabled = true;
        document.getElementById("challenge2").disabled = true;
        document.body.style.backgroundImage="url(fondo/fuego.gif)";
        document.body.style.backgroundRepeat="no-repeat";
        document.body.style.backgroundSize="100% 100%"
        setTimeout ("redireccionar()", 3000);
    }
}

let imagenes = [
                {img1:"si.png",             img2:"no.png",          score1:20,  score2:5,   pregunta:"¿Bajarías de un coche en marcha para bailar y volver a subir?"},
                {img1:"huevo.png",             img2:"cacahuete.png",          score1:25,  score2:5,   pregunta:"¿Qué preferirías, comerte un huevo con cáscara o un cacahuete?"},
                {img1:"si.png",             img2:"no.png",          score1:10,  score2:0,   pregunta:"¿Aguantarías ponerte una cucaracha en la cara?"},
                {img1:"amigo.png",             img2:"desconocido.png",          score1:5,  score2:15,   pregunta:"¿Prefieres pegarle un puñetazo a tu mejor amigo o a un desconocido?"},
                {img1:"si.png",             img2:"no.png",          score1:20,  score2:0,   pregunta:"Si te mandaran un video de una persona prendiéndose fuego y saltando a una piscina, ¿lo compartes con tus amigos?"},
                {img1:"si.png",             img2:"no.png",          score1:50,  score2:5,   pregunta:"¿Te atreverías a saltar desde un tercer piso a una piscina?"},
                {img1:"abeja.png",             img2:"oreo.png",          score1:30,  score2:10,   pregunta:"¿Ser picado por 20 abejas o dar galletas rellenas de pasta dental a un mendigo?"},
                {img1:"amoniaco.png",             img2:"lejia.png",          score1:75,  score2:75,   pregunta:"¿Tomar una 5 gotas de amoniaco o 5 gotas de lejía?"},
                {img1:"somnifero.png",             img2:"paracetamol.png",          score1:50,  score2:30,   pregunta:"¿Prefieres tragar un puñado de  somníferos o un puñado de paracetamol?"},
                {img1:"mascota.png",             img2:"madre.png",          score1:40,  score2:100,   pregunta:"¿Qué preferirías matar a tu mascota o la madre de tu mejor amigo?"},
                {img1:"tomarVeneno.png",             img2:"veneno.png",          score1:75,  score2:50,   pregunta:"¿Qué prefieres tomar un veneno o darle a alguien de tu familia para que lo tome?"},
                {img1:"si.png",             img2:"no.png",          score1:30,  score2:20,   pregunta:"¿Si un amigo te pide que le grabes asfixiándose, lo harías?"},
                {img1:"aguaCaliente.png",   img2:"aguaFria.png",    score1:50, score2:10,  pregunta:"¿Qué prefieres, tirar encima de ti agua hirviendo o congelada?"},
                {img1:"canela.png",         img2:"hielo.png",       score1:20, score2:30,  pregunta:"¿Qué prefieres, mantener una cucharada de canela en la boca durante 2 minutos o mantener sal con hielo en la mano durante 1 minuto?"},
                {img1:"si.png",             img2:"no.png",          score1:20,  score2:5,  pregunta:"Si te retan a no hablar con nadie en todo el día, ¿serías capaz de hacerlo?"},
                {img1:"terror.png",         img2:"vias.png",        score1:20,  score2:30,  pregunta:"¿Qué prefieres, levantarte a las 4:20 a.m para mirar videos de terror y psicodélicos o pasear por las vías del tren?"},
                {img1:"puente.png",         img2:"tejado.png",      score1:30,  score2:25,  pregunta:"¿Qué prefieres sentarte en el borde de un puente o de un ático muy alto?"},
                {img1:"labios.png",         img2:"alfiler.png",     score1:20,  score2:15,  pregunta:"¿Cortar tu labio o pinchar tu dedo muchas veces con un alfiler?"},
                {img1:"mano.png",           img2:"brazo.png",       score1:30,  score2:20,  pregunta:"¿Hacerte un corte profundo en la mano o tres cortes poco profundos en el brazo?"},
                {img1:"si.png",             img2:"no.png",          score1:20,  score2:5,   pregunta:"¿Quieres saber la fecha exacta de tu muerte?"},
                {img1:"si.png",             img2:"no.png",          score1:25, score2:0,  pregunta:"¿Eres valiente y te gusta vencer tus miedos?"}/*Es importante que esta pregunta este la ultima*/];
let score = 0;

/*changeImage("challenge1")
changeImage("challenge2")*/