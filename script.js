document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const toggleButton = item.querySelector('.faq-toggle');
        toggleButton.addEventListener('click', () => {
            const content = item.querySelector('.faq-content');
            content.classList.toggle('active');
            toggleButton.textContent = content.classList.contains('active') ? '-' : '+';
        });
    });
});

document.getElementById('galleryscl').addEventListener('click', function () {
    document.getElementsByClassName('gallerybg').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});