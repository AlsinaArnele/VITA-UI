    
    function toggleHistory() {
        const history = document.getElementById('history');
        if (history.style.display === 'none' || history.style.display === '') {
            history.style.display = 'flex';
        } else {
            history.style.display = 'none';
        }
    }

    function responsivehistory() {
        if (window.innerWidth < 768) {
            const history = document.getElementById('history');
            if (history.style.display === 'none' || history.style.display === '') {
                history.style.display = 'flex';
            } else {
                history.style.display = 'none';
            }
        }
        const history = document.getElementById('history');
        if (history.style.display === 'none' || history.style.display === '') {
            history.style.display = 'flex';
        } else {
            history.style.display = 'none';
        }
    }
    
    function profiletoggle() {
        var profile = document.getElementById('profile');
        var chat = document.getElementById('chat');
        if(profile.style.display === 'none') {
            chat.style.display = 'none';
            profile.style.display = 'flex';
        } else {
            profile.style.display = 'none';
            chat.style.display = 'flex';
        }
    }

    function menuDisplay() {
        var menu = document.getElementById('nav');
        var burger = document.getElementById('burger');
        if(menu.style.display === 'none') {
            menu.style.display = 'flex';
            burger.style.display = 'none';
        } else {
            menu.style.display = 'none';
            burger.style.display = 'block';
        }
    }

    function imageUpload() {
        
    }