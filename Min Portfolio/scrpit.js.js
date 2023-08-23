const darkModeButton = document.getElementById('darkModeButton');
const content = document.querySelector('.content');

darkModeButton.addEventListener('click', () => {
    content.classList.toggle('dark-mode');
});
