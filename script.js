const container = document.querySelector('.container');

// Create div for boxes, these will be flex items inside of the overall flex container. Have the number of boxes be a variable that links back to what the user selects from the prompt//

const buttons = document.querySelector('.buttons');

const playerInstruction = document.createElement('div');
playerInstruction.textContent = 'Enter a number from 1 to 100 to determine how big the board will be:';
buttons.appendChild(playerInstruction);

const getBoardSize = document.createElement('input');
getBoardSize.setAttribute('type', 'number');
buttons.appendChild(getBoardSize);

const submitPlayerInput = document.createElement('button');
submitPlayerInput.textContent = 'Submit';
buttons.appendChild(submitPlayerInput);

submitPlayerInput.addEventListener('click', function (e) {
    if (~~getBoardSize.value <= 0 || ~~getBoardSize.value > 100) {
        alert('Enter a number from 1-100')
    } else { 
        gridSize();
    }
})

function gridSize() {
    container.style.gridTemplateColumns = `repeat(${~~getBoardSize.value}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${~~getBoardSize.value}, 1fr)`;
    console.log((~~getBoardSize.value)*(~~getBoardSize.value))

    for (i = 1; i <= ((~~getBoardSize.value)*(~~getBoardSize.value)); i++) {
        createBox();
    }
}

function createBox () {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.cssText = 'background-color: white;';
    container.appendChild(box);

    box.addEventListener('mouseenter', function (e) {
        box.style.cssText = 'background-color: black;'
    })

}

function restartGame () {
    location.reload();
}

const left = document.querySelector('.left');

const flag = document.querySelector('.flag');

const restartButton = document.createElement('button');
restartButton.textContent = 'Restart Game';
restartButton.style.cssText = 'align-self: flex-end; width: 100px; flex: 0 0 auto;';
left.insertBefore(restartButton, flag);

restartButton.addEventListener('click', function (e) {
    restartGame();
})





    




// 7. Move the container to the right side of the page and add a border
// create a reset button that reloads the page
// create a change color chart that changes the color of the mouseover function 
// 8. Add a title to the top of the page 
// 9. Add an acknowledgmenet to the bottom of the page giving credit to creator 
