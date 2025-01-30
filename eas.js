body = document.querySelector("#container");

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        body.appendChild(newRow);
        for (let i = 0; i < size; i++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("square");
            newRow.appendChild(newDiv);

            newDiv.addEventListener("mouseover", () => {
                newDiv.classList.add("squareHover");
            })
        }
    }
}

newGridButton = document.querySelector("#newGridButton");
newGridButton.addEventListener("click", () => {
    size = Number(prompt("Size of grid?"))
    createGrid(size);
});

createGrid(16);