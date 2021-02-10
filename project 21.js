var canvas;
var music;
var box;
var bluebox, redbox, greenbox, yellowbox;
var edges ; 

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    bluebox= createSprite(100,500,200,40);
    bluebox.shapeColor = "blue";

    redbox = createSprite(300,500,230,40);
    redbox.shapeColor="red";

    greenbox = createSprite(510,500,200,40);
    greenbox.shapeColor="green";

    yellowbox = createSprite(690,500,240,40);
    yellowbox.shapeColor="yellow";





    //create box sprite and give velocity
    box = createSprite(300,200,50,50);
    box.velocityY=10;
    
    
   
}

function draw() {
    background(rgb(169,169,169));

    if(box.isTouching(blueblox)){
        box.shapeColor="blue";
        playSound();
    }
    if(box.isTouching(yellowbox)){
        box.shapeColor="yellow";
    }
    if(box.isTouching(redbox)){
        box.shapeColor="red";
    }

    if(box.isTouching(greenbox)){
        box.shapeColor="green";
    }
   
        //create edgeSprite


    edges=createEdgeSprites();
    box.bounceOff(redbox);
    box.bounceOff(edges);
    box.bounceOff(bluebox);
    box.bounceOff(yellowbox);
    box.bounceOff(greenbox);
    

   
    drawSprites();



    //add condition to check if box touching surface and make it box
}
