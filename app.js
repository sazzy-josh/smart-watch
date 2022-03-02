let black = document.getElementById('black')
let red = document.getElementById('red')
let blue = document.getElementById('blue')
let orange = document.getElementById('orange')
let img = document.getElementById('img')
let BtnTime =document.getElementById('Btntime')
let Btnheart =document.getElementById('Btnheart')
let buy = document.getElementById('buy')
let toggle = document.getElementById('Toggle')

toggle.addEventListener('click',function(){
   if(toggle.click){
      alert("😂😂Sorry Boss‼This Feature is not yet available")
   }
})

buy.addEventListener('click',function(){
   if(buy.click){
      alert("Sorry!!🛒Item is out of Stock!!")
   }
})
let icon = document.getElementById('icon')
let inputTime = document.getElementById('input-time')



black.addEventListener('click',function(){
   img.src="./img/black.png"
   img.alt = "black_img"
})

red.addEventListener('click',function(){
    img.src='./img/grey.png'
    img.alt = "red_img"
 
 })

 blue.addEventListener('click',function(){
    img.src='./img/blue.png'
    img.alt = "blue_img"
    
 })

 orange.addEventListener('click',function(){
    img.src='./img/red.png';
    img.alt = "orange_img";

 })

 setInterval(()=>{
   let date = new Date()
    let hour = date.getHours() <10? "0"+date.getHours():date.getHours();
    let minutes =date.getMinutes()<10? "0"+date.getMinutes():date.getMinutes();
    let seconds = date.getSeconds()<10? "0"+date.getSeconds():date.getSeconds();

    inputTime.innerText = `${hour}:${minutes}:${seconds}`
 },500)


 setInterval(()=>{
   icon.style.transform = "scale(1.7)"; 
    
},1500)
 
setInterval(()=>{
   icon.style.transform = "scale(1)";   
  
},0)



Btnheart.addEventListener('click',function(){
   if(Btnheart.click){
      
      icon.style.display = "block"
      inputTime.style.display= "none"
   }
   
})
BtnTime.addEventListener('click',function(){
   if(BtnTime.click){
      
      icon.style.display = "none"
      inputTime.style.display= "block"
   }
   
})