let bttnMode = document.querySelector("button");
let body = document.querySelector("body");
let para = document.querySelector(".scoreBoard");

let mode = "Light";

    bttnMode.addEventListener("click", () => {
       if(mode === "Light"){
    bttnMode.addEventListener("click", () => {
        body.style.backgroundColor = "black";
        para.style.color = "white";
    })
    mode = "Dark";
    console.log(mode);
}
else{
    bttnMode.addEventListener("click", () => {
        body.style.backgroundColor = "White";
        para.style.color = "black";
    })
    mode = "Light";
}
    })

    let userScore = 0;
    let compScore = 0;

    let choices = document.querySelectorAll(".choice");

    const gencompchoice = () =>{
        const choices = ["rock","paper","scissor"];
        const choiceind = Math.floor(Math.random() * 3);
        const compchoice = choices[choiceind];
        return(compchoice);
    }

    let playgame = (userchoice1) => {
        console.log("user chooice is " + userchoice1);
        const compchoice = gencompchoice();
        // console.log("user comp is " + compchoice);
        if(userchoice1 === compchoice){

            console.log(`User Choice is ${userchoice1} and Computer Choice is ${compchoice}`);
            // console.log("Game Draw");
        }
    }

    choices.forEach((choice) => {
        choice.addEventListener("click", () =>{
            let userchoice = choice.getAttribute("id");
            // console.log(choice.getAttribute("id"));
            // console.log(userchoice);
            playgame(userchoice);
        });
    });
