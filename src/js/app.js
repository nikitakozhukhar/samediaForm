const form = document.querySelector('#auth-form');

form.addEventListener('submit', async e => {
  e.preventDefault();

  const email = document.querySelector('.form__input--email').value;
  const password = document.querySelector('.form__input-password').value;
  const message = document.querySelector('.message');

  const loader = document.querySelector('.form__loader');
  loader.style.display = 'block';
  disabledForm(true);

  try {
    const response = await fetch(`https://test-works.pr-uni.ru/api/login/index.php?login=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
      method: 'GET',
    })

    const result = await response.json();

    if (result.status === 'ok') {
      document.cookie = `token=${result.token}; path=/;`;
      message.innerText = `${result.user.name}, Вы успешно авторизованы`;
      message.classList.add('success');
      form.style.display = 'none';
    }
    if (result.status === 'error') {
      showMessage(result.errorMessage)
    }
  } catch (err) {
    showMessage(err)
  } finally {
    loader.style.display = 'none';
    disabledForm(false);
  }
})

function disabledForm(disable) {
  const formElements = document.querySelectorAll('#auth-form input, #auth-form button');
  formElements.forEach(elem => {
    elem.disabled = disable;
  })
};

function showMessage(msg) {
  const message = document.querySelector('.message');
  message.innerText = msg;
  message.classList.remove('.success');

  const email = document.querySelector('.form__input--email');
  const password = document.querySelector('.form__input-password');

  email.classList.add('error');
  password.classList.add('error');
}