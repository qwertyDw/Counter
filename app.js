var countEl=document.querySelector('.count');
var count=0;
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