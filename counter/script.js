// counter program

const increasebtn = document.getElementById('increase');
const resetbtn = document.getElementById('reset');
const decreasebtn = document.getElementById('decrease');

const countlable = document.getElementById('CounterLable');
let count = 0;

increasebtn.onclick = function(){
    count++;
    countlable.textContent = count
}
decreasebtn.onclick = function(){
    count--;
    countlable.textContent = count
}
resetbtn.onclick = function(){
    count =0 ;
    countlable.textContent = count
}
