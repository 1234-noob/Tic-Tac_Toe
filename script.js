let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset");
let newGamebtn  = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turnO = true;//player x , player Y;

let winPatterns = [[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[2,4,6],
[0,4,8]]; 

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnO === false){
            box.innerText = "O";
            turnO = true;
        }
        else{
            box.innerText = "X";
            turnO = false;
        }
        box.disabled= true;


        checkwinner();




       
    })

    const disableBoxes = () =>{
       for(let box of boxes){
        box.disabled = true;
       }
    };
    const enableBoxes = () =>{
         for(let box of boxes){
         box.disabled =false;
          box.innerText = "";
          msgContainer.classList.add("hide");
          resetbtn.classList.remove("reset-hide")
         
         }
      };


    const showWinner = (Winner) =>{
        msg.innerText = `Congratulation , Winner is ${Winner} `;
        msgContainer.classList.remove("hide");
        resetbtn.classList.add("reset-hide")
        disableBoxes();
        
       
        

    };

     const  resetGame = ()  =>{
        turnO = true;
        enableBoxes();
        msgContainer.classList.add("hide");

     };


    newGamebtn.addEventListener("click",resetGame);
    resetbtn.addEventListener("click",resetGame );

    const checkwinner = () =>{
        for(let pattern of winPatterns){
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 =  boxes[pattern[2]].innerText;

            if(pos1 !=="" && pos2 !=="" &&pos3 !==""){
                if(pos1 === pos2 && pos2 === pos3){
                    showWinner(pos1);
                    
                }
            }
        };
    };
    


})


