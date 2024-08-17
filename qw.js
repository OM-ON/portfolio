document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Modal functionality
    document.querySelectorAll('[data-modal-target]').forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
        });
    });

    document.querySelectorAll('[data-close-button]').forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        });
    });

    function openModal(modal) {
        if (modal == null) return;
        modal.style.display = 'block';
    }

    function closeModal(modal) {
        if (modal == null) return;
        modal.style.display = 'none';
    }

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Form submission logic here (e.g., AJAX)
        alert('Message sent!');
        this.reset();
    });
});
