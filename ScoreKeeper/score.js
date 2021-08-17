const buttons = document.querySelectorAll("button");
const p1button = document.querySelector("#p1");
const p2button = document.querySelector("#p2");
const resetbutton = document.querySelector("#reset");
const spans = document.querySelectorAll("span");

let gamecount = 11;
const options = document.querySelectorAll("option");

const gcSelect = document.querySelector("select");
gameCount = gcSelect.value;

let p1Count = 0;
let p2Count = 0;

for(let pressbutton of buttons)//setting the final count of the game
{
    pressbutton.addEventListener('click', function(){
        gameCount = parseInt(gcSelect.value);
    });
}

resetbutton.addEventListener('click', function(){
    p1Count=0;
    p2Count=0;
    spans[0].innerText = `${p1Count}`;
    spans[1].innerText = `${p2Count}`;
});


p1button.addEventListener('click', function(){
    p1Count++;
    spans[0].innerText = `${p1Count}`;

});
p2button.addEventListener('click', function(){
    p2Count++;
    spans[1].innerText = `${p2Count}`;

});





