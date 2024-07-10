document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('banner');
    const closeButton = document.getElementById('close-banner');

    const today = new Date().getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
    if (today >= 1 && today <= 3) { // Monday, Tuesday, Wednesday
        banner.classList.add('show');
    }

    closeButton.addEventListener('click', function () {
        banner.classList.add('hide');
        banner.addEventListener('transitionend', function () {
            banner.style.display = 'none';
        }, { once: true });
    });
});
