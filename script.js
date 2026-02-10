let userscore=0;
let compscore=0;
const choices= document.querySelectorAll(".choice");
let choicePaper= document.querySelector("#paper");
let choiceRock= document.querySelector("#rock");
let choiceScissor= document.querySelector("#scissor");
let userScore=document.querySelector("#user-score");
let compScore=document.querySelector("#comp-score");
let message=document.querySelector("#msg");
let userPick=document.querySelector(".userpick");
let compPick=document.querySelector(".comppick");
let choose= document.querySelectorAll(".choose");
let reset= document.querySelector("#rst");
let newGame=document.querySelector("#newgame");
let result=document.querySelector(".result");
let finish=document.querySelector("#finish");




reset.addEventListener("click",()=>{
    userscore=0;
    compscore=0;
    userScore.innerText=(userscore);
    compScore.innerText=(compscore);
    userPick.innerText=("User");
    compPick.innerText=("Computer")
    userPick.style.backgroundColor=""
    compPick.style.backgroundColor=""
    message.innerText=("Play Your Turn");
})

newGame.addEventListener("click",()=>{
    userscore=0;
    compscore=0;
    userScore.innerText=(userscore);
    compScore.innerText=(compscore);
    userPick.innerText=("User");
    compPick.innerText=("Computer")
    userPick.style.backgroundColor=""
    compPick.style.backgroundColor=""
    message.innerText=("Play Your Turn");
    result.classList.remove("result", "newGame");
   
    

})

// const disablechoice=()=>{
//    for (let choice of choices){
//     choice.disabled=true;
//    }   
   
   
// }
// const enablechoice=()=>{
//     choices.forEach((choice)=>{
//     choice.disabled=false;
//     })
// }


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        decision(userChoice);
    })
})


const genCompChoice=()=>{
    const choices=["Paper", "Scissor", "Rock"]
    let choiceidx=Math.floor(Math.random()*3);

    return choices[choiceidx]
   
    }

    const draw=(compchoice)=>{
        message.innerText=("Draw. Play Again");
        choose.forEach((chose)=>{
            chose.innerText=(compchoice);
            chose.style.backgroundColor="yellow";
            
        })
        
    }

        //   const target=()=>{
        //     // if(userscore==="3" || compscore==="3"){
        //        if (userscore==2){
        //             finish.innerText=("congratulations!!")
        //             disablechoice();

                
        //         }    
        //             // result.classList.remove("hide");
            
                
        //     }
          

          



    const userwin=(userChoice,compChoice)=>{
        userscore++;
        userScore.innerText=(userscore);
        message.innerText=("You Win.");
        userPick.innerText=(userChoice);
        compPick.innerText=(compChoice);
        userPick.style.backgroundColor="green";
        compPick.style.backgroundColor="red";

       

       
    }

    const compwin=(compChoice, userChoice)=>{
        compscore++;
        compScore.innerText=(compscore)
        message.innerText=("Computer Win");
        userPick.innerText=(userChoice);
        compPick.innerText=(compChoice);
        userPick.style.backgroundColor="red";
        compPick.style.backgroundColor="green";

       

       

    }




const decision= (userChoice)=>{
    console.log("your choice is:", userChoice);

    const compChoice= genCompChoice();
    console.log("computer choice is:", compChoice);

    if (compChoice===userChoice){
        draw(compChoice);
        
    }else if(compChoice==="Paper"){
        if(userChoice==="Rock"){
            compwin(compChoice,userChoice);
        }else {
            userwin(userChoice,compChoice);
        }
    }else if(compChoice==="Rock"){
        if(userChoice==="Paper"){
            userwin(userChoice, compChoice);
        }else {
            compwin(compChoice,userChoice);
        }
    }else if(compChoice==="Scissor"){
        if(userChoice==="Paper"){
            compwin(compChoice,userChoice);
        }else {
            userwin(userChoice,compChoice);
        }
    }
    


    
}