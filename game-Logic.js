let bttnMode = document.querySelector("button");
let body = document.querySelector("body");
let para = document.querySelector(".scoreBoard");

let mode = "Light";

    bttnMode.addEventListener("click", () => {
       if(mode === "Light"){
        body.style.backgroundColor = "black";
        para.style.color = "white";
  
    mode = "Dark";
    console.log(mode);
}
else{
        body.style.backgroundColor = "White";
        para.style.color = "black";
  
    mode = "Light";
}
    })

    let userScore = 0;
    let compScore = 0;
    let drawgame = 0;
    let totalgame = 0;

    let choices = document.querySelectorAll(".choice");
    const message = document.querySelector("#mesContainer");
    let usercount = document.querySelector("#userScore");
    let compcount = document.querySelector("#compScore");
    let total = document.querySelector("#total");
    let draw = document.querySelector("#draw");

    const gencompchoice = () =>{
        const choices = ["rock","paper","scissor"];
        const choiceind = Math.floor(Math.random() * 3);
        const compchoice = choices[choiceind];
        return(compchoice);
    }

    choices.forEach((choice) => {
        choice.addEventListener("click", () =>{
            totalgame ++;
            total.innerText = totalgame;
            // message.innerText = "Choose Your Move";
            let userchoice = choice.getAttribute("id");
            // console.log(choice.getAttribute("id"));
            // console.log(userchoice);
            playgame(userchoice);
        });
    });

    let playgame = (userchoice1) => {
        
        // console.log("user chooice is " + userchoice1);
        const compchoice = gencompchoice();
        // console.log("user comp is " + compchoice);
        if(userchoice1 === compchoice){

            // console.log(`User Choice is ${userchoice1} and Computer Choice is ${compchoice}`);
            drawGame();
            // console.log("Game is Drawn");
        }
        else{
            let winuser = true;
            if(userchoice1 === "rock"){
                winuser = compchoice === "paper" ? false : true ;
            }
            else if(userchoice1 === "paper"){
                winuser = compchoice === "scissor" ? false : true ;
            }
            else{
                winuser = compchoice === "rock" ? false : true ;
            }

            showuserwin(winuser);
        }
    }

    const drawGame = () => {
        drawgame ++;
        console.log("Game is Draw");
        message.innerText = "Match Drawn Choose next Move";
        message.style.backgroundColor = "white";
        message.style.color = "black";
        draw.innerText = drawgame;
    }

    const showuserwin = (userwin) => {
        if(userwin){
            userScore ++;
            console.log("You Win");
            message.innerText = "You win Choose next Move";
            message.style.backgroundColor = "green";
            message.style.color = "white";
            usercount.innerText = userScore;
        }
        else{
            compScore ++;
            console.log("You Lose");
            message.innerText = "You Lose Choose next Move";
            message.style.backgroundColor = "red";
            message.style.color = "white";
            compcount.innerText = compScore;
        }
    }