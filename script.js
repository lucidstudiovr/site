document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'cursor';
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX - 3 + 'px';
            cursor.style.top = e.clientY - 3 + 'px';
        });
    }
    
    function generateTeamCards() {
        const teamGrid = document.getElementById('team-grid');
        
        teamMembers.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'member-card';
            
            memberCard.innerHTML = `
                <h3 class="member-name">${member.name}</h3>
                <p class="member-role">${member.role}</p>
            `;
            
            teamGrid.appendChild(memberCard);
        });
    }
    
    function generateGameCards() {
        const gamesContainer = document.getElementById('games-container');
        
        games.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            
            gameCard.innerHTML = `
                <div class="game-image">
                    <img src="${game.image}" alt="${game.alt}" class="game-img">
                    <div class="game-overlay">
                        <h3 class="game-title">${game.title}</h3>
                    </div>
                </div>
                <div class="game-info">
                    <p class="game-description">
                        ${game.description}
                    </p>
                </div>
            `;
            
            gamesContainer.appendChild(gameCard);
        });
    }
    
    generateTeamCards();
    generateGameCards();
    
    const discordLink = document.getElementById('discord-link');
    if (discordLink) {
        discordLink.setAttribute('target', '_blank');
        discordLink.setAttribute('rel', 'noopener noreferrer');
    }

    const heroArrow = document.getElementById('hero-arrow');
    const heroSection = document.getElementById('home');
    const heroContent = document.querySelector('.hero-content');

    function positionHeroArrow() {
        if (!heroArrow || !heroSection || !heroContent) return;
        const heroRect = heroSection.getBoundingClientRect();
        const heroTop = window.scrollY + heroRect.top;
        const contentRect = heroContent.getBoundingClientRect();
        const contentBottom = window.scrollY + contentRect.top + contentRect.height;
        const heroBottom = heroTop + heroSection.offsetHeight;
        const midpoint = contentBottom + (heroBottom - contentBottom) / 2;
        const navHeight = document.querySelector('.nav').offsetHeight;
        const topValue = midpoint - navHeight;
        heroArrow.style.top = topValue + 'px';
    }

    positionHeroArrow();
    window.addEventListener('resize', positionHeroArrow);
    window.addEventListener('scroll', positionHeroArrow);

    if (heroArrow) {
        heroArrow.addEventListener('click', function(e) {
            e.preventDefault();
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = aboutSection.offsetTop - navHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    }
});