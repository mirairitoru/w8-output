window.addEventListener('DOMContentLoaded', () => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if(savedEmail && savedPassword) {
        document.getElementById('email-data').value = savedEmail;
        document.getElementById('password-data').value = savedPassword;
    }
});

document.getElementById('submit-button').addEventListener('submit', () => {
    const email = document.getElementById('email-data').value;
    const password = document.getElementById('password-data').value;

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
});