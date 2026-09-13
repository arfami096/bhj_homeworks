const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

let dead = 0;
let lost = 0;

const getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);

  hole.onclick = function() {
    if (hole.classList.contains('hole_has-mole')) {
      dead++;
      deadCounter.textContent = dead;
    } else {
      lost++;
      lostCounter.textContent = lost;
    }

    if (dead === 10) {
      alert('Победа!');
      dead = 0;
      lost = 0;
      deadCounter.textContent = dead;
      lostCounter.textContent = lost;
    }

    if (lost === 5) {
      alert('Поражение!');
      dead = 0;
      lost = 0;
      deadCounter.textContent = dead;
      lostCounter.textContent = lost;
    }
  };
}