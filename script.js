let cells = document.getElementsByClassName('cell')
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', click_cell)
  }

function click_cell(event) {
    event.target.style.backgroundColor = 'yellow';
    event.target.textContent = '+';
    event.target.style.fontSize = '72px';
  }
  