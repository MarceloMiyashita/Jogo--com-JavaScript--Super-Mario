var mario;
var posicaoX = 0;
var passoX = 3;
var direcaoX = 1;

var marioOrdemAndar =[1,3,2,3];// modo de andar
var marioSprite = 0;

var fps = 10000/10000;

function init() {
  mario = document.getElementById('mario');

  mario.onclick = function(){  // muda de direcao com clique
  	marioMudaDirecao();
  	window.alert("SERÁ QUE VOCÊ ME PEGA DE NOVO ?? ");
	window.alert("VOCÊ É PERSISTENTE HEIN!!");
	cont=setTimeout("alert('NÃO CANSOU AINDA? KKKK !')", 4000)     
}
  frame();
}
window.onload = init;
function frame(){
	marioFrameAndar();
    setTimeout(frame, fps);
}

function marioFrameAndar(){ //muda o passo do mario
	mario.className = 'mario_'+ marioOrdemAndar[marioSprite];
	marioSprite++;
	if(marioSprite == marioOrdemAndar.length) {
		marioSprite = 0; // nao sai
	}
    posicaoX += (passoX * direcaoX); // 4x1   // no final subtrai
	mario.style.left = posicaoX + 'px';

	if(posicaoX > 1230) {
		marioMudaDirecao();
	}
	else if( posicaoX == 0) {
		marioMudaDirecao();
	}		
}

function marioMudaDirecao(){

	if(direcaoX == 1){
		direcaoX = -1;
		mario.style.transform = 'scaleX(-1)';
	}
	else{
		direcaoX = 1;
		mario.style.transform = 'scaleX(1)';
	}		
}
var segundo = 0+"0";
var minuto = 0+"0";
var hora = 0+"0";
 
function tempo(){	
   if (segundo < 59){
      segundo++
      if(segundo < 10){segundo = "0"+segundo}
   }else 
      if(segundo == 59 && minuto < 59){
         segundo = 0+"0";
	minuto++;
	if(minuto < 10){minuto = "0"+minuto}
      }
   if(minuto == 59 && segundo == 59 && hora < 23){
      segundo = 0+"0";
      minuto = 0+"0";
      hora++;
      if(hora < 10){hora = "0"+hora}
   }else 
      if(minuto == 59 && segundo == 59 && hora == 23){
         segundo = 0+"0";
	minuto = 0+"0";
	hora = 0+"0";
      }
   form.cronometro.value = hora +":"+ minuto +":"+ segundo
}






