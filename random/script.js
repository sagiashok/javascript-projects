const img = document.getElementById("img")
const clickme = document.getElementById("clickme")
var lis = ["images/ASHOK.jpg","images/RAVI.png","images/foodcourt.png","images/color.png","images/clay.png"]
var next=document.getElementById("next_item");
var previous=document.getElementById("previous_item");
var nextitem;
var previouss;
var randomnumber;
var sequence;
var  randomnumber = Math.floor(Math.random()*lis.length)
addEventListener('DOMContentLoaded',_=>{
    img.src = lis[randomnumber]
   })

clickme.addEventListener('click',()=>{
    randomnumber = Math.floor(Math.random()*lis.length)
    img.src =lis[randomnumber]
    console.log(randomnumber )
    console.log(clickme.disabled=false)
   })
next.addEventListener('click',()=>{
   sequence=next.disabled = false
   if(sequence==false){
        nextitem = randomnumber
        nextitem++
        if(nextitem <= lis.length && nextitem == randomnumber+1){
            img.src =lis[nextitem]
            randomnumber++
            console.log("if nextitem"+randomnumber)
        }
        if (randomnumber == lis.length){
            randomnumber=0
            nextitem = randomnumber
            img.src = lis[nextitem]
        }
    }
})
        
previous.addEventListener('click',()=>{
    previouss = randomnumber -1
    img.src = lis[previouss]
    randomnumber = previouss
    if(randomnumber < 0){
        randomnumber = 0
        img.src = lis[randomnumber]
    }
})
 
 

