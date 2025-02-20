let boxes= document.querySelectorAll('.box');// selt all boxes with class 'box'
let resetButton=document.querySelector('#resetButton');// select reset button
let newGameButton=document.querySelector('#new-button');// select new game button
let msgContainer=document.querySelector(".msg-container");// select message container
let msg = document.querySelector("#msg");

// which turn first and should be alternative 
let turnO=true;// playerX , playeO

// winning combinations using array, using 2d array 
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

// reset the game
const resetGame = ()=> {
    turnO =true;
    enableBoxes();
    msgContainer.classList.add('hide');


};


boxes.forEach((box)=>{ // check if box is clicked and if its turn is playerO 
     box.addEventListener("click",()=>{

        // console.log("box was clicked"); to show in console 

        if(turnO){// if its playerO's turn
            box.innerText ="O";
            box.style.color="blue";
            turnO=false;// now turn is playerX's turn
        }
        else{ // if its playerX's turn
            box.innerText ="X";
            box.style.color="red";// color for playerX's turn
            turnO=true;
        }
        box.disabled = true; // disable the box so it can't be clicked again

        checkWinner(); // check if any player has won or not , this is a function
     });
});


// making the boxes disabled after winning the game
const disableBoxes=()=>{
    for(let box of boxes){
    box.disabled=true;
    
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
    box.disabled=false;
    box.innerText="";// removing the value after the win 
    }
};


const showWinner =(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;// ` not '
    msgContainer.classList.remove('hide');
    disableBoxes();
}

//  winning patterns 
const checkWinner=()=>{
    for (let pattern of winPatterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText, // position 1 value
        //     boxes[pattern[1]].innerText, // position 2 value
        //     boxes[pattern[2]].innerText // postion3 value 
        // );

        let position1Value= boxes[pattern[0]].innerText;
        let position2Value= boxes[pattern[1]].innerText;
        let position3Value= boxes[pattern[2]].innerText;

        if(position1Value!="" && position2Value!="" && position3Value!=""){
            if(position1Value===position2Value && position2Value===position3Value){
                // console.log("winner", position1Value); // to display in the console
                showWinner(position1Value);

        }
    }
}

};
newGameButton.addEventListener("click", resetGame); // when new game button is clicked , call resetGame function
resetButton.addEventListener("click", resetGame); // when reset button is clicked , call resetGame function