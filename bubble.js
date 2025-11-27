let timmer = 60;
let score = 0;
let hitRn =0;

function increaceScore(){
    score+=10;
    document.querySelector("#scoreval"). textContent = score;
}

function getNewHit(){
    hitRn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval"). textContent = hitRn; 
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 102; i++) {
    var num = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${num}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimmer() {
  var stoptimmer = setInterval(function () {
    if (timmer > 0) {
      timmer--;
      document.querySelector("#timmerval").textContent = timmer;
    } else {
      clearInterval(stoptimmer);
      document.querySelector("#pbtm"). innerHTML =`<h1>Game Over...!</h1>`;
    }
  }, 1000);
}
document.querySelector("#pbtm").addEventListener("click", function(dets){
   var clickedNum = (Number(dets.target.textContent))
    if(clickedNum === hitRn){
        increaceScore();
        makeBubble();
        getNewHit();
    }
})

runTimmer();
makeBubble();
getNewHit();

