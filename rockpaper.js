const buttons= document.querySelector(".buttons");
const myImg = document.querySelector("#myImg");
const pcImg = document.querySelector("#compImg");
const myId = document.querySelector("#myCount");
const pcId = document.querySelector("#pcCount");
const result = document.querySelector("#showResult");

let myCount=0;
let pcCount=0;

buttons.addEventListener('click',myChoice);

function myChoice(e){
    if(e.target.id)
    {
    buttons.style.display ="none";
    let myChoice= e.target.id;
    let pcChoice= e.target.parentElement.children[Math.round(Math.random()*2)].id;
    myImg.src= "loading.gif";
     pcImg.src= "loading.gif";
     result.textContent="Waiting for the Result...";
     result.style.color ="black";
    setTimeout(()=>{
    myImg.src=`${myChoice}.png`;
    pcImg.src=`${pcChoice}.png`;
    buttons.style.display ="block";
    checkWinner(myChoice,pcChoice);
    myId.textContent=myCount;
    pcId.textContent=pcCount;
    },1500)
    
   
    }
}


function checkWinner(player,computer)
{
    if(player===computer)
    {
        result.textContent="Opps, Draw";
        result.style.color="yellow";
    }
    else
    {
        if(player==="rock" && computer==="scissor")
        {
            won();
        }
        else if(player==="paper" && computer==="rock"){
            won();
        }
        else if(player==="scissor" && computer=="paper"){
            won();
        }
        else{
            lost();
        }

    }
}

function won()
{
    result.textContent="Congragulations You won";
    result.style.color="green";
    myCount++;
}

function lost(){
    result.textContent="You Lost, Try again";
    result.style.color="red"; 
    pcCount++;
}