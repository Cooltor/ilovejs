/**
Objective : learn to manipulate the DOM

create a red square of 250px 
id must be "sqr"

Bonus
on click the square becomes green
with a black border of 5px  
 */

// Your code here 
 

const body = document.body;

const nodeDiv = document.createElement("div");
    body.prepend(nodeDiv);
    
    nodeDiv.setAttribute("id", "sqr");
    let Idiv = document.getElementById("sqr");
    Idiv.style.width = "250px";
    Idiv.style.height = "250px";
    Idiv.style.backgroundColor = "red";

    
    console.log(Idiv);

   

    Idiv.addEventListener("click",  () => { 
        Idiv.style.backgroundColor = "green"; 
        Idiv.style.border = "5px solid black";
    });













































// Validate your code 
import {validation} from './validation.js'
document.getElementById('validateexoahmed').addEventListener('click', validation)