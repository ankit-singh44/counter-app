let ele=document.querySelector("#h-ele");

let pbtn=document.querySelector("#incr");

let mbtn=document.querySelector("#decr");

let resetbtn=document.querySelector("#res");

let saveEl=document.querySelector("#save-El");

let count=0;


function increment(){
    count=count+1;
    ele.textContent = count;
}

function decrement(){
    if(count>0){
        count=count-1;
        ele.innerText=count;
    }
}

function reset(){
    ele.innerHTML=0;
}

function save(){
    let countstr=count + " - "  
    saveEl.textContent+=countstr;
    ele.textContent=0;
    count=0;
}





