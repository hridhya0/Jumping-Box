var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(900,600);

    block1 = createSprite(20,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(320,580,200,30);
    block2.shapeColor = "indigo";

    block3 = createSprite(550,580,200,30);
    block3.shapeColor = "green";

    block4 = createSprite(790,580,200,30);
    block4.shapeColor = "yellow";

    

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = -10;
    ball.velocityY = 10;

   
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    if(ball.isTouching(block1)){
        ball.bounceOff(block1);
        ball.shapeColor = "blue";
    }

    if(ball.isTouching(block2)){
        ball.bounceOff(block2);
        ball.shapeColor = "indigo";
    }


    if(ball.isTouching(block3)){
        ball.bounceOff(block3);
        ball.shapeColor = "green";
    }


    if(ball.isTouching(block4)){
        ball.bounceOff(block4);
        ball.shapeColor = "yellow";
    }


    
    

    

       
    drawSprites();
}
