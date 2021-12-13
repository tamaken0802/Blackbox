// 入力フォームをつくる練習

let yoko;  // よこ
let tate;  // 　たて

function setup() {

  createCanvas(710, 400);
  
  yoko = createInput(); //yoko用入力するデータをよむ
  yoko.position(20, 165); //フォームの場所

  
  tate = createInput(); //tate用入力するデータをよむ
  tate.position(20, 185); //フォームの場所
  
  textAlign(CENTER);
  textSize(50);
}


function draw(){
  
background(255);
  
text(yoko.value(),width/2-40,50);
text(tate.value(),width/2-40,80);

  
  
}




