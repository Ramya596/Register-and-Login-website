const loginBtn = document.querySelector('.btnLogin-popup');
const closeBtn = document.querySelector('.icon-close');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const wrapper = document.querySelector('.wrapper');

loginBtn.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

closeBtn.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
