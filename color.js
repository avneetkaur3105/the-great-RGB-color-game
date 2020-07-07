var numsquares=6
var colors = generaterandomcolor(numsquares);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numsquares=3;
    colors=generaterandomcolor(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++){
        if(colors[i])
        squares[i].style.backgroundColor=colors[i];
        else
        squares[i].style.display="none";}
});

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numsquares=6
    colors=generaterandomcolor(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";}
});



reset.addEventListener("click",function(){

 colors=generaterandomcolor(numsquares);
pickedcolor=pickcolor();
colordisplay.textContent=pickedcolor;
message.textContent="";
this.textContent="New Colors";
for(var i=0;i<squares.length;i++)
squares[i].style.backgroundColor=colors[i];

h1.style.backgroundColor="black";
});



colordisplay.textContent = pickedcolor;
for (var i = 0; i < squares.length; i++) {
    //add color to squares
    squares[i].style.backgroundColor = colors[i];
    //check
    squares[i].addEventListener("click", function () {
        var clickedcolor = this.style.backgroundColor;
        if (clickedcolor === pickedcolor) {
            message.textContent = "Correct";
            changecolor(clickedcolor);
            h1.style.backgroundColor = clickedcolor;
            reset.textContent="Play Again!";
        } else {
            this.style.backgroundColor = "transparent";
            message.textContent = "Try Again";
        }
    });
}
function changecolor(color) {
    for (var i = 0; i < squares.length; i++)
        squares[i].style.backgroundColor = color;
}
function pickcolor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generaterandomcolor(nums) {
    var arr = [];
    for (var i = 0; i < nums; i++) arr.push(randomcolor());
    return arr;
}
function randomcolor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
