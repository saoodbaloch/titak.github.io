console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("tone.mp3")
let gameOver = new Audio("gameover.mp3")
let turn = "x";
let isGameover = false;
// fuction to change the trun
const changeTurn = ()=>{
    return turn === "x"? "0": "x"
} 

// function to check for a win
let boxtexts = document.getElementsByClassName("textbox")
const checkWin = ()=>{
  let wins = [
    [0, 1, 2, 0, 5, 0],
    [3, 4, 5, 0, 15,0],
    [6, 7, 8, 0, 25,0],
    [0, 3, 6, -10, 15, 90 ],
    [1, 4, 7, 0, 15, 90],
    [2, 5, 8, 10, 15, 90],
    [0, 4, 8, 0, 15, 45],
    [2, 4, 6, 0, 15, -45]
  ]
  wins.forEach(e =>{
    if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "") ){
      document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " won"
      isGameover = true
      document.querySelector(".img-gif").getElementsByTagName("img")[0].style.width = "200px"
      document.querySelector(".line").style.transform =`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
      document.querySelector(".line").style.width = "30vw"
    }
  })
}

// game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".textbox");
    element.addEventListener('click', ()=>{
      if(boxtext.innerText === ""){
        boxtext.innerText = turn;
        turn = changeTurn();
        audioTurn.play();
        checkWin();
      }
    })
})
reset.addEventListener("click", ()=>{
let boxtexts = document.querySelectorAll(".textbox");
Array.from(boxtexts).forEach(element=>{
  element.innerText = "";
})
turn = "x";
isGameover = false;
  document.querySelector(".img-gif").getElementsByTagName("img")[0].style.width = "0px"
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})