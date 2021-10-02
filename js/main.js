let place = document.querySelector("section");
let scuare;
let piece;

for (i = 0; i < 8; i++) {
  for (j = 0; j < 8; j++) {
    scuare = document.createElement('div');
    if ((i + j) % 2 !== 0) {
      scuare.style.backgroundColor = "gray";
    } else {
      scuare.style.backgroundColor = "white";
    }
    if (i === 1) {
        piece = document.createElement('img');
        piece.setAttribute("src", 'svg-lite/пешка.svg');
        scuare.appendChild(piece);
      }
    if (i === 6) {
        piece = document.createElement('img');
        piece.setAttribute("src", 'svg/пешка.svg');
        scuare.appendChild(piece);
      }
    if (j === 0 || j === 7) {
      if (i === 0){
        piece = document.createElement('img');
        piece.setAttribute("src", 'svg-lite/Ладья.svg');
        scuare.appendChild(piece);
      } else if (i === 7) {
        piece = document.createElement('img');
        piece.setAttribute("src", 'svg/Ладья.svg');
        scuare.appendChild(piece);
      }
    }
    if (j === 1 || j === 6) {
      if (i === 0){
        piece = document.createElement('img');
        piece.setAttribute("src", 'svg-lite/Конь.svg');
        scuare.appendChild(piece);
      } else if (i === 7) {
        piece = document.createElement('img');
        piece.setAttribute("src", 'svg/Конь.svg');
        scuare.appendChild(piece);
      }
    }
    if (j === 2 || j === 5) {
      if (i === 0){
        piece = document.createElement('img');
        piece.setAttribute("src", 'svg-lite/Слон.svg');
        scuare.appendChild(piece);
      } else if (i === 7) {
        piece = document.createElement('img');
        piece.setAttribute("src", 'svg/Слон.svg');
        scuare.appendChild(piece);
      }
    }
    if (j === 3) {
      if (i === 0){
        piece = document.createElement('img');
        piece.setAttribute("src", 'svg-lite/Королева.svg');
        scuare.appendChild(piece);
      } else if (i === 7) {
        piece = document.createElement('img');
        piece.setAttribute("src", 'svg/Король.svg');
        scuare.appendChild(piece);
      }
    }
    if (j === 4) {
      if (i === 0){
        piece = document.createElement('img');
        piece.setAttribute("src", 'svg-lite/Король.svg');
        scuare.appendChild(piece);
      } else if (i === 7) {
        piece = document.createElement('img');
        piece.setAttribute("src", 'svg/Королева.svg');
        scuare.appendChild(piece);
      }
    }
    scuare.classList.add('square');
    place.appendChild(scuare)
  }
}
