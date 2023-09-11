const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');

// Iterate over all inputs
inputs.forEach((input, index1) => {
    input.addEventListener('keyup', (e) => {
        // This code gets the current input element and stores it in the currentInput variable
        // This code gets the next sibling element of the current input element and stores it in the nextInput variable
        // This code gets the previous sibling element of the current input element and stores it in the prevInput variable
        const currentInput = input;
        const nextInput = input.nextElementSibling;
        const prevInput = input.previousElementSibling;

        // If the value has more than one character
        if (currentInput.value.length > 1) {
            currentInput.value = "";
            return;
        }

        // If the next input is disabled and the current value is not empty
        // Enable the next input and focus on it
        if (nextInput && nextInput.hasAttribute('disabled') && currentInput.value !== '') {
            nextInput.removeAttribute('disabled');
            nextInput.focus();
        }

        // If the Backspace key is pressed
        if (e.key === "Backspace") {
            // Iterate over all inputs again
            inputs.forEach((input, index2) => {
                // If the index of the current input is less than or equal to the index2 of the input in the outer loop
                // and the previous element exists, set the disabled attribute on the input and focus on the previous element
                if (index1 <= index2 && prevInput) {
                    input.setAttribute('disabled', 'disabled');
                    currentInput.value = '';
                    prevInput.focus();
                }
            });
        }

        // If the fourth input isn't empty and has not disabled attribute
        // Add active class, if not, then remove the active class
        if (!inputs[3].hasAttribute('disabled') && inputs[3].value !== '') {
            button.classList.add("active");
            return;
        }
        button.classList.remove('active');
    });
});
