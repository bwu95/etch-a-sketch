const container = document.querySelector('.container'); 
let rowCount = 10; 
let columnCount = 10; 
let drawing = false;        //flag 

let gridSize = document.getElementById('grid-size'); 
let clearScreen = document.getElementById('clear-screen'); 
let userClick = document.querySelector('.container'); 

function grid(rowCount, columnCount) {
    container.innerHTML = '';                               //reset the grid 

    for(let i = 0; i < columnCount; i++) {
        let row = document.createElement('div'); 
        row.classList.add('row-grid'); 
        for(let j = 0; j < rowCount; j++) {
            let gridSquare = document.createElement('div'); 
            gridSquare.classList.add('grid-square'); 
            row.appendChild(gridSquare); 
        }
        container.appendChild(row); 
    }

    //will color square grid if clicked on 
    container.addEventListener('mousedown', (event) => {
        if (event.target.classList.contains('grid-square')) {
            drawing = true;
            event.target.style.backgroundColor = 'black '; // Change the color when clicked
        }
    });
    //will color square grid will clicked down and dragged on 
    container.addEventListener('mousemove', (event) => {
        if(drawing && event.target.classList.contains('grid-square')) {
            event.target.style.backgroundColor = 'black'; 
        }
    })

    container.addEventListener('mouseup', () => {
        drawing = false; 
    })
}   

gridSize.addEventListener('click', () => {
    let userInput = prompt("Enter new grid size: ");
    while(isNaN(userInput)) {
        userInput = prompt('Must be a number. Enter new grid size: '); 
    }    
    while(userInput > 100 || userInput <= 1) {
        userInput = prompt('Grid size must be between 2 and 100. Enter new grid size: '); 
    }

    rowCount = userInput; 
    columnCount = userInput; 

    grid(rowCount, columnCount); 
})

clearScreen.addEventListener('click', () => {
    grid(rowCount, columnCount); 
})

grid(rowCount, columnCount);


