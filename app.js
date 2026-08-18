const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const commentInput = document.getElementById('commentInput');
const commentsList = document.getElementById('comments');

// Clock functionality
function updateClock() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');
    
    hours.textContent = `☀️${h}`;
    minutes.textContent = `⏰${m}`;
    seconds.textContent = `⚙️${s}`;
}

// Comment functionality
function addComment() {
    const commentText = commentInput.value.trim();
    if (commentText) {
        const comment = document.createElement('div');
        comment.className = 'comment';
        comment.textContent = commentText;
        commentsList.appendChild(comment);
        commentsList.scrollTop = commentsList.scrollHeight;
        commentInput.value = '';
    }
}

// Add comment on Enter key
commentInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addComment();
    }
});

// Update clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);