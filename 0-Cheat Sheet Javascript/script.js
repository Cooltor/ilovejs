 
// string literal
let obj = {
    name: 'js', 
    '🧓' : ''
}
console.log(obj.name ) // Résultat : js 
console.log(obj['🧓']) // Résultat similaire : js  



// destructuring
let code = {
    text: 'vive le js ', 
    age: 36
}

const { text , age } = code
console.log(text) // Résultat : vive le js

const tab = [ 1,2,3]
const [a,b,c] = tab

 


// spread operator

let humain = {
    age:23, 
    code: 'js', 
      
}
 
let Ahmed = {...humain, job:'formateur' }
console.log(Ahmed) // Résultat : {age: 23, code: 'js', job: 'formateur'}


// import export function don't forget  type="module" in index.js

export function addNum (num){
    return num 
}
//import { createHTML} from 'https://cdn.jsdelivr.net/gh/DocteurSEO/easyfire@master/easyjsv0.0.9.js'
import {addNum, other } from './script.js'

// map 

console.log([1, 2, 3].map(n => n + 1)) // Résultat : [2, 3, 4]


// filter 
console.log([1, 2, 3].filter(n => n > 1)) // Résultat : [2, 3]


// sort 
console.log([3, 1, 2].sort()) // Résultat :  [1, 2, 3]


// createElement
const ELEMENT_HTML = document.createElement("div")

// add some color 
ELEMENT_HTML.style.color = "pink"

// add class 
ELEMENT_HTML.classList.add(".maClass")

// add some text 
ELEMENT_HTML.innerHTML = "<div>coucou</div>"

// select element in the document
document.querySelector("#mon-id")

// click Event 
ELEMENT_HTML.addEventListener("click", (e) => {

})


// slice
let arr = [1, 2, 3]
console.log(arr.slice(0, 1)) // Résultat : 1
 

// split 
console.log("un-deux".split("-")) // Résultat : ["un", "deux"]


// join 
let result = ["un", "deux"]
result.join("@")// Résultat : "un@deux"



// splice
let tableau = ["a", "b", "c"]
console.log(tableau.splice(0, 1)) // Résultat : 'a'
console.log(tableau ) //  ['b', 'c']

// fetch 
fetch("url")
.then(res => res.json())
.then(data => console.log(data)) 

let dataArray = []
// fetch 
fetch("https://hp-api.herokuapp.com/api/characters")
.then(res => res.json())
.then(data => {iWillSurvive(data)
    dataArray = data 
} ) 

function iWillSurvive(characters) {
 console.log(characters)

    // characters.forEach(perso => {
    //     const {name} = perso
    //     document.querySelector("ul").innerHTML += `
    //      <li>${name}</li>
    //     `
    // } ) 


    // characters.forEach(perso => console.log(perso ) ) 
}


// fetch async await 

// async function easyFetch (url, callback){

//     const res = await fetch(url)
//     const data = await res.json()
//     callback(data)
     
// }
 //easyFetch("https://hp-api.herokuapp.com/api/characters", iWillSurvive )

 