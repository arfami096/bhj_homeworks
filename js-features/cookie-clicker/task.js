const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

cookie.onclick = function() {
  let clicks = Number(counter.textContent);
  clicks++;
  counter.textContent = clicks;

  if (cookie.width === 200) {
    cookie.width = 250;
  } else {
    cookie.width = 200;
  }
};