/**
 * Generates a random password based on the specified criteria.
 * @param {number} length - The length of the password.
 * @param {boolean} lowercase - Whether to include lowercase letters in the password.
 * @param {boolean} uppercase - Whether to include uppercase letters in the password.
 * @param {boolean} numbers - Whether to include numbers in the password.
 * @param {boolean} symbols - Whether to include symbols in the password.
 * @param {string} exclude - Characters to exclude from the password.
 * @returns {string} The generated password.
 */
// password.js

function generatePassword(length, lowercase, uppercase, numbers, symbols, exclude) {
    var charset = '';
    if (lowercase) {
        charset += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (uppercase) {
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (numbers) {
        charset += '0123456789';
    }
    if (symbols) {
        charset += '!@#$%^&*()_+-={}[]|:;"<>,.?/~`';
    }
    if (exclude) {
        charset = charset.replace(new RegExp('[' + exclude + ']', 'g'), '');
    }
    var password = '';
    for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}

document.getElementById('generate').addEventListener('click', function() {
    var length = parseInt(document.getElementById('length').value);
    var lowercase = document.getElementById('lowercase').checked;
    var uppercase = document.getElementById('uppercase').checked;
    var numbers = document.getElementById('numbers').checked;
    var symbols = document.getElementById('symbols').checked;
    var exclude = document.getElementById('exclude').value;
    var password = generatePassword(length, lowercase, uppercase, numbers, symbols, exclude);
    document.getElementById('password').value = password;
});