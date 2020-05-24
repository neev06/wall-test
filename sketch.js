
var bullet,bullet2,bulllet3;
var wall,wall2,wall3;
var weight,speed,speed1,speed2;
var deformation3,deformation1,deformation2;
var l1,l2,l3,l4;
var flag=0;
var fl=0;
var f=0;
var temp;
var temp_wt;
var temps;
var temp_wts;
var tem;
var te;  
var thickness=Math.random()*100;
//console.log('2');
var thickness1=Math.random()*125;
var thickness2=Math.random()*150;;
var thick;
var thick1;
var thick2;

function setup() {
 createCanvas(1280,610);
 

 bullet=createSprite(50, 150, 40, 20);
   bullet.shapeColor="white";

  bullet2=createSprite(50, 350, 40, 20);
   bullet2.shapeColor="white";

   bulllet3=createSprite(50, 520, 40, 20);
   bulllet3.shapeColor="white";

wall=createSprite(1240,95,thickness,180);
 wall.shapeColor="orange";

 
wall2=createSprite(1240,300,thickness1,180);
wall2.shapeColor="orange";


wall3=createSprite(1240,500,thickness2,180);
 wall3.shapeColor="orange";

 speed=random(100,300);
 speed1=random(100,250);
 speed2=random(100,150);

 weight=random(50,90);
 weight1=random(15,105);
 weight2=random(46,200);

 l1=createSprite(800,200,16000,10);
 l1.shapeColor="black";

 l2=createSprite(800,400,16000,10);
 l2.shapeColor="black";

 l2=createSprite(800,610,16000,20);
 l2.shapeColor="black";
}

function draw() {
 
 background("pink");


  bullet.velocityX=speed;
  bullet2.velocityX=speed1;
  bulllet3.velocityX=speed2;

  textSize(15);
  text("RED = REJECTED",20,20);
  textSize(15);
  text("YELLOW = TEST AGAIN",180,20);
  textSize(15);
  text("GREEN = ACCEPTED",400,20);

  textSize(15);
  text("RED = REJECTED",20,230);
  textSize(15);
  text("YELLOW = TEST AGAIN",180,230);
  textSize(15);
  text("GREEN = ACCEPTED",400,230);
  text("Bullet Name : Magnum 20",620,20);
  textSize(15);
  
  text("Bullet Name : AK47",620,230);
  text("Bullet Name : AK56",620,430);
  textSize(10);
 
text("THICKNESS:",1050,20);
text("THICKNESS:",1050,430);
text("THICKNESS:",1050,230);

  textSize(15);
  text("RED = REJECTED",20,430);
  textSize(15);
  text("YELLOW = TEST AGAIN",180,430);
  textSize(15);
  text("GREEN = ACCEPTED ",400,430);
  textSize(10);
 
  text("SPEED :",850,20);
  text("WEIGHT :",950,20); 
  
  text("SPEED :",850,230);
  text("WEIGHT :",950,230); 
  
  text("SPEED :",850,430);
  text("WEIGHT :",950,430);


if(bullet.collide(wall) && flag==0){
  temp=speed;
  speed=0;
  temp_wt=weight;
  weight=0;
thick=thickness;
thickness=1250;

deformation3=0.5*temp_wt*temp*temp/22500;

flag=1;}

if(deformation3>70 ){
 
bullet.shapeColor="red";
textSize(40);
  text("REJECTED",500,150);
  
  textSize(10);
  text(Math.round(temp),890,20);
  text(Math.round(temp_wt),1000,20);
text(Math.round(thick),1115,20)
}


  else if(deformation3<70&&deformation3>40){
 bullet.shapeColor="yellow";
 textSize(40);
 text("TEST AGAIN",500,150);

 textSize(10);
 text(Math.round(temp),890,20);
 text(Math.round(temp_wt),1000,20);
 text(Math.round(thick),1115,20)
}

else if(deformation3<40){
bullet.shapeColor="green";
 textSize(40);
  text("ACCEPTED",500,150);
 
  textSize(10);
  text(Math.round(temp),890,20);
  text(Math.round(temp_wt),1000,20);

  text(Math.round(thick),1115,20)
}


if(bullet2.collide(wall2) && fl==0){
 temps=speed1;
 speed1=0;
 temp_wts=weight1;
 thick1=thickness1;

 deformation1=0.5*weight1*temps*temps/22500;
 fl=1;
}

 if(deformation1>70 ){
 
  bullet2.shapeColor="red";
   textSize(40);
   text("REJECTED",500,300);
   textSize(10);
  text(Math.round(temps),890,230);
  text(Math.round(temp_wts),1000,230);
  text(Math.round(thick1),1115,230)
   
  }
  
  else if(deformation1<70 && deformation1>40){
    bullet2.shapeColor="yellow";
    textSize(40);
    text("TEST AGAIN",500,300);
    textSize(10);
  text(Math.round(temps),890,230);
  text(Math.round(temp_wts),1000,230);
  text(Math.round(thick1),1115,230)
   
  }
  
  else if(deformation1<40){
    bullet2.shapeColor="green";
    textSize(40);
  text("ACCEPTED",500,300);
  textSize(10);
  text(Math.round(temps),890,230);
  text(Math.round(temp_wts),1000,230);
  text(Math.round(thick1),1115,230)
   

   }
  
   if(bulllet3.collide(wall3) && f==0){
    tem=speed2;
    speed2=0
    te=weight2;
    thick2=thickness2;
   

     deformation2=0.5*weight2*tem*tem/22500;
     f=1;
    }
   
     if(deformation2>70 ){
     
      bulllet3.shapeColor="red";
       textSize(40);
       text("REJECTED",500,510);

       textSize(10);
       text(Math.round(tem),890,430);
       text(Math.round(te),1000,430);
       text(Math.round(thick2),1115,430)
   
      }
      
      else if(deformation2<70&&deformation2>40){
        bulllet3.shapeColor="yellow";
        textSize(40);
        text("TEST AGAIN",500,510);
        textSize(10);
        text(Math.round(tem),890,430);
        text(Math.round(thick2),1115,430)
        text(Math.round(te),1000,430);
      }
      
      else if(deformation2<40){
        bulllet3.shapeColor="green";
        textSize(40);
        text("ACCEPTED",500,510);
        textSize(10);
       text(Math.round(tem),890,430);
       text(Math.round(thick2),1115,430)
       text(Math.round(te),1000,430);
       }
      
         
drawSprites();

 
}
