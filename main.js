const photoContainer = document.getElementById('photo-container');

const growButton = document.getElementById('grow-button');
growButton.addEventListener('click', () => {
  findHairs();

  hairsLeft.forEach(hair => {
    hair.style.bottom = hair.style.bottom ? parseInt(hair.style.bottom) - 44 + 'px' : '0';
    // hair.style.zIndex = hair.style.zIndex ? parseInt(hair.style.zIndex) + 1 : '1';
  });

  hairsRight.forEach(hair => {
    hair.style.bottom = hair.style.bottom ? parseInt(hair.style.bottom) - 46 + 'px' : '0';
    // hair.style.zIndex = hair.style.zIndex ? parseInt(hair.style.zIndex) + 1 : '1';
  });

  addHairs();
});

function findHairs () {
  hairsLeft = document.querySelectorAll('.hair-left');
  hairsRight = document.querySelectorAll('.hair-right');
}

function addHairs () {
  const newLeft = document.createElement('img');
  const newRight = document.createElement('img');

  newLeft.src = 'assets/hair-left2.png';
  newRight.src = 'assets/hair-right2.png';

  newLeft.classList.add('hair-left');
  newRight.classList.add('hair-right');

  photoContainer.appendChild(newLeft);
  photoContainer.appendChild(newRight);
}