//Variáveis do Ator

let xAtor = 85;
let yAtor= 366;
let colisao = false;

let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30,30);
}
  
  function mostraCarro(){
image(imagemDoCarro,xCarro,yCarro,50, 40);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
}

function verificaColisao(){
  
  for(let i = 0; i< imagemCarros.length; i = i +1){
    colisao = collideRectCircle(xCarros[i],yCarros[i], comprimentoCarro, alturaCarro,xAtor, yAtor, 15)
    if(colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
  meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor= 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,255,0));
  text(meusPontos,width /5, 27);
}

function marcaPontos(){
  if(yAtor < 15 ){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
 return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}