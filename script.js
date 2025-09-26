// Simple smooth scrolling for navigation links
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
    
    // Custom Cursor
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX - 3 + 'px';
        cursor.style.top = e.clientY - 3 + 'px';
    });
    
    // Generate Team Cards
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
    
    // Generate Game Cards
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
    
    // Generate all cards
    generateTeamCards();
    generateGameCards();
    
    // Discord link functionality - redirect to homepage
    const discordLink = document.getElementById('discord-link');
    if (discordLink) {
        discordLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            const homeSection = document.getElementById('home');
            if (homeSection) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = homeSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});