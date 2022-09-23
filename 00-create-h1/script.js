/**
Objective : learn to manipulate the DOM

create an h1 tag in js, 
add some text, 
preferably a motivating quote. 
the h1 text must be green . 
 */

// Your code here 
 


const body = document.body;

const h1 = document.createElement('h1');
body.append(h1);

h1.innerHTML = "I'm the best";
h1.style.color = "green";









































// Validate your code 
import {validation} from './validation.js'
document.getElementById('validateexoahmed').addEventListener('click', validation)