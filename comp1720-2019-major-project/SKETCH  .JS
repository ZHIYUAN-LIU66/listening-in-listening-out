var door={readytoopen: false, x: 930, y:500, opened:false};
var home={blurornot: false};
var text1 = {color: [0, 0, 0]};
var text2 = {appear: false};
var foot={};
var footprint = {x: 500, y: 400, captured: 0};
var textouch = {real: false};
var scene2nextbutton = {x: 1200, y: 500, appear: false};
var street={};
var wrongway={};
var walkingstick={};
var eye={};
var light={};
function preload() {
  home.image = loadImage("assets/home.png");
  street.image = loadImage("assets/street.png");
  foot.image = loadImage("assets/foot.png");
  footprint.image = loadImage("assets/footprint.png");
  wrongway.image = loadImage("assets/wrongway.png");
  walkingstick.image = loadImage("assets/walkingstick.png");
  eye.image = loadImage("assets/eye.png");
  light.image = loadImage("assets/light.png");
  dooropenSound = loadSound("assets/dooropen.wav");
  ouchSound = loadSound("assets/ouch.mp3");
  falldownstairSound = loadSound("assets/falldonwstair.mp3");
  streettrafficSound = loadSound("assets/streettraffic.wav");
  stickSound = loadSound("assets/stick.mp3");
  walkingSound = loadSound("assets/walking.mp3");
  askforhelpSound = loadSound("assets/askforhelp.mp3");
  yepSound = loadSound("assets/yep.mp3");
  thankyouSound = loadSound("assets/thankyou.mp3");
  crossstreetSound = loadSound("assets/crossstreet.mp3");
  seaawindSound = loadSound("assets/seawind.mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  dooropenSound.setVolume(4);
  ouchSound.setVolume(4);
  askforhelpSound.setVolume(8);
  askforhelpSound.rate(0.8);
  yepSound.setVolume(8);
  thankyouSound.setVolume(8);
  thankyouSound.rate(0.8);
  crossstreetSound.setVolume(2);
}
var scenename = "scene1";
function draw() {
  if (scenename == "scene1"){
    drawScene1();
  }else if (scenename == "scene2"){
    drawScene2();
  }else if (scenename == "scene3"){
    drawScene3();
  }else if (scenename == "scene4"){
    drawScene4();
  }else if (scenename == "scene5"){
    drawScene5();
  }else if (scenename == "scene6"){
    drawScene6();
  }else if (scenename == "scene7"){
    drawScene7();
  }else if (scenename == "scene8"){
    drawScene8();
  }
}
function drawScene1(){
  push();
  drawHome();
  drawText1()
  drawDoor();
  pop();
}
function drawHome(){ 
    drawwall();
    drawwindow();
    image(light.image, 450, 330, 500, 210);
    drawdoorbasic();  
}
let wallr=60;
let wallg=10;
let wallb=10;
function drawwall(){
  if(door.readytoopen==true){
    if(wallr>0){
      wallr-=1;
    }
    if(wallg>0){
      wallg-=1;
    }
    if(wallb>0){
      wallb-=1;
    }
  }
  background(wallr, wallg, wallb);
}
let windowr=10;
let windowg=20;
let windowb=70;
function drawwindow(){
  if(door.readytoopen==true){
    if(windowr>0){
      windowr-=1;
    }
    if(windowg>0){
      windowg-=1;
    }
    if(windowb>0){
      windowb-=1;
    }
  }
  push();
  fill(windowr, windowg, windowb);
  rect(300, 300, 300, 150);
  arc(376, 300, 150, 100, 0, PI);
  arc(526, 300, 150, 100, 0, PI);
  line(450, 300, 450, 450);
  line(0, 700, windowWidth, 700);
  pop();
}
let doorbasicr=70;
let doorbasicg=50;
let doorbasicb=10;
function drawdoorbasic(){
  if(door.readytoopen==true){
    if(doorbasicr>0){
      doorbasicr-=1;
    }
    if(doorbasicg>0){
      doorbasicg-=1;
    }
    if(doorbasicb>0){
      doorbasicb-=1;
    }
  }
  fill(doorbasicr, doorbasicg, doorbasicb);
  rect(900, 300, 300, 400);
}
function drawText1(){
  push();
  textSize(100);
  fill(text1.color);
  text("START MY BLIND TRIP", 300, 150);
  if(mouseX>300 && mouseX<1700 && mouseY>50 && mouseY<150){
    fill(250);
    text("START MY BLIND TRIP", 300, 150);
  }
  pop();
}
let doora=0;
function drawdooropen(){
  if(door.opened==true){
    rotate(PI/10);
    translate(115, -315);
    rect(door.x+5, door.y+15, 50, 10); 
  }else{
    rect(door.x+5, door.y+15, 50, 10); 
  }
}
let doortime=0;
function drawDoor(){  
  if (doora<250){
    doora+=1;
  }
  if(door.opened==true){
    if(doortime<100){
      doortime+=1;
    }
    if(doortime>=2){
      push();
      noStroke();
      fill(250, doora);
      translate(40, 40);
      rect(door.x, door.y, 15, 40);
      drawdooropen();
      pop();
      draws1outside();
    }   
  }else{
    push();
    noStroke();
    fill(250, doora);
    if(door.readytoopen == true){
      rect(door.x, door.y, 15, 40);
      if(mouseX>door.x+5 && mouseX<door.x+55 &&
        mouseY>door.y+15 && mouseY<door.y+25){          
         fill(200, 110, 100);
         drawdooropen();
        }else{
          drawdooropen();   
        }
    }
    pop();
  }
}
function draws1outside(){
  if(mouseX>900 && mouseX<950 && mouseY>300 && mouseY<700){
    push();
    fill(100, 10, 0);
    rect(900, 300, 60, 400);
    fill(150, 100, 10);
    rect(900, 600, 60, 30);
    rect(910, 550, 50, 30);
    rect(920, 510, 40, 20);
    pop();
  }else{
    push();
    fill(100, 10, 0);
    rect(900, 300, 50, 400);
    fill(150, 100, 10);
    rect(900, 600, 50, 30);
    rect(910, 550, 40, 30);
    rect(920, 510, 30, 20);
    pop();
  } 
}
function drawScene2(){
  background(100, 10, 0);
  drawstairs();
  updatestairs();
  drawtext0();
  if(footprint.captured <3){
    drawfoot();
    drawfootprint();
  }
  if(footprint.captured ==3){
    push();
    stroke(250);
    textSize(100);
    drawTextsafe();
    pop();
  }
  drawTextouch();
}
function drawstairs(){
  push();  
  fill(150, 100, 10);
  rect(stairsx, stairsy, 600, 150);
  fill(150, 100, 10);
  rect(stairsx-100, stairsy+200, 800, 180);
  fill(150, 100, 10);
  rect(stairsx-200, stairsy+400, 1000, 300);
  fill(250);
  strokeWeight(4);
  line(stairsx-140, stairsy+410, stairsx+700, stairsy+410);
  line(stairsx-40, stairsy+210, stairsx+600, stairsy+210);
  line(stairsx+60, stairsy+10, stairsx+500, stairsy+10);
  pop();
}
var stairsx=300;
var stairsy=100;
function updatestairs(){
  if(stairsx>=300 && stairsx<350 && stairsy>=100 && stairsy<150){
    stairsx += 0.05*width*cos(frameCount*0.01)*randomGaussian(0, 0.1);
    stairsy += 0.05*height*cos(frameCount*0.011)*randomGaussian(0, 0.1);
  }else{
    stairsx=300;
    stairsy=100;
  }
}
let s1t0=0;
function drawtext0(){
  if (s1t0>=0 && s1t0<250){
    s1t0+=1;
  }
  if (s1t0==250){
    s1t0=-1;
  }
  push();
  fill(0, s1t0);
  textSize(30);
  textStyle(BOLD);
  text("Can't see stairs clearly!", 1000, 200); 
  pop()
}
function drawfoot(){
  image(foot.image, mouseX-90, mouseY-90, 200, 200);
}
function drawfootprint(){
  image(footprint.image, footprint.x, footprint.y, 200, 200);
  if (footprint.captured == 0){
    if (footprint.x >= 400 && footprint.x < 800 & footprint.y >= 500 && footprint.y < 550){
      updatefootprint()
    }else{
      footprint.x = 400;
      footprint.y = 500;
    }
  }else if(footprint.captured == 1){
    if(footprint.x >= 400 && footprint.x < 800 & footprint.y >= 300 && footprint.y < 350){
      updatefootprint();
    }else{
      footprint.x = 500;
      footprint.y = 300;
    }
  }else if(footprint.captured == 2){
    if(footprint.x >= 400 && footprint.x < 800 & footprint.y >= 100 && footprint.y < 150){
      updatefootprint()
    }else{
      footprint.x = 500;
      footprint.y = 100;
    }
  }else if(footprint.captured == 3){
    footprint.x = 0;
    footprint.y = 0;
  }
}
let s = 0;
function drawTextsafe(){
  push();
  if(s>=0 && s < 250){
    s = s + 1;
  }
  noStroke();
  fill(0, s);
  textSize(100);
  textStyle(BOLD);
  text("Safe!", 1000, 200); 
  textSize(30);
  text("Go to the street", 1200, 450); 
  if(mouseX>scene2nextbutton.x && mouseX<scene2nextbutton.x+60 && 
    mouseY>scene2nextbutton.y-10 && mouseY<scene2nextbutton.y+30){
      noStroke();
      translate(5, 0);
      rect(scene2nextbutton.x, scene2nextbutton.y, 50, 20);
      triangle(scene2nextbutton.x+50, scene2nextbutton.y-10, 
        scene2nextbutton.x+60, scene2nextbutton.y+10,
        scene2nextbutton.x+50, scene2nextbutton.y+30)
    }else{
      rect(scene2nextbutton.x, scene2nextbutton.y, 50, 20);
      triangle(scene2nextbutton.x+50, scene2nextbutton.y-10, 
      scene2nextbutton.x+60, scene2nextbutton.y+10,
      scene2nextbutton.x+50, scene2nextbutton.y+30);
    }
  scene2nextbutton.appear=true;
  pop();
}
let o = 0;
let ouchs=0;
function drawTextouch(){
  if (textouch.real == true){   
    if(o>=0 && o < 250){
      o = o + 6;
    }
    if(o>=250 ){
      o = -1;
      textouch.real = false;
    }     
    if(ouchs>=0 && ouchs<10){
      ouchs+=1;      
    }
    if(ouchs>=10){
      ouchs=-1;
      ouchSound.play();
      falldownstairSound.play();
    }
  }else{
    o=0;
    ouchs=0;
  }
  push();
  stroke(250, 0, 0, o);
  fill(250, 0, 0, o);
  textSize(100);
  textStyle(BOLD);
  text("Ouch!", mouseX+50, mouseY-50);
  
  
  pop();
}
function updatefootprint(){
  footprint.x += 0.05*width*cos(frameCount*0.01)*randomGaussian(0, 0.1);
  footprint.y += 0.05*height*cos(frameCount*0.011)*randomGaussian(0, 0.1);
}
function drawScene3(){
  playstreetsound();
  background(street.image);
  image(foot.image, windowWidth/2, windowHeight -150, 200, 200);
  draws3t0();
  drawSign1();
  drawSign2();
}
let streetv=1;
function playstreetsound(){
  if(scenename == "scene3"){
    if(! streettrafficSound.isPlaying()){ 
      streettrafficSound.setVolume(streetv);
      streettrafficSound.play();
    }
  }else{
    streettrafficSound.stop();
  }
}
let s3t0=0;
function draws3t0(){
  if (s3t0>=0 && s3t0<250){
    s3t0+=1;
  }
  if (s3t0==250){
    s3t0=-1;
  }
  push();
  fill(0, s3t0);
  textSize(30);
  textStyle(BOLD);
  text("I want to go to the sea", 300, 500);
  pop();
}
function drawsign1basic(){
  push();
  fill(255);
  noStroke();
  translate(320, 115);
  triangle(600, 200, 650, 150, 650, 250);
  quad(650, 150, 900, 180, 900, 220, 650, 250);
  pop();
}
function drawsign1text(){
  tx=970;
  ty=330;
  push();
  changeText();
  text("M", tx, ty);
  changeText();
  text("O", tx+25, ty);
  changeText();
  text("U", tx+45, ty);
  changeText();
  text("N", tx+65, ty);
  changeText();
  text("T", tx+85, ty);
  changeText();
  text("S", tx+110, ty);
  changeText();
  text("t", tx+130, ty);
  pop();
}
function drawSign1(){
  if (mouseX>950 && mouseX<1200 && mouseY>300 && mouseY<350){
    push();
    translate(-5, -5);
    drawsign1basic();
    drawsign1text();
    pop()
  }else{
    drawsign1basic();
    drawsign1text();
  }
}
function changeText(){
  fill(random(0, 250), random(0, 250), random(0, 250), random(30, 50));
  textSize(random(10, 50));
  textWidth(40);
}
function drawSign2(){
  if(mouseX>1250 && mouseX<1500 && mouseY>300 && mouseY<400){  
    push();
    translate(5, -5);
    drawsign2basic();
    drawsign2text();
    pop();
  }else{   
    drawsign2basic();
    drawsign2text();
  }
}
function drawsign2text(){
  drawLetter("L",900, 200, 50);
  drawLetter("A",930, 200, 50);
  drawLetter("K",960, 200, 50);
  drawLetter("E",990, 200, 50);
  drawLetter("S",1040, 200, 30);
  drawLetter("t",1060, 200, 30);
}
function drawsign2basic(){
  push();
  fill(255);
  noStroke(); 
  translate(345, 160);
  triangle(1210, 200, 1160, 150, 1160, 250);
  quad(1160, 150, 910, 180, 910, 220, 1160, 250);
  pop();
}
function drawLetter(letter, lx, ly, ls){
  push();
  noStroke();
  textSize(ls);
  fill(random(0, 250), random(0, 250), random(0, 250), random(10, 30));
  translate(400, 175);
  text(letter, lx, ly);
  for (let n = 0; n < 10; n++) {
    noStroke();
    fill(random(0, 250), random(0, 250), random(0, 250), random(0, 250));
    ellipse(random(lx -15, lx+35 ), random(ly -38, ly + 12), 5);
  }
  pop();
}
let s4con1=-50;
function drawScene4(){
  background(wrongway.image);
  image(foot.image, windowWidth/2, windowHeight -150, 200, 200);
  if(s4con1<250){
    s4con1 +=1;
  }
  push();
  stroke(0, s4con1);
  fill(0, s4con1);
  textSize(30);
  textStyle(BOLD);
  text("It looks not the way to the sea", 150, 500);
  textSize(20);
  text("GO BACK", 630, 820);
  drawback();
  pop();
}
function drawback(){
  if(mouseX>690 && mouseX<720 && mouseY>850 && mouseY<900){
    push();
    translate(0, 5);
    rect(700, 850, 10, 40);
    triangle(690, 890, 720, 890, 705, 900);
    pop();
  }else{
    rect(700, 850, 10, 40);
    triangle(690, 890, 720, 890, 705, 900);
  }
  
}
let s5b=150;
function drawScene5(){
  if (s5b>0){
    s5b-=0.8;
  }
  background(s5b);
  image(walkingstick.image, mouseX-70, mouseY-150, 500, 500);
  push();
  fill(250);
  textSize(30);
  text("Its getting dark", 300, 200);
  text("I can use walking stick to feel the road and walk", 300, 300);
  pop();
  drawlightview();
  drawblock();
}
var view={appear: false, click: 0};
let v = 0;
let changetos6=0;
function drawlightview(){
  if(view.click<=3){
    push();
    if (view.appear == true){
      if(v==0){
        stickSound.play();
        walkingSound.play();
      }
      if(v>=0 && v < 250){
        v = v + 8;
      }
      if(v>=250 ){
        v = -1;
        view.appear = false;
      } 
    }else{
      v=0;
    }
    noStroke();
    fill(250, v);
    ellipse(mouseX-80, mouseY-160, 100);
    fill(0, v);
    ellipse(mouseX-80, mouseY-160, 90);
    pop();
  }
  if(view.click==3){  
    if(changetos6>=0 && changetos6<40){
      changetos6+=1;
    }
    if(changetos6>=40){
      scenename = "scene6";
    } 
  }
}
var block={appear: false};
let b = 0;
function drawblock(){
  push();
  if (block.appear == true){
    if(b==0){
      stickSound.play();
    }
    if(b>=0 && b < 250){
      b = b + 8;
    }
    if(b>=250 ){
      b = -1;
      block.appear = false;
    } 
  }else{
    b=0;
  }
  noStroke();
  fill(250, 0, 0, b);
  ellipse(mouseX-80, mouseY-160, 100);
  fill(0, b);
  ellipse(mouseX-80, mouseY-160, 90);
  pop();
}
function drawScene6(){
  background(0);
  drawfirstcross();
  if (s6l==100){
    s6con1.real = true;
    draws6con1();
    ask.real = true;
    drawask();
  }
  draws6con2();
  if(ask.count==4){
    if(s6c2==0){
      s6con4.real=true;
      draws6con4();
    }
    if(s6c2==0 && s6con4.real==false){
      scenename= "scene7";
    }
  }
}
var ask={real: false, count: 0};
function drawask(){
  if(ask.real==true && ask.count<4){
    if(mouseX>200 && mouseX<260 && mouseY>260 && mouseY<300){
      push();
      fill(250);
      stroke(250);
      rect(200, 260, 60, 40);
      fill(0);
      textSize(30);
      textStyle(BOLD);
      text("ask", 205, 292);
      pop();
    }else{
      push();
      fill(250);
      textSize(30);
      textStyle(BOLD);
      text("ask", 205, 292);
      noFill();
      stroke(250);
      rect(200, 260, 60, 40);
      pop();
    }
  }
}
var s6con1={real: false};
let s6c1 = 0;
function draws6con1(){
  push();
  if (s6con1.real == true){
    if(s6c1>=0 && s6c1 < 250){
      s6c1 = s6c1 + 1;
    }
    if(s6c1>=250 ){
      s6c1 = -1;
      s6con1.real = false;
    }
    if(! crossstreetSound.isPlaying()){
      crossstreetSound.play();
    }
  }else{
    s6c1=0;
  }
  stroke(250, s6c1);
  fill(250, s6c1);
  textSize(30);
  textStyle(BOLD);
  text("I need to cross street. So many cars. I need some help.", 300, 300);
  pop();
}
var s6con2={real: false};
let s6c2 = 0;
function draws6con2(){
  push();
  if (s6con2.real == true){
    if(s6c2>=0 && s6c2 < 250){
      s6c2 = s6c2 + 2;
    }
    if(s6c2>=250 ){
      s6c2 = -1;
      s6con2.real = false;
      
    }
    if(s6c2==2){
      askforhelpSound.play();
    }
  }else{
    s6c2=0;
  }
  stroke(250, s6c2);
  fill(250, s6c2);
  textSize(30);
  textStyle(BOLD);
  text("Anyone can help me?", 300, 300);
  pop();
}
var s6con4={real: false};
let s6c4 = 0;
function draws6con4(){
  push();
  if (s6con4.real == true){
    if(s6c4>=0 && s6c4 < 250){
      s6c4 = s6c4 + 2;
    }
    if(s6c4>=250 ){
      s6c4 = -1;
      s6con4.real = false;
      
    }
    if(s6c4==2){
      yepSound.play();
    }
    
  }else{
    s6c4=0;
  }
  stroke(250, s6c4);
  fill(250, s6c4);
  textSize(30);
  textStyle(BOLD);
  text("Yep", 300, 300);
  pop();
}
let s6l = 0;
function drawfirstcross(){
  push();
  fill(250, 20);
  if(s6l<100){
    s6l +=0.5;
  }
  translate(0, s6l);
  rect(200, 0, 1000, 100);
  pop();
}
function drawScene7(){
  background(0);
  drawCrossstreet();
  if(! walkingSound.isPlaying() && c1==0){
    walkingSound.play();
  }
}
let s7l = -600;
let s7l2 = -800;
function drawCrossstreet(){
  push();
  fill(250, 20);
  if(s7l<1000){
    s7l +=1;
  }
  translate(0, s7l);
  rect(200, 700, 1000, 100);
  rect(200, 550, 1000, 100);
  rect(200, 400, 1000, 100);
  rect(200, 250, 1000, 100);
  rect(200, 100, 1000, 100);
  pop();
  if (s7l>=700){
    con1.real = true;    
    drawcon1();
  }
  if(s7l2<1300){
    s7l2 +=1;
  }
  if(s7l2>=900){
    con2.real = true; 
    drawcon2();  
  }
  if(s7l2>=1300){
    scenename = "scene8";
  } 
}
var con1={real: false};
let c1 = 0;
let seav = 1;
function drawcon1(){
  seaawindSound.setVolume(seav);
  if(seav<4){
    seav+=0.005;
  }
  push();
  if (con1.real == true){  
    if(c1>=0 && c1 < 250){
      c1 = c1 + 2;
    }
    if(c1>=250 ){
      c1 = -1;
      con1.real = false;
      seaawindSound.play();
    }
    if(c1==2){
      walkingSound.stop();
      thankyouSound.play();
    }
  }else{
    c1=0;
  }
  stroke(250, c1);
  fill(250, c1);
  textSize(30);
  textStyle(BOLD);
  text("Thank you", 200, 200);
  pop();
}
var con2={real: false};
let c2 = 0;
function drawcon2(){ 
  push();
  if (con2.real == true){
    if(c2>=0 && c2 < 250){
      c2 = c2 + 0.5;
    }
    if(c2>=250 ){
      c2 = -1;
      con2.real = false;
    }
  }else{
    c2=0;
  }
  stroke(250, c2);
  fill(250, c2);
  textSize(30);
  textStyle(BOLD);
  text("I heard the sea", 200, 200);
  pop();
}
let openeye=0;
function drawScene8(){
  background(0);
  if (openeye<200){
    openeye+=1;
  }
  push();
  fill(250, openeye);
  textSize(30);
  textStyle(BOLD);
  text("Open my eyes", 180, 300);
  pop();
  if (mouseX>405 && mouseX<450 && mouseY>280 && mouseY<300){
    image(eye.image, 400, 280, 230, 155);
  }else{
    push();
    stroke(250, openeye);
    strokeWeight(2);
    line(405, 290, 450, 290);
    pop();
  }
  drawsea();
}
var sea={real: false};
function drawsea(){
  if(sea.real==true){
    background(0);
    drawmoon();
    drawsealine();
    drawreflection();
  }
}
var appearspeed=0.1;
let moonr=0;
let moong=0;
let moonb=0;
function drawmoon(){
  if (moonr<100){
    moonr+=appearspeed;
  }
  if (moong<100){
    moong+=appearspeed;
  }
  if (moonb<0){
    moonb+=appearspeed;
  }
  push();
  fill(moonr, moong, moonb);
  ellipse(400, 100, 60, 60);
  pop();
}
let sealiner=0;
let sealineg=0;
let sealineb=0;
function drawsealine(){
  if (sealiner<10){
    sealiner+=appearspeed;
  }
  if (sealineg<10){
    sealineg+=appearspeed;
  }
  if (sealineb<100){
    sealineb+=appearspeed;
  }
  push();
  stroke(sealiner, sealineg, sealineb);
  line(0, 300, windowWidth, 300);
  pop();
}
let flectionr=0;
let flectiong=0;
let flectionb=0;
function drawreflection(){
  if (flectionr<100){
    flectionr+=appearspeed;
  }
  if (flectiong<100){
    flectiong+=appearspeed;
  }
  if (flectionb<0){
    flectionb+=appearspeed;
  }
  push();
  stroke(flectionr, flectiong, flectionb);
  line(450 - random(40, 50), 310, 370 + random(40, 50), 310);
  line(440 - random(40, 50), 330, 380 + random(40, 50), 330);
  line(430 - random(40, 50), 350, 380 + random(40, 50), 350);
  line(410 - random(40, 50), 370, 380 + random(40, 50), 370);
  line(400 - random(40, 50), 380, 380 + random(40, 50), 380);
  line(390 - random(40, 50), 390, 390 + random(40, 50), 390);
  line(380 - random(40, 50), 400, 380 + random(40, 50), 400);
  line(390 - random(40, 50), 410, 390 + random(40, 50), 410);
  line(410 - random(40, 50), 420, 410 + random(40, 50), 420);
  pop();
}
function mouseClicked(){ 
  if (scenename == "scene1") {   
    if(door.readytoopen == true && mouseX>door.x+5 && mouseX<door.x+55 &&
      mouseY>door.y+15 && mouseY<door.y+25){
        door.opened=true;
        dooropenSound.play();            
    }
    if (mouseX>300 && mouseX<1700 && mouseY>50 && mouseY<150){  
      text1.color = [250];
      door.readytoopen = true;
    }   
    if(door.opened==true && mouseX>900 && mouseX<950 && mouseY>300 && mouseY<700){
      scenename = "scene2";
    } 
  }
  if (scenename == "scene2"){
    if (scene2nextbutton.appear == false){
      if(dist(mouseX-90, mouseY-90, footprint.x, footprint.y) < 15){
        footprint.captured += 1;
      }else{
        textouch.real = true;
      }
    }else if(scene2nextbutton.appear == true){
      if(mouseX>scene2nextbutton.x && mouseX<scene2nextbutton.x+60 && 
        mouseY>scene2nextbutton.y-10 && mouseY<scene2nextbutton.y+30){
        scenename = "scene3";
      }
    }
  }
  if(scenename == "scene3"){
    if (mouseX>950 && mouseX<1200 && mouseY>300 && mouseY<350){
      if(streetv>0){
        streetv-=0.5;
      }
      scenename = "scene4";
    }else if(mouseX>1250 && mouseX<1500 && mouseY>300 && mouseY<400){
      if(streetv>0){
        streetv-=0.5;
      }
      if(streetv==0){
        streettrafficSound.stop();
      }
      scenename = "scene5";
    }
  }
  if(scenename == "scene4"){
    if(mouseX>690 && mouseX<720 && mouseY>850 && mouseY<900){
      streetv=1;
      scenename = "scene3";
    }
  }
  if(scenename == "scene5"){
    if(mouseX>windowWidth/2-100 && mouseX<windowWidth/2+100){
      view.appear = true;  
      drawlightview();
      view.click += 1;
    }else{
      block.appear = true;
      drawblock();
    }
  }
  if(scenename == "scene6"){
    if(mouseX>200 && mouseX<260 && mouseY>260 && mouseY<300){
      s6con2.real = true;
      ask.count +=1;
    }
  }
  if(scenename == "scene8"){
    if (mouseX>405 && mouseX<450 && mouseY>280 && mouseY<300){
      sea.real=true;
    }
  }
}