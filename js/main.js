const form = document.querySelector('.form');
const emailInput = form.querySelector('.form__input-email');
const tooltip = document.querySelector('.tooltip');
const tooltipTwo = document.querySelector('.tooltip-two');
const tooltipEmpty = document.querySelector('.tooltip-empty');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const emailInputValue = event.target.email.value;
  const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if (emailInputValue.length === 0) {
    tooltipEmpty.style.display = 'block';
  } else if (!regexEmail.test(emailInputValue)) {
    tooltipEmpty.style.display = 'none';
    tooltip.style.visibility = 'visible';
    tooltip.style.marginBottom = '25px';
    emailInput.style.border = '1px solid hsl(354, 100%, 66%)';
  } else {
    tooltipEmpty.style.display = 'none';
    tooltip.style.visibility = 'hidden';
    tooltip.style.marginBottom = '0px';
    tooltipTwo.style.display = 'block';
    emailInput.style.border = '1px solid hsl(0, 0%, 59%)';
    setTimeout(function () {
      tooltipTwo.style.display = 'none';
    }, 3000);
    form.reset();
  }
});
