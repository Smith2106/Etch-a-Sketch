const grid = document.getElementById('grid');
const button = document.getElementById('changeSizeBtn');
const gridColor = [];

button.addEventListener('click', e => {
  let dim;
  do {
    dim = window.prompt('Enter a new grid dimension (e.g. 16 for 16x16).')
  } while(isNaN(dim))
  
  createGrid(dim);
});

createGrid(16);

function createGrid(dim) {
  grid.innerHTML = "";
  for (let i = 0; i < dim; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    gridColor.push([]);
  
    for (let j = 0; j < dim; j++) {
      gridColor[i][j] = 0;
      const item = document.createElement('div');
      item.className = 'item';
      item.addEventListener('mouseenter', e => {
        const x = Array.from(e.target.parentNode.children).indexOf(e.target);
        const y = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
        console.log(x)
        console.log(y)
        if (gridColor[x][y] < 1) gridColor[x][y] += 0.1;

        e.target.style.backgroundColor = `rgba(0,0,0,${gridColor[x][y]})`;
      })
      row.appendChild(item);
    }
  
    grid.appendChild(row);
  }
}
