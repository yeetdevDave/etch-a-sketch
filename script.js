let container = document.querySelector(".container");

for(let i = 0; i < 16; i++) {
  let line = document.createElement("div");
  line.setAttribute("class", "line");

  for(let j = 0; j < 16; j++) {
    let square = document.createElement("div");
    square.setAttribute("class", "square");

    line.appendChild(square);
  }

  container.appendChild(line);
}

