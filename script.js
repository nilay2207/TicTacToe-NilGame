let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let cnt = 0;
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        cnt++;
        if(turnX){
            turnX = false;
            box.innerText = "X";
        }else{
            turnX = true;
            box.innerText = "O";
        }
        box.disabled = true;
        checkWinner();
        console.log(cnt);
    });
});

const resetGame = ()=>{
    cnt=0;
    turnX = true;
    enableBtns();
    msgContainer.classList.add("hide");
}


newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

const disableBtns=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBtns=()=>{
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
}


const showWinner = (winner)=>{
    msg.innerText = 'Congrutuations the winner is '+winner;
    msgContainer.classList.remove("hide");
    disableBtns();
}

const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                // console.log("winner");
                showWinner(pos1);
            }else{
                if(cnt == 9){
                    msg.innerText = "DRAW";
                    msgContainer.classList.remove("hide");
                }
            }
        }
        
    }
}


