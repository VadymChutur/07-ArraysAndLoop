const btnRef = document.querySelector('.push');
btnRef.addEventListener('click', show);

// function show() {
//   const radioEl = document.querySelectorAll('.radio');
//   console.log(radioEl);
// //   radioEl[0].hidden = true;
//   console.log(radioEl.value);
// }
function show() {
  const radioEl = document.querySelectorAll('.radio');
  console.log(radioEl);
  const pEl = document.querySelectorAll('p');
  console.log(pEl);

  for (let i = 0; i < radioEl.length; i += 1) {
    const element = i;
    console.log(radioEl[element].checked);
    if (radioEl[element].checked) {
      console.log(radioEl[element].value);
    }
  }

  for (let i = 0; i < pEl.length; i += 1) {
    const randomColor = Math.round(
      Math.random().toString().padStart(6, '0') * 1000000
    );
    console.log(randomColor);
    pEl[i].style.color = `#${randomColor}`;
    btnRef.style.backgroundColor = `#${randomColor}`;
  }
}
