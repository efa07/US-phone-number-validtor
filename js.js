document.addEventListener('DOMContentLoaded', () => {
    const check = document.getElementById('check-btn');
    const clear = document.getElementById('clear-btn');
    const input = document.getElementById('user-input');
    const result = document.getElementById('results-div');
  
    //regex used to fillter the numbers
   const phoneRegex = /^(?:\+?1[-.\s]?)?(\(\d{3}\)[-.\s]?\d{3}[-.\s]?\d{4}|\d{3}[-.\s]?\d{3}[-.\s]?\d{4})$/;

    check.addEventListener('click', () => {
      const inputVal = input.value.trim();
      if (inputVal === '') {
        alert("Please provide a phone number.");
      } else if (phoneRegex.test(inputVal)) {
        result.style.color = 'green';
        result.style.border = '1px solid green';
        result.innerHTML = `Valid US number: ${inputVal}`;
        result.setAttribute('aria-live', 'polite');
      } else {
        result.style.color = 'red';
        result.style.border = '1px solid red';
        result.innerHTML = `Invalid US number: ${inputVal}`;
        result.setAttribute('aria-live', 'polite');
      }
    });
  
    clear.addEventListener('click', () => {
      result.innerHTML = '';
      input.value = '';
      result.style.border = 'none';
      result.removeAttribute('aria-live');
    });
  });
