document.addEventListener('DOMContentLoaded', function () {
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');
    const inputText = document.getElementById('input-text');
    const shiftInput = document.getElementById('shift');
    const resultElement = document.getElementById('result');

    function caesarCipher(str, shift, encrypt = true) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        shift = encrypt ? shift : -shift;
        return str
            .split('')
            .map(char => {
                const isUpperCase = char === char.toUpperCase();
                char = char.toLowerCase();
                if (alphabet.indexOf(char) === -1) return char;
                let index = (alphabet.indexOf(char) + shift) % alphabet.length;
                if (index < 0) index += alphabet.length;
                return isUpperCase ? alphabet[index].toUpperCase() : alphabet[index];
            })
            .join('');
    }

    encryptBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent form submission
        const text = inputText.value;
        const shift = parseInt(shiftInput.value, 10);
        resultElement.value = caesarCipher(text, shift);
    });

    decryptBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent form submission
        const text = inputText.value;
        const shift = parseInt(shiftInput.value, 10);
        resultElement.value = caesarCipher(text, shift, false);
    });
});
