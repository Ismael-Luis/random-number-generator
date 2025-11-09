const numberMin = document.querySelector('#input-min');
const numberMax = document.querySelector('#input-max');
const msg = document.querySelector('.msg')

document.addEventListener('click', function(e){
  e.preventDefault();
  const el = e.target;
  const min = Number(numberMin.value);
  const max = Number(numberMax.value);
  if (el.classList.contains('reset')) {
    numberMin.value = ''
    numberMax.value = ''
    msg.innerHTML = ''
  }
  if(el.classList.contains('submit')) {
    const result = random(min, max)
    msg.innerHTML = result
  }
})

function random(min, max) {
  const rand = Math.random() * (max - min) + min
  return Math.floor(rand)
}