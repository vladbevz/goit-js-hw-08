import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  formInput: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('input[name="email"]'),
  submitForm: document.querySelector('.feedback-form'),
  message: document.querySelector('textarea'),
};

refs.submitForm.addEventListener('submit', handleSubmit);
populateTextarea();

refs.formInput.addEventListener('input', throttle(saveInputValue, 500));

function handleSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  if (refs.emailInput.value == '' || refs.message.value == '') {
    alert(`Не всі рядки заповнені`);
  } else {
    event.currentTarget.reset();
  }
  const feedback = {
    email: refs.emailInput.value,
    message: refs.message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
}

function saveInputValue(event) {
  const feedback = {
    email: refs.emailInput.value,
    message: refs.message.value,
  };

  feedback[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
}

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage === null) {
    return;
  }

  refs.message.value = savedMessage.message || '';
  refs.emailInput.value = savedMessage.email || '';
}
