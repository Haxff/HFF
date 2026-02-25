document.addEventListener('DOMContentLoaded', () => {

    // ================= NAVIGATION LOGIC =================

    const navButtons = document.querySelectorAll('.nav-btn');
    const allSections = document.querySelectorAll('.content-section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Remove 'active' class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // 2. Add 'active' class to the clicked button
            button.classList.add('active');

            // 3. Get the target section id (e.g., "projects") from the button data attribute
            const targetId = button.getAttribute('data-target');

            // 4. Hide all sections
            allSections.forEach(section => {
                section.classList.add('hidden-section');
                section.classList.remove('active-section');
            });

            // 5. Show the targeted section
            const targetSection = document.getElementById(targetId);
            targetSection.classList.remove('hidden-section');
            targetSection.classList.add('active-section');
        });
    });


    // ================= READ MORE LOGIC =================

    // We use event delegation here. We listen for clicks on the whole document,
    // but only react if the clicked element has the class 'read-more-btn'.
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('read-more-btn')) {
            
            const button = e.target;
            // Find the parent card of the button that was clicked
            const projectCard = button.closest('.project-card');
            // Find the extra text paragraph inside that specific card
            const extraText = projectCard.querySelector('.extra-text');

            // Toggle the visibility
            if (extraText.classList.contains('hidden')) {
                extraText.classList.remove('hidden');
                button.textContent = "Read less";
            } else {
                extraText.classList.add('hidden');
                button.textContent = "Read more";
            }
        }
    });

});