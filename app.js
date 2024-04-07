let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

let userscore=document.querySelector("#user-score");
let compscore=document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});


const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    const randomi=Math.floor(Math.random()*3);
    return options[randomi];
};

const drawGame=()=>{
    console.log(`the game played is a draw.`);
}


const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    console.log(`The clicked choice of user is ${userChoice}`);
    console.log(`computer choice is ${compChoice}`);

    if(userChoice===compChoice){
        drawGame();
    }

    let userWin=true;
    if(userChoice==="rock" && compChoice==="paper"){
        userWin=false;
        
    }else if(userChoice==="paper" && compChoice==="scissors"){
        userWin=false;
        
    }else if(userChoice==="scissors" && compChoice==="rock"){
        userWin=false;
        
    }else{
        userWin=true;
    }   
    isWinner(userWin,userChoice,compChoice); 
};

const isWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        msg.innerText=`User Wins! Your ${userChoice} beats ${compChoice}`;
        userscore.innerText=userScore;
    }else{
        compScore++;
        msg.innerText=`User looses! Your ${compChoice} beats ${userChoice}`;
        compscore.innerText=compScore;
    }
}

