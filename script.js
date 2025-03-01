// alert("welocome To Tic Toe Annonmuyss");
let music = new Audio("music.mp3");
let turnmp = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let isgameovr = false;
let turn = "X";
function changeTurn() {
  if (turn === "X") {
    turn = "0";
    document.querySelector(".mover").style.left = "65.35px";
    document.querySelector(".laptopMover").style.left = "65.35px"
  } else {
    turn = "X";
    document.querySelector(".mover").style.left = "0";
     document.querySelector(".laptopMover").style.left = "0"
  }
}
let boxclck = document.querySelectorAll(".box");
boxclck.forEach((ram) => {
  ram.addEventListener("click", () => {
    if (!isgameovr && ram.textContent === "") {
      ram.textContent = turn;
      checkWin();
      cheakDraw();
      changeTurn();
    }
  });
});
function checkWin() {
  let winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winCondition.length; i++) {
    let v0 = boxclck[winCondition[i][0]].textContent;
    let v1 = boxclck[winCondition[i][1]].textContent;
    let v2 = boxclck[winCondition[i][2]].textContent;
    if (v0 != "" && v0 === v1 && v0 === v2) {
      isgameovr = true;
      let res = document.querySelector(".result");
      let lappy = document.querySelector(".lappyResult");
      res.style.display = "block";
      res.textContent = turn + " Won!! 🏆";
      lappy.style.display = "block";
      lappy.textContent = turn + " Won!!" +"🏆";
      for (j = 0; j < 3; j++) {
        boxclck[winCondition[i][j]].style.backgroundColor = "#08D9D6";
        boxclck[winCondition[i][j]].style.color = "#000";
      }
    }
  }
}
function cheakDraw() {
  if (!isgameovr) {
    let isdraw = true;
    boxclck.forEach((e) => {
      if (e.textContent === "") {
        isdraw = false;
      }
    });
    if (isdraw) {
      isgameovr = true;
      let res = document.querySelector(".result");
      res.style.display = "block";
      res.textContent = "Draw😔";
      let lappy = document.querySelector(".lappyResult");
      lappy.style.display = "block";
      lappy.textContent ="Draw😔"
    }
  }
}
let resetbtn = document.querySelector("#reset");
resetbtn.addEventListener('click' , function(){
    isgameovr = false;
    turn = "X";
    document.querySelector(".mover").style.left = "0";
    document.querySelector(".result").textContent = "";
    document.querySelector(".lappyResult").textContent="";
    document.querySelector(".laptopMover").style.left = "0";
    boxclck.forEach(e =>{
        e.textContent = "";
        e.style.removeProperty("background-color");
        e.style.removeProperty("color");
    })
    document.querySelector(".result").style.display = "none";
})
let reLapBtn = document.querySelector(".changeLaptopSetting");
reLapBtn.addEventListener('click',function(){
  isgameovr = false;
  turn = "X";
  document.querySelector(".laptopMover").style.left = "0";
  document.querySelector(".lappyResult").textContent="";
  document.querySelector(".mover").style.left = "0";
  boxclck.forEach(e =>{
    e.textContent = "";
    e.style.removeProperty("background-color");
    e.style.removeProperty("color");
  })
  document.querySelector(".result").textContent = "";
  document.querySelector(".result").style.display = "none";

})

