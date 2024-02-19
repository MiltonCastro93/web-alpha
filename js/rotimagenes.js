const botones = document.querySelectorAll('#contenedorImagenes img')
console.log(botones);

const btnAnterior = botones[0];
const btnSiguiente = botones[2];
const recuadro = botones[1];

let indice = 0;
let indiceMax = 4;

btnSiguiente.addEventListener(
    'click', 
    function(){
        indice++;
        if(indice >= indiceMax){
            indice = 0;
        }
        selectorImg(indice);
    }
);

btnAnterior.addEventListener(
    'click',
    function(){
        indice--;
        if(indice <= -1){
            indice = indiceMax - 1;
        }
        selectorImg(indice);
    }

);

function selectorImg ( numero ){
    recuadro.innerHTML = '<img src="Ima/Fotos/foto' + numero + '.jpg">';
    console.log(numero);
}