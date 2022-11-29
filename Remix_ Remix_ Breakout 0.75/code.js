var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["fb7565be-5458-4d84-81b0-1aca3ef2c545"],"propsByKey":{"fb7565be-5458-4d84-81b0-1aca3ef2c545":{"name":"retroaliens_18_1","sourceUrl":null,"frameSize":{"x":356,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"NFbJmagQEdNeJC1SCO1MoDczS32MeLlN","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":356,"y":400},"rootRelativePath":"assets/fb7565be-5458-4d84-81b0-1aca3ef2c545.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var score = 0;

var gameState = "serve" 


var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="white";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="white";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="white";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="white";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="white";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="blue";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="white";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="blue";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="white";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="blue";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="white";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="blue";

paddle=createSprite(200,390,100,20)
ball=createSprite(200,200,20,20)

ball.shapeColor="white"
paddle.shapeColor="white"


if(ball.isTouching(paddle)
  )


if(gameState == "serve")
 


function draw() {
  background("black");
 if (keyDown("space")) {
    ball.velocityX=5
    ball.velocityY=3
  }
 
  textSize(20,60)
  text("Press space to begin",100,230)
  
  
  gameState == "play";


if(gameState == "play");


   createEdgeSprites()
 ball.bounceOff(leftEdge)
 ball.bounceOff(rightEdge)
 ball.bounceOff(topEdge)
 ball.bounceOff(paddle)
 
 paddle.x=World.mouseX
 
   gameState == "end"

if(gameState == "end")



  drawSprites();


if (ball.bounceOff(box1)) {
  box1.destroy()
  score=score+1;
}
if (ball.bounceOff(box2)) {
  box2.destroy()
  score=score+1;
}

if (ball.bounceOff(box3)) {
  box3.destroy()
  score=score+1;
}

if (ball.bounceOff(box4)) {
  box4.destroy()
  score=score+1;
}

if (ball.bounceOff(box5)) {
  box5.destroy()
  score=score+1;
}


if (ball.bounceOff(box6)) {
  box6.destroy()
  score=score+1;
}


if (ball.bounceOff(box7)) {
  box7.destroy()
  score=score+1;
}

if (ball.bounceOff(box8)) {
  box8.destroy()
  score=score+1;
}

if (ball.bounceOff(box9)) {
  box9.destroy()
  score=score+1;
}

if (ball.bounceOff(box10)) {
  box10.destroy()
  score=score+1;
}

if (ball.bounceOff(box11)) {
  box11.destroy()
  score=score+1;
}

if (ball.bounceOff(box12)) {
  box12.destroy()
  score=score+1;
}

if (ball.bounceOff(box13)) {
  box13.destroy()
  score=score+1;
}

if (ball.bounceOff(box14)) {
  box14.destroy()
  score=score+1;
}

if (ball.bounceOff(box15)) {
  box15.destroy()
  score=score+1;
}

if (ball.bounceOff(box16)) {
  box16.destroy()
  score=score+1;
}


stroke("white");
fill("white");
textSize(22);
text("SCORE "+score , 10, 30);


  
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
