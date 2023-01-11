timeFormat=0;
function setTime(){
    let time=new Date();
    let hrs=time.getHours();
    let ampm;
    if(timeFormat==1){
        if(hrs<12) 
            ampm="AM";
        else ampm="PM";
        hrs=hrs%12;
        if(hrs==0) hrs=12;
        document.querySelector(".row").children[5].children[0].textContent=ampm;
        
    }
    if(hrs<10) hrs="0"+hrs;

    let min=time.getMinutes();
    if(min<10) min="0"+min;

    let sec=time.getSeconds();
    if(sec<10) sec="0"+sec; 

    document.querySelector("#hrs").textContent=hrs;
    document.querySelector("#min").textContent=min;
    document.querySelector("#sec").textContent=sec;
    setTimeout(setTime,10);
}

setTime(0);


let list=document.querySelector(".timeformat");


list.addEventListener("change",function(){
    if(list.value=="12"){
        document.querySelector(".row").children[5].children[0].style.visibility="visible";
        timeFormat=1;
    }else{
        document.querySelector(".row").children[5].children[0].style.visibility="hidden";
        timeFormat=0;
    }
});


