var ON = 1;
var OFF = 0;
var arrowState = ON;
var arrow, arrowImage, bow, bowImage, bkground,bkgroundImages, blueBall, greenBall, greenBallImage,pinkBall, pinkBallImage,redBall, redBallImage;
var rand
var randBalloons
var blueBallGroup, greenBallGroup,redBallGroup,pinkBallGroup;
//DK: create a group for arrows
var arrowGroup;

function preload(){
  arrowImage = loadImage("arrow0.png");
  bkroundImages = loadImage("background0.png");
  bowImage = loadImage("bow0.png");
  blueBallImage = loadImage("blue_balloon0.png");
  greenBallImage = loadImage("green_balloon0.png");
  pinkBallImage = loadImage("pink_balloon0.png");
  redBallImage = loadImage("red_balloon0.png");
   
 
}

function setup(){
  createCanvas(500,600);
  bkround = createSprite(200,200,500,500);
  bkround.addAnimation("bkround",bkroundImages);
  bkround.scale = 2.5;
  //DK: the arrow which we are creating right over here stays with the bow
  arrow = createSprite(470,200,10,10);
  arrow.addImage("arrow",arrowImage);
  arrow.scale = 0.25;
  arrow.debug = true;
  bow = createSprite(470,200,30,30);
  bow.addImage("bow",bowImage);
 
  //DK: create groups and store them inside the group variable you have created
  blueBallGroup = new Group();
  greenBallGroup = new Group();
  redBallGroup = new Group();
  pinkBallGroup = new Group();
  arrowGroup = new Group();
}

function draw(){
  background(220);
  bkround.setVelocity(-2,0);
  if(bkround.x<0){
    bkround.x = width/2;
  }
  
  //DK: we make the arrow we created inside setup() stay with the bow using mouseY.
   arrow.y=mouseY   ;
   bow.y = mouseY;
 
   if(keyDown("space") && arrowState == ON){
    createArrow();
   arrowState = OFF;
   }
  
  if(keyWentUp("space")){
    arrowState = ON;
  }
  console.log(arrowState)
  //createArrow();
  balloons();
  //blueBalloon();
  //greenBalloon();
  //pinkBalloon();
  //redBalloon();
  
  //DK: if arrowGroup touches one of the balloonGroups destroy the ballon and the arrow
  //DK: Increase the score 
  
  if(arrowGroup.isTouching(redBallGroup)){
    redBallGroup.destroyEach();
    arrowGroup .destroyEach();
    //Increase score right over here
  }
  
  //DK: write similar if blocks for rest of the balloon groups.
  
  drawSprites();
  
  //DK: display the score after drawSprites
  
  }
 
function blueBalloon(){
   if(frameCount %100==0){
  blueBall = createSprite(rand,600,10,15);
  blueBall.addImage("blueBalloon",blueBallImage);
  blueBall.scale = 0.15;
  blueBall.setVelocity(0,-1);
  rand = random(50,300);
  blueBall.lifetime= 600;
     blueBallGroup.add(blueBall);
     
}
}

function greenBalloon(){
  if(frameCount %100==0){
    greenBall = createSprite(rand,600,10,15);
    greenBall.addImage("greenBalloon",greenBallImage);
    greenBall.scale = 0.15;
    greenBall.setVelocity(0,-1);
    rand = random (50,300);
    //DK: Rectify the spelling of lifetime
      greenBall.liftime = 600;
    greenBallGroup.add(greenBall);
}
}

function pinkBalloon(){
  if(frameCount%100 ==0){
    pinkBall = createSprite(rand,600,10,15);
    pinkBall.addImage("pinkBalloon",pinkBallImage);
    pinkBall.scale = 1.5;
    pinkBall.setVelocity(0,-1);
    rand = random(50,300);
      pinkBall.lifetime = 600;
    pinkBallGroup.add(pinkBall);
}
}

function redBalloon(){
  if(frameCount % 100 ==0){
    redBall = createSprite(rand,600,10,10,15);
    redBall.addImage("redBalloon",redBallImage);
    redBall.scale = 0.1 ;
    redBall.setVelocity(0,-1);
    rand = random(50,30);
    redBall.lifetime = 600;
    redBallGroup.add(redBall);
}
}

function balloons(){
  randBalloons = round(random(1,4))    ;
  switch(randBalloons){
    case 1 : blueBalloon();
      break;
    case 2 :greenBalloon();
      break;
    case 3 : redBalloon();
      break;
    case 4: pinkBalloon();
      break;
     
}
}

function createArrow(){
//DK: IF is already written inside draw() not needed here//if(keyDown("space")){
//DK: we create a new variable for storing the multiple sprite arrows  
  var  newArrow= createSprite(100, 100, 60, 10);
  newArrow.addImage(arrowImage);
  newArrow.x = 360;
  newArrow.y=bow.y;
  newArrow.velocityX = -4;
  newArrow.lifetime = 100;
  newArrow.scale = 0.3;
  arrowGroup.add(newArrow);
  
}



