const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
  const cases = rotator.querySelectorAll('.rotator__case');
  let activeIndex = 0;

  function rotate() {
    cases[activeIndex].classList.remove('rotator__case_active');
    cases[activeIndex].style.color = '';

    activeIndex = (activeIndex + 1) % cases.length;

    const currentCase = cases[activeIndex];

    currentCase.classList.add('rotator__case_active');

    const color = currentCase.dataset.color;
    if (color) {
      currentCase.style.color = color;
    }

    const speed = parseInt(currentCase.dataset.speed, 10) || 1000;

    setTimeout(rotate, speed);
  }

  const initialCase = cases[activeIndex];
  const initialColor = initialCase.dataset.color;
  if (initialColor) {
    initialCase.style.color = initialColor;
  }
  const initialSpeed = parseInt(initialCase.dataset.speed, 10) || 1000;

  setTimeout(rotate, initialSpeed);
});