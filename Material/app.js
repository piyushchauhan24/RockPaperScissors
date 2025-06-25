let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usersc = document.querySelector("#userScore")
const compsc = document.querySelector("#compScore")

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const idx = Math.floor(Math.random()*3);
    return options[idx];  
}

const drawGame = () =>{
    console.log("the game was draw");
    msg.innerText = "The Game was draw Play again!";
    msg.style.backgroundColor = "blue";
}

const showWinner = (userwin,userChoice,compChoice) =>{
    if(userwin){
        console.log("you win");
        msg.innerText = `You Won! ${userChoice} beats ${compChoice}`; 
        msg.style.backgroundColor = "green";
        userScore++;
        usersc.innerText = userScore;
    }
    else{
        console.log("you Lose");
        msg.innerText =  `You Lose! ${compChoice} beats ${userChoice}`; 
        msg.style.backgroundColor = "red";
        comScore++;
        compsc.innerText = comScore;
    }
};
const playGame = (userChoice) => {
        console.log("user choice = ",userChoice);
        //generate computer choice
        let compChoice = genCompChoice();
        console.log("comp choice = ",compChoice);
        
        if(compChoice===userChoice){
            drawGame();
        }
        else{
            let userwin = true;
            if(userChoice === "rock"){
                userwin = compChoice==="paper"?false:true;
            }else if(userChoice === "paper") {
                userwin = compChoice==="scissors"?false:true;
            }
            else if(userChoice === "scissors") {
                userwin = compChoice==="rock"?false:true;
            }
            showWinner(userwin,userChoice,compChoice);
        }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});