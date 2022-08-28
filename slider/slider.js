
var box = document.getElementById("container")
var images = document.getElementsByClassName("image")
var nex_button = document.getElementById("next_but")
var lis = ["images/ASHOK.jpg","images/mounika.jpg","images/ravi house.png","images/clay.png","images/color1.png","images/menui.png"]
var lis_length = Math.floor(lis.length)
var size_list =[]
var num = 0
var numbe = 0;
var img;
var image;
let size;
var counter = 0;
/*setInterval(() => {
    
    var img = document.createElement('img');
    img.setAttribute('src',lis[num],);
    img.classList.add("mystyle");

    img.setAttribute('alt', 'nature');
    img.style.width ="300px"
    img.style.display ="flex"
      

    box.appendChild(img);
    num++ 
},2000000  );*/

for (;num < lis_length;){
    img = document.createElement('img');
    box.appendChild(img);
    img.id = "img"+num
    img.classList = "image"
    images[num].src = lis[num]
    console.log('width',images[num].width)
    size = images[num].clientWidth
    size_list.push(size)
    console.log(size)
    num++ 
    
} 
console.log(size_list)
nex_button.addEventListener("click",()=>{

    box.style.transition = "transform 0.4s ease-in-out";
    counter--
    box.style.transform = 'translateX(' + (size_list[numbe] * counter) + 'px)';
    console.log(size_list[numbe] * counter)
    
    console.log(size_list[numbe])
})


    


