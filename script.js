const allGridcontainers = document.querySelectorAll(".grid-container");

function createGrid(squaresPerSide = 16){

    allGridcontainers.forEach( currentContainer => {
        currentContainer.innerHTML = '';

        const totalSquares = squaresPerSide * squaresPerSide;
        const squareSize = 100 / squaresPerSide; 

        for (let i = 0; i < totalSquares; i++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');

            square.style.width = `${squareSize}%`;
            // square.style.height = `${squareSize}%`;

        currentContainer.appendChild(square);
        }
    })
}


createGrid(50);
