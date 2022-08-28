var slideshow = document.getElementById("slide-show")
var images = document.getElementById("image")
slideshow.innerHTML="mnjkhngjfhnuj"
var number;


var lis =["images/ASHOK.JPG","images/color.png","images/ravihouse.png","images/screen1.png","images/screen2.jpg","images/vegbiryani.jpg"]
var lis_length = Math.floor(lis.length)
console.log(lis_length)
images.src =lis[0]
let slide_show = ()=>{
    number = 0
    var img = document.createElement('img'[number]);
    img.src =lis[0]


}
slide_show()


