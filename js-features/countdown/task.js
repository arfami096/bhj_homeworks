const cur_timer = document.getElementById('timer')
let num = Number(cur_timer.textContent)

const intervalId = setInterval(function() {
  num--
  cur_timer.textContent = num

if (num === 0) {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!');
  }
}, 1000);