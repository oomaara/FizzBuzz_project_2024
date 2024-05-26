document.addEventListener('DOMContentLoaded', function () {
    const mainContainer = document.getElementById('main-container');
    const generateButton = document.getElementById('generateButton');
    const clearButton = document.getElementById('clearButton');

    generateButton.addEventListener('click', generateDivs);
    clearButton.addEventListener('click', clearDivs);

    function generateDivs() {
        clearDivs();

        const startValue = parseInt(document.getElementById('startValue').value);
        const endValue = parseInt(document.getElementById('endValue').value);
        const fizzValue = parseInt(document.getElementById('fizzValue').value);
        const buzzValue = parseInt(document.getElementById('buzzValue').value);

        for (let i = startValue; i <= endValue; i++) {
            const div = document.createElement('div');
            div.id = `myid${i}`;

            if (i % fizzValue === 0 && i % buzzValue === 0) {
                div.classList.add('fizzbuzz');
                div.innerText = `FizzBuzz ${i}`;
            } else if (i % fizzValue === 0) {
                div.classList.add('fizz');
                div.innerText = `Fizz ${i}`;
            } else if (i % buzzValue === 0) {
                div.classList.add('buzz');
                div.innerText = `Buzz ${i}`;
            } else {
                div.classList.add('normal');
                div.innerText = i;
            }

            mainContainer.appendChild(div);
        }
    }

    function clearDivs() {
        while (mainContainer.firstChild) {
            mainContainer.removeChild(mainContainer.firstChild);
        }
    }
});
