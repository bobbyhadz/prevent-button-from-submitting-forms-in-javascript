console.log('bobbyhadz.com');

const btn = document.getElementById('btn');

const firstNameInput = document.getElementById('first');
const lastNameInput = document.getElementById('last');

btn.addEventListener('click', event => {
  event.preventDefault();

  console.log(firstNameInput.value);
  console.log(lastNameInput.value);
});
