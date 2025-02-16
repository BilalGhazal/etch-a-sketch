const gridSizeBttn = document.querySelector("#grid-size-button");
const clearBttn = document.querySelector("#clear-button");
const container = document.querySelector("#container");

gridSizeBttn.addEventListener("click", () => {
    container.innerHTML = ""

    let value = getInput();
        
    for (i = 1; i <= value; i++) {
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.flex = "1";

        for (j = 1; j <= value; j++) {
            const column = document.createElement("div");
            column.classList.add("column");
            column.style.flex = "1";
            column.style.backgroundColor = "grey";
            column.addEventListener("mouseenter", () => {
                let color = generateRandomColor();
                column.style.backgroundColor = color;
            })
            
            row.appendChild(column);

        }
        container.appendChild(row);
    
    

}
})


clearBttn.addEventListener("click", () => {
    const columnList = document.querySelectorAll(".column");

    columnList.forEach(function(item) {
        item.style.backgroundColor = "grey";
    })

})


function generateRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}


function getInput() {
    while (true) {
        let input = prompt("What is length of each side of the grid?");

        if (isNaN(input) || input === "" || input === null) {
            alert("Please enter a number")
            continue;
        }

        input = Number(input);

        if (input < 1 || input > 100) {
            alert("Please enter a number from 1 to 100")
            continue;
        }

        else if (!Number.isInteger(input)) {
            alert("Please enter a whole number")
            continue;
        }

        return input;

    }   
}



