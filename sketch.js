var canvas;
var music;
var box;
var bluebox, redbox, greenbox, yellowbox;
var edges ; 

function preload(){
   // music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    bluebox= createSprite(300,500,180,40);
    bluebox.shapeColor = "blue";

    redbox = createSprite(100,500,180,40);
    redbox.shapeColor="red";

    greenbox = createSprite(510,500,180,40);
    greenbox.shapeColor="green";

    yellowbox = createSprite(700,500,180,40);
    yellowbox.shapeColor="yellow";

    //create box sprite and give velocity
    box = createSprite(random(20,750),100, 40,40);
    box.velocityY=10;   
}

function draw() {
    background(rgb(169,169,169));

   
    
    if(box.isTouching(redbox)){
        box.shapeColor="red";
        box.x=300;
       
    }
      else if(box.isTouching(bluebox)){
         box.shapeColor="blue";
         box.x=700;
    }
     else if(box.isTouching(yellowbox)){
         box.shapeColor="yellow";
         box.x=100;
     }
   

     else if(box.isTouching(greenbox)){
         box.shapeColor="green";
         box.x=500;
     }
   
        //create edgeSprit
   edges=createEdgeSprites();
    box.bounceOff(redbox);
    box.bounceOff(edges);
    box.bounceOff(bluebox);
    box.bounceOff(yellowbox);
    box.bounceOff(greenbox);

   
    drawSprites();

    //add condition to check if box touching surface and make it box
    
}
