let link = document.getElementById("side-nav")
let ham = document.getElementById('ham')

ham.addEventListener('click', function(){
  if (link.style.opacity === "block") {
    link.style.display = "none";
  } else {
    link.style.display = "block";
  }
})

// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

