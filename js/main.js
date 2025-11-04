document.getElementById("myHeading").innerHTML = "Watch Gachiakuta";
//overwrites html -> orginially 'my demo site'
document.querySelector('nav ul li a').setAttribute('href', 'currentPage');
/*refactored version attempt
(()=>
{
    const colourButtons = document.querySelector()
    const colourChange = ((ev)=>{
    const colourPicked = ev.target.classList[0]+"back"
    doucment.body.className = colourPicked==="resetBack" ? "" : colourPicked    
    })
colourButtons.forEach((btn)=>{
    btn.eventlistener("click", colourChange)
}
}
)()
*/

//normal version
document.querySelector(".red").addEventListener('click', function(ev){
    document.body.setAttribute('class', "redBack");
})
document.querySelector(".green").addEventListener('click', function(ev){
    document.body.setAttribute('class', "greenBack");
})
document.querySelector(".blue").addEventListener('click', function(ev){
    document.body.setAttribute('class', "blueBack");
})
document.querySelector(".reset").addEventListener('click', function(ev){
    document.body.removeAttribute('class');
})

//rotating image
//document.getElementById('myImages').addEventListener('click', imgRotate)
let imageAr = [
    'images/view1.jpg',
    'images/view2.jpg',
    'images/view3.jpg',
    'images/fnaf-foxy-jumpscare.gif',
    'images/view4.jpg',
    'images/view5.jpg',
    'images/view6.jpg',
    'images/view7.jpeg',
    'images/view67.jpeg',
    'images/among-us-twerk.gif'
  ];
  
  let currentIndex = 0;
  
  function chgImage() {
    currentIndex++;
    if (currentIndex >= imageAr.length) {
      currentIndex = 0;
    }
    document.getElementById('myImages').setAttribute('src', imageAr[currentIndex]);
  }
  
  setInterval(chgImage, 2000);

