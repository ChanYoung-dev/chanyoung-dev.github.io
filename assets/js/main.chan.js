const toggleBtn = document.querySelector('.toggle-div-chan');
const menu = document.querySelector('.visible-links-chan');
const btn = document.querySelector('.toggle-btn-chan');
const navcon = document.querySelector('.navicon2');
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    btn.classList.toggle('close');
    navcon.classList.toggle('hidden');
});