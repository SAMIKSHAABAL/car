canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d");
mars_images_array = ["racing.jpg","racing.jpg","racing.jpg","racing.jpg"];
random_number=Math.floor(Math.random()*4) ;
console.log(random_number);
car_width = 100; 
car_height = 90;
background_image = mars_images_array[random_number];
car_image = "rover.png";
car_x = 10; 
car_y = 10;

car5_width = 100; 
car5_height = 90;

car5_image = "car5.png";
car5_x = 10; 
car5_y = 10;

function add() {
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

car_imgTag = new Image();
car_imgTag.onload = uploadrover;
car_imgTag.src = car_image;

car5_imgTag = new Image();
car5_imgTag.onload = uploadcar5;
car5_imgTag.src = car5_image

}
function  uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function  uploadrover(){
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
    }
    function  uploadcar5(){
        ctx.drawImage(car5_imgTag,car5_x,car5_y,car5_width,car5_height);
    }

    window.addEventListener("keydown", my_keydown);
function  my_keydown(e) {
KeyPressed=e.keyCode;
console.log(KeyPressed);
if(KeyPressed == '38') { up(); 
console.log("up"); }
if(KeyPressed == '40') { down();
console.log("down"); }
if(KeyPressed == '37') { left(); console.log("left"); }
if(KeyPressed == '39') { right(); console.log("right"); }
}

function up() {
if(car_y >=0) {
car_y = car_y - 10;        
console.log("When up arrow is pressed, x = " + car_x + " | y = " +car_y);
uploadBackground();
uploadrover(); 
}
}
function down() { 
if(car_y <=500) { 
    car_y =car_y+ 10; 
console.log("When down arrow is pressed, x = " + car_x + " | y = " +car_y); 
uploadBackground(); 
uploadrover(); 
} 
}
function left() { 
if(car_x >= 0) { 
car_x =car_x - 10; 
console.log("When left arrow is pressed, x = " + car_x + " | y = " +car_y); 
uploadBackground(); 
uploadrover(); } 
}
function right() { 
if(car_x <= 700) { 
car_x =car_x + 10; 
console.log("When right arrow is pressed, x = " + car_x + " | y = " +car_y); 
uploadBackground(); 
uploadrover(); } 
}

window.addEventListener("letterdown", my_letterdown);
function  my_letterdown(e) {
    letterPressed=e.keyCode;
    console.log(letterPressed);
    if(letterPressed == '87') { w(); 
    console.log("w"); }
    if(letterPressed == '83') { s();
    console.log("s"); }
    if(letterPressed == '65') { a(); console.log("a"); }
    if(letterPressed == '68') { d(); console.log("d"); }
    }

    function w() {
        if(car5_y >=0) {
        car5_y = car5_y - 10;        
        console.log("When w is pressed, x = " + car5_x + " | y = " +car5_y);
        uploadBackground();
        uploadcar5(); 
        }
        }
        function s() { 
        if(car5_y <=500) { 
            car5_y =car_y+ 10; 
        console.log("When s is pressed, x = " + car5_x + " | y = " +car5_y); 
        uploadBackground(); 
        uploadcar5(); 
        } 
        }
        function a() { 
        if(car5_x >= 0) { 
        car5_x =car5_x - 10; 
        console.log("When a is pressed, x = " + car5_x + " | y = " +car5_y); 
        uploadBackground(); 
        uploadcar5(); } 
        }
        function d() { 
        if(car5_x <= 700) { 
        car5_x =car5_x + 10; 
        console.log("When d is pressed, x = " + car5_x + " | y = " +car5_y); 
        uploadBackground(); 
        uploadcar5(); } 
        }
    




























  