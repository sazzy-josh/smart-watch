
let container = document.getElementById('container')

fetch("https://api.thenewsapi.com/v1/news/top?api_token=KZQbyoNYFMnspgMFjpYmkISHWV13HgruPPgoL7cN")
  .then(response => response.json())
  .then(result => {
    let output = ""
   result.data.map((item) => {
     
    output += 
    `<div id="news">
           
       <div id="image">
           <img src="${item.image_url}" id="news-img" alt="image_url">
       </div>
       <div id="news-content">
       <h3 id="title">${item.title}</h3>
       <p>${item.description}</p>
       <a href="${item.url}" id="link">Read More</a>
       </div>
    </div>`
      container.innerHTML = output
    
  })
})



document.getElementById("button").addEventListener("click", function(){
  document.getElementById("modal").style.display = "flex"
  

})

document.querySelector("#close").addEventListener("click",function(){
  document.getElementById("modal").style.display = "none"
})