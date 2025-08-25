document.addEventListener('DOMContentLoaded', function() {
    const pledgeBtn = document.getElementById('pledgeBtn');
    const newPledgeBtn = document.getElementById('newPledgeBtn');
    const usernameInput = document.getElementById('username');
    const inputSection = document.getElementById('inputSection');
    const pledgeSection = document.getElementById('pledgeSection');
    const pledgeText = document.getElementById('pledgeText');

    // Pledge button functionality
    pledgeBtn.addEventListener('click', function() {
        const username = usernameInput.value.trim();
        if (username) {
            const pledgeContent = `
                <p>I <span style="color: #FFD700;">${username}</span> pledge to walk the path of explorers.</p>
                <p>It is my duty to embrace the prophecy, to test the trials,</p>
                <p>to break illusions, and help forge what will endure.</p>
                <p>To speak of Lumiterra with courage, not fear,</p>
                <p>to echo hope, not noise.</p>
                <p>As a seeker, I carry the light of gLumi,</p>
                <p>not chasing shadows, not spreading doubt.</p>
                <p>I pledge to journey together — across realms, across time.</p>
                <p>I pledge to stand as Lumiterra.</p>
                <p>We. Are. Lumiterra.</p>
                <p>gLumi.</p>
            `;
            
            pledgeText.innerHTML = pledgeContent;
            inputSection.style.display = 'none';
            pledgeSection.style.display = 'block';

            // Add smooth transition
            setTimeout(() => {
                pledgeSection.style.opacity = '1';
                pledgeSection.style.transform = 'translateY(0)';
            }, 10);
        } else {
            // Add error state animation
            usernameInput.style.borderColor = '#ff4757';
            usernameInput.style.animation = 'shake 0.3s ease-in-out';
            
            setTimeout(() => {
                usernameInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                usernameInput.style.animation = '';
            }, 300);
        }
    });

    // New pledge button functionality
    newPledgeBtn.addEventListener('click', function() {
        pledgeSection.style.opacity = '0';
        pledgeSection.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            pledgeSection.style.display = 'none';
            inputSection.style.display = 'block';
            usernameInput.value = '';
            usernameInput.focus();
            
            // Reset input section animation
            setTimeout(() => {
                inputSection.style.opacity = '1';
                inputSection.style.transform = 'translateY(0)';
            }, 10);
        }, 300);
    });

    // Add keypress event for Enter key
    usernameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            pledgeBtn.click();
        }
    });

    // Add focus styles
    usernameInput.addEventListener('focus', function() {
        this.style.borderColor = 'rgba(255, 215, 0, 0.5)';
    });

    usernameInput.addEventListener('blur', function() {
        this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    });
});

// Add shake animation for error state
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);
