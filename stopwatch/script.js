const hours =document.getElementById("hours");
const mins =document.getElementById("mins");
const sec =document.getElementById("sec");
const start =document.getElementById("start");
const stop =document.getElementById("stop");
const reset =document.getElementById("reset");
const results =document.getElementById("results");
const main = document.getElementById("main")
var result = 57
var min = 0
var hour = 0
var interval;


main.style.background="linear-gradient(white,yellow)"
start.addEventListener('click',()=>{
   start.disabled = true
   main.style.background="linear-gradient(#ffffff,#797d82)"
   interval=setInterval(timer,1000)
})


stop.addEventListener('click',()=>{
  
   start.disabled = false
   
   clearInterval(interval)
   results.innerHTML="you reached to "+hour+" hour "+min+" mintues "+result+" seconds"
    
   
})

reset.addEventListener('click',()=>{
   main.style.background="linear-gradient(white,yellow)"
   start.disabled = false
   clearInterval(interval)
   result="00"
   min="00"
   hour="00"

   sec.innerHTML=result
   mins.innerHTML=min
   hours.innerHTML=hour
   results.innerHTML=""


   
})

let timer =()=>{
   result++
   if (result <=9 ){
      sec.innerHTML="0"+result
   }
   if (result > 9 ){
     sec.innerHTML=result
   }
   if (result>60){
      min++
      result=0
      sec.innerHTML="0"+0
      mins.innerHTML="0"+min
      if(min>60){
         hour++
         min=0
         mins.innerHTML="0"+0
         hours.innerHTML="0"+hour
      }
      if(hour>9){
         hours.innerHTML=hour 
      }
     

   }

}









