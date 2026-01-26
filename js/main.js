
document.addEventListener('DOMContentLoaded', function () {
    console.log("HyperActive Scripts Loaded");

    // Accordion Logic
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', function () {
            // Toggle active class on the question (for icon rotation)
            this.classList.toggle('active');

            // Find the answer element (next sibling)
            const answer = this.nextElementSibling;

            // Toggle open class on the answer (for visibility)
            if (answer.classList.contains('open')) {
                answer.classList.remove('open');
            } else {
                answer.classList.add('open');
            }
        });
    });
    // Popup Logic
    const popupOverlay = document.getElementById('popup-overlay');
    const closePopupBtn = document.getElementById('close-popup');
    const popupForm = popupOverlay.querySelector('form');

    // Show popup immediately on load
    if (popupOverlay) {
        popupOverlay.style.display = 'flex';
    }

    // Close popup on X click
    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', function () {
            popupOverlay.style.display = 'none';
        });
    }

    // Close popup on background click (optional)
    if (popupOverlay) {
        popupOverlay.addEventListener('click', function (e) {
            if (e.target === popupOverlay) {
                popupOverlay.style.display = 'none';
            }
        });
    }

    // Prevent form submission refresh for demo purposes
    if (popupForm) {
        popupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('תודה שנרשמת!');
            popupOverlay.style.display = 'none';
        });
    }
});