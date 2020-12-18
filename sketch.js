var hypnoticball;
var database;
 var position;
function setup(){
database = firebase.database();

    createCanvas(500,500);
    hypnoticball = createSprite(250,250,10,10);
    hypnoticball.shapeColor = "red";

var hypnoticballPosition = database.ref("ball/position")
hypnoticballPosition.on("value",readPositon,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPositon(data){
    position = data.val()
    hypnoticball.x = position.x;
    hypnoticball.y = position.y;
}

function showError(){
    console.log('error in writing to database')
}

function writePosition(x,y){
    database.ref("ball/position").set({'x':position.x+x,'y': position.y+y})

}
