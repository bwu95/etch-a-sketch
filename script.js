const container = document.querySelector('.container'); 
let rowCount = 10; 
let columnCount = 10; 
let drawing = false; 

let button = document.getElementById('button'); 
let userClick = document.querySelector('.container'); 

function grid(rowCount, columnCount) {
    container.innerHTML = ''; 
    for(let i = 0; i < columnCount; i++) {
        let row = document.createElement('div'); 

        for(let j = 0; j < rowCount; j++) {
            let gridSquare = document.createElement('div'); 
            gridSquare.classList.add('grid-square'); 
            row.appendChild(gridSquare); 
        }
        container.appendChild(row); 
    }

}   

grid(rowCount, columnCount);


