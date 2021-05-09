var canvas;
var music;

var b1;
var b2;
var b3;
var b4;

var box;

function preload()
{
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    b1 = createSprite(100,580,150,15);
    b1.shapeColor = "#89E21C";
    b2 = createSprite(300,580,150,15);
    b2.shapeColor = "#E4F14F";
    b3 = createSprite(500,580,150,15);
    b3.shapeColor = "#80DFEE";
    b4 = createSprite(700,580,150,15);
    b4.shapeColor = "#EE8082";



    //create box sprite and give velocity
    box = createSprite(random(0,800),300,50,50);
    box.velocityX = 5;
    box.velocityY = 5;

}

function draw() {
    background("#BBB7F5");
    //create edgeSprite
    
    var edges = createEdgeSprites();
    box.bounceOff(edges)



    //add condition to check if box touching surface and make it box
    if(touching(b1,box))
    {
        box.shapeColor = "#89E21C";
        music.play();
    }
    if(touching(b2,box))
    {
        box.shapeColor = "#E4F14F";
        music.play();
    }
    if(touching(b3,box))
    {
        box.shapeColor = "#80DFEE";
        music.play();
    }
    if(touching(b4,box))
    {
        box.shapeColor = "#EE8082";
        music.play();
    }
    music.stop();

    drawSprites();
}
function touching(s1,box)
{
    if(abs(box.x - s1.x) <= s1.width/2 + box.width/2 && abs(box.y - s1.y) <= s1.height/2 + box.height/2)
    {
        //box.velocityX = -1 * box.velocityX;
        box.velocityY = -1 * box.velocityY;
        return true;
    }
    else
    {
        return false;
    }
}

