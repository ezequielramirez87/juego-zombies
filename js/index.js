//variables
let zombie=$("#zombie")
let arriba;
let costado;
let ancho;
let imagen;
let zombieSonido=$("#zombieSonido")
let rujido;
let fondo=$("#fondo");

//mecanica del juego
function disparo(){
    $("#disparo")[0].play();
}

function musica(){
    $("#musica")[0].play();
}
function sonido(rujido){
    zombieSonido.attr("src","file:///C:/Users/ezequ/OneDrive/Escritorio/websEjemplos/zombies/mp3/zombie"+rujido+".mp3")
    zombieSonido[0].play();
}

function aparecerFondo(){
    if(fondo.css("opacity")=="1"){
        fondo.css("opacity","0")
    }
}

function efectoDisparo(){
    fondo.animate({
        opacity: 1,
    },10,aparecerFondo())
}



function juego(){
    zombie.fadeToggle( "fast",function(){
        //se le da valor randon a las variables
        arriba=Math.round(Math.random()*200)+100;
        costado=Math.round(Math.random()*1200)+100;
        ancho=Math.round(Math.random()*200)+100;
        imagen=Math.round(Math.random()*4)+1;
        rujido=Math.round(Math.random()*1)+1;

        //se le designa los valores randon
        zombie.css("top", arriba.toString()+"px");
        zombie.css("right", costado.toString()+"px");
        zombie.css("width", ancho.toString()+"px");
        zombie.css("height", ancho.toString()+"px");
        zombie.fadeToggle( "fast");
        zombie.attr("src","https://raw.githubusercontent.com/ezequielramirez87/juego-zombies/master/img/"+imagen+".png");
        sonido(rujido);
    });
}

//juego
zombie.click(juego);
$("body").click(disparo);
$("body").click(musica);
$("body").click(efectoDisparo);


