document.getElementById("myHeading").innerHTML = "Watch Gachiakuta";
//overwrites html -> orginially 'my demo site'
document.querySelector('nav ul li a').setAttribute('href', 'currentPage');
/*refactored version attempt
- add all the colours to a class
class Color {
    constructor(name){ <-always add a contructor method
        this.name = name;
    }
}


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