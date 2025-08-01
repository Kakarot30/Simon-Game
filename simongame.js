let gameSeq =[];
let userSeq =[];

let btns = ["yellow","purple","red","green"];

let start = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(start == false){
        console.log("Game Started");
        start = true;

        levelUp();
    }    
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = "Level " + level;

    let randomIndex = Math.floor(Math.random()*3);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFlash(randomBtn);
}

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        resetGame();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function resetGame(){
    gameSeq = [];
    userSeq = [];
    start = false;
    level = 0;
}