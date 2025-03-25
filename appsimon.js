let body=document.querySelector("body");
let start=false;
let computed=[];
let level=0;
let title=document.querySelector("h3");
let btns=document.querySelectorAll(".box");

function userflash(){
    console.log(btn.id);
      btn.classList.add("userflash")
     setTimeout(function(){
        btn.classList.remove("userflash");
     },200)
    
}
for(btn of btns){
    btn.addEventListener("click",userflash)
}

body.addEventListener("keydown",function(){
    if(start==false){
        start=true;
        console.log("Game started");
    }
});
function randomizer(){    //to generate a random number
    return (Math.floor(Math.random()*4));
}
function flash(btn){
    btn.classList.add("flashbtn");
    setTimeout(function(){btn.classList.remove("flashbtn");},250);
}
function levelup(){
  level++;
  title.innerText=`Level : ${level}`;
  let val=randomizer();
  let btn=document.querySelector(`#btn${val}`);
  flash(btn);
  computed.push=`btn${val}`;
}

// while(start==true){
//     levelup();
//     for(let i=0;i<computed.length;i++){
//         if(computed[i]!=)
//     }
// }


