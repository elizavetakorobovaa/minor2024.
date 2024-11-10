function solveTask() {
  let A = document.querySelector(".firstSquare").value
  let B = document.querySelector(".secondSquare").value
  let C = document.querySelector(".thirdSquare").value
  let M = document.querySelector(".firstSide").value
  let K = document.querySelector(".secondSide").value
  let squareDoor = M*K 
  if (A<squareDoor || B<squareDoor || C<squareDoor) {
    alert ("пройдет")
  }
  else {
    alert ("не пройдет")
  }
}

/* 1001. Имеется коробка со сторонами: A × B × C. Определить, пройдёт ли она в дверь с размерами M × K */
