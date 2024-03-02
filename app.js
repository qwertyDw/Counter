var countEl=document.querySelector('.count');
var count=0;
var non;
function Dec(){
    count--;
    countEl.innerText=count;
}
function Inc(){
    count++;
    countEl.innerText=count;
}
function Reset(){
    count=0;
    countEl.innerText=count;
}
function auto(){
    Inc();
    non=setTimeout(auto, 700)
}
function stop(){
    clearTimeout(non)
}