const bar = document.querySelector('.bar');
    const nav = document.querySelector('.mobile-nav');

    bar.addEventListener('click', () => {
    nav.classList.toggle('open');
});