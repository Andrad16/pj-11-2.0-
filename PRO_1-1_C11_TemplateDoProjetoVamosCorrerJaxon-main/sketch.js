var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var fundo
var menino

function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);
  fundo = createSprite(185, 0)
  fundo.addImage("sprite",pathImg)
fundo.velocityY = 5
// criar o fundo 




//Criando menino que corre 
menino = createSprite(200, 360)
  menino.addAnimation("sprite2",boyImg)

  menino.scale = 0.1

// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(300,0,100,800);
rightBoundary.visible = false;
}


function draw() {
background(0);


// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
menino.collide(edges[3]);
menino.collide(leftBoundary);
menino.collide(rightBoundary);
menino.x = World.mouseX

 //Reiniciar o fundo
 if (fundo.y > 400){
    fundo.y = height/2

 }



 drawSprites();

 }




