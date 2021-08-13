const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "Sunrise1.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    if(hour>=12){
        fill("black");
        strokeWeight(3);
        stroke("white");
        text("Time : "+ hour + " PM", 50,100);
    }else if(hour<12){
        fill("black");
        strokeWeight(3);
        stroke("white");
        text("Time : "+ hour + " AM", 50,100);
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
 
    //change the data in JSON format and store it in variable responseJSON
    var responseJSON = await response.json();
    
    console.log("Time", responseJSON);

    
    //fetch datetime from responseJSON
    var datetime = responseJSON.datetime;

    // slice the datetime to extract hour
    hour = datetime.slice(11,13);

    console.log("Running hour - ", hour);

    

//Morning to Sunset: -
    if(hour>=05 && hour<07){
        bg = "Sunrise1.jpg";

    }else if(hour>=07 && hour<09){
        bg = "Sunrise2.jpg";

    }else if(hour>=09 && hour<12){
        bg = "Sunrise3.jpg";

    }else if(hour>=12 && hour<15){
        bg = "Sunrise4.jpg";

    }else if(hour>=15 && hour<17){
        bg = "Sunrise3.jpg";

//Sunset to Sunrise: -

    }else if(hour>=17 && hour<18){
        bg = "Sunset1.jpg";

    }else if(hour>=18 && hour<19){
        bg = "Sunset2.jpg";

    }else if(hour>=19 && hour<20){
        bg = "Sunset3.jpg";

    }else{
        bg = "Sunset4.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log("backgroundImage", backgroundImg);

    
}
