
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
});