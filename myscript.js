let mouseTrigger = false;
document.addEventListener("mousedown",()=> mouseTrigger=true);
document.addEventListener("mouseup",()=> mouseTrigger=false)

const container = document.querySelector(".container");

function createGrid(number){
    for (let i=0; i<number; i++){
        const row = document.createElement("div");
        row.classList.add("row")
        
        for (let i=0; i<number; i++){
            const square = document.createElement("div")
            square.classList.add("square")
            row.appendChild(square)
        
        }
        container.appendChild(row)
    }
}

createGrid(16)

const squares = document.querySelectorAll(".square")
squares.forEach((square)=> 
    square.addEventListener("mouseover",()=>{
        if (mouseTrigger === true){
        square.classList.add("squarehover")
        }
    }))

const button = document.querySelector("button")
button.addEventListener("click",()=>{
    let number = prompt("Enter a number from 1 to 100")
    if (number>100){
        alert("Number is too high!");
        return;
    }else if (number < 1){
        alert("Number is too low!");
        return;
    }else{
        container.replaceChildren();
        createGrid(number)
        const squares = document.querySelectorAll(".square")
        squares.forEach((square)=> 
        square.addEventListener("mouseover",()=>{
            if (mouseTrigger === true){
                square.classList.add("squarehover")
            }
        }))
    }
})