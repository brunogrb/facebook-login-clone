const signIn = document.getElementById('button-login');
const emailPhoneInput = document.getElementById('user-email-phone');
const rightContent = document.querySelector('.right-content');

signIn.addEventListener('click', () => {
  alert(emailPhoneInput.value);
});


document.querySelector('#custom-gender').addEventListener('click', () => {
  const customGender = document.createElement('input');
  customGender.type = 'text';
  customGender.name = 'gender-custom';
  customGender.placeholder = 'Gênero (opcional)';
  document.querySelector('.all-genders').appendChild(customGender);
});

function completedForm() {
  const name = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const emailOrPhone = document.getElementById('phone-email').value;
  const birthdate = document.getElementById('birthdate').value;
  console.log(birthdate);
  const gender = document.querySelector('input[type="radio"]:checked').value;
  rightContent.innerHTML = '';
  const displayName = document.createElement('p');
  const displayRest = document.createElement('p');
  displayName.innerText = `Olá, ${name} ${lastName}`;
  displayRest.innerText = `${emailOrPhone}
  ${birthdate}
  ${gender}`;
  rightContent.appendChild(displayName);
  rightContent.appendChild(displayRest);
}

function checkUserInputs() {
  let teste = true;
  const inputs = document.querySelectorAll('.register-input');
  inputs.forEach((item) => {
    if (item.value === '') {
      document.querySelector('#validate-form').style.display = 'block';
      if (teste) {
        teste = false;
      }
    }
  });
  if (teste) {
    completedForm();
  }
}
document.querySelector('#facebook-register').addEventListener('click', checkUserInputs);
