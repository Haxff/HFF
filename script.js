document.addEventListener('DOMContentLoaded', () => {
    
    // 1. AUTOMATIC STATUS COLORS
    const tags = document.querySelectorAll('.status-tag');
    tags.forEach(tag => {
        const status = tag.textContent.toUpperCase().trim();
        
        if (status === 'ACTIVE') {
            tag.style.backgroundColor = '#00c853'; // Green
            tag.style.color = '#fff';
        } else if (status === 'SUSPENDED') {
            tag.style.backgroundColor = '#ffd600'; // Yellow
            tag.style.color = '#000';
        } else if (status === 'UPCOMING') {
            tag.style.backgroundColor = '#007bff'; // Blue
            tag.style.color = '#fff';
        } else if (status === 'CANCELLED' || status === 'OFFLINE') {
            tag.style.backgroundColor = '#ff1744'; // Red
            tag.style.color = '#fff';
        }
    });

    // 2. READ MORE / DETAILS LOGIC
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.project-card');
            const extra = card.querySelector('.expand-content');
            
            if (extra.classList.contains('hidden')) {
                extra.classList.remove('hidden');
                button.textContent = 'COLLAPSE';
            } else {
                extra.classList.add('hidden');
                button.textContent = 'DETAILS';
            }
        });
    });
});