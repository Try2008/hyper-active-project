
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

    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');

            // Toggle body overflow to prevent scrolling when menu is open
            if (mobileMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', function () {
                // If it's a dropdown parent, don't close, toggle submenu
                if (this.parentElement.classList.contains('mobile-dropdown-parent')) {
                    // Start toggle logic for dropdown if requested, or just navigate if it's a link
                    // For now, let's allow closing to keep it simple as per prompt "X closes it"
                    // If user wants dropdown toggle inside menu, we'd add that.
                    // Assuming links scroll to sections or pages
                    // Let's check if it has a submenu
                    const submenu = this.nextElementSibling;
                    if (submenu && submenu.classList.contains('mobile-dropdown-menu')) {
                        // It's a dropdown toggle
                        // Prevent default link behavior if it's just a toggle
                        // this.preventDefault(); // Unnecessary if href="#"
                        // Toggle submenu display?
                        // For now, let's close menu on ALL clicks unless specified.
                    }
                }

                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }
});