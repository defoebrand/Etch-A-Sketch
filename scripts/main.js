const root = document.documentElement;

const container = document.querySelector("#container");
container.classList.add("container");

const gridBox = document.querySelector("#gridBox");
gridBox.classList.add("grid");
container.appendChild(gridBox);

const reset = document.querySelector("#reset");
reset.addEventListener("click", function(e){location.reload()});

const clean = document.querySelector("#clean");
gridBox.appendChild(clean);

let rows;
let columns; 
let num;

function makeGrid(){
rows = prompt("How many rows?");
columns = prompt("How many columns?");

if(rows < 250 && columns < 250){num = rows * columns;}
else{alert("That's too many boxes!"); makeGrid();}

}

makeGrid();

root.style.setProperty("--gridRows", rows);
root.style.setProperty("--gridColumns", columns);

for(let i = 0; i <= num; i++) {
    let div = document.createElement("div");
    div.classList.add("gridSquares");
	div.addEventListener("mouseover", () => {
	div.classList.add("hover");
	});
	div.addEventListener("dragover", () => {
	div.classList.remove("hover");
	});
    gridBox.appendChild(div);
}

/*



*/






