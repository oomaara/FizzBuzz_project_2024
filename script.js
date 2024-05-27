document.addEventListener('DOMContentLoaded', function() {
    function generateDivs(start, end, fizz, buzz) {
        const main = document.querySelector('main');
        main.innerHTML = ''; // Clear existing divs

        for (let i = start; i <= end; i++) {
            const div = document.createElement('div');
            div.id = `myid${i}`;

            if (i % fizz === 0 && i % buzz === 0) {
                div.className = 'fizzbuzz';
                div.innerText = 'FizzBuzz';
            } else if (i % fizz === 0) {
                div.className = 'fizz';
                div.innerText = 'Fizz';
            } else if (i % buzz === 0) {
                div.className = 'buzz';
                div.innerText = 'Buzz';
            } else {
                div.className = 'normal';
                div.innerText = i;
            }

            main.appendChild(div);
        }
    }

    // Default generation
    generateDivs(1, 100, 3, 5);

    document.getElementById('generate').addEventListener('click', function() {
        const start = parseInt(document.getElementById('start').value);
        const end = parseInt(document.getElementById('end').value);
        const fizz = parseInt(document.getElementById('fizz').value);
        const buzz = parseInt(document.getElementById('buzz').value);

        generateDivs(start, end, fizz, buzz);
    });

    document.getElementById('clear').addEventListener('click', function() {
        const main = document.querySelector('main');
        main.innerHTML = ''; // Clear divs
    });
});
