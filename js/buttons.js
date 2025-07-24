const filterButtons = document.querySelectorAll('.filters .tag-button');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => 
{
    button.addEventListener('click', () => 
    {
        const isActive = button.classList.contains('active');

        filterButtons.forEach(btn => btn.classList.remove('active'));
        if (!isActive) 
        {
            // If this button was not active, activate it
            button.classList.add('active');
        }

        const activeButton = document.querySelector('.filters .tag-button.active');
        const filter = activeButton ? activeButton.getAttribute('data-filter').substring(1) : '*';

        projectCards.forEach(card => 
        {
            if (filter === '*') 
            {
                card.style.display = '';
            } 
            else if (card.classList.contains(filter)) 
            {
                card.style.display = '';
            } 
            else 
            {
                card.style.display = 'none';
            }
      });
    });
});