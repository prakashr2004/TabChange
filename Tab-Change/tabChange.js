var anchor = document.querySelectorAll("a")
var image = document.getElementById("image")
var link1 = document.getElementById("link1")
var link2 = document.getElementById("link2")
var link3 = document.getElementById("link3")

var imgArr = ["Mountain Real 1.jpeg.jpeg","RWater.jpeg","BeauMountain.jpeg"]

anchor.forEach((tag,index)=>{
    tag.addEventListener("click",()=>{
     arribute = tag.getAttribute("class")
     if(arribute == "history"){
        image.src = imgArr[index]
        link1.classList.add('bg')
        link2.classList.remove('bg')
        link3.classList.remove('bg')
     }
     else if(arribute =="vision")
     {
      image.src = imgArr[index]
      link2.classList.add("bg")
      link1.classList.remove('bg')
      link3.classList.remove('bg')
     }
     else if(arribute == "goal")
     {
      image.src = imgArr[index]
      link3.classList.add("bg")
      link2.classList.remove('bg')
      link1.classList.remove('bg')
     }
    })
    
})