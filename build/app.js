

// function getPost() {
//    // const post = 
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//       .then(function (response) {
//         console.log(response)
//         return response.data
//       })
//      .then((data)=>{
//         for(let i=0; i < data.length; i++){
//             var num = Math.floor(Math.random() * 10)
//             displayTitle(data[num].title)
//             displayBody(data[num].body)
//         }
//      })
//      function displayTitle(info){
//         const t =document.getElementById('results')
//         t.innerHTML += `<li> ${info} </li>  <button><a href="/post.html" target>Body</a></button>`

// const { default: axios } = require("axios");

      
//      }
     
// }
const getPost =async ()=>{
  let res =await axios.get("https://jsonplaceholder.typicode.com/posts")
//   console.log(res.data);
let data =res.data
  localStorage.setItem('data', JSON.stringify(data))
 let result= JSON.parse(localStorage.getItem('data'))
 console.log(result)
 for (let i=0; i< data.length; i++){
   let num =Math.floor(Math.random() * 10)
   display(result[num].title)
   // display(result[num].body)
  
 }
function display (info){
   const t =document.getElementById('results')
   t.innerHTML += `<li> ${info} </li>`
}
}
getPost();



