const BASE_URL = 'http://localhost:8000/api/accounts';

async function checkAuth() {
    const token = localStorage.getItem('authToken');

    if (!token) {
        window.location.href = 'login.html';
        return;
    }

    try {
        const response = await fetch(`${BASE_URL}/verify-token/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            localStorage.removeItem('authToken');
            window.location.href = 'login.html';
        }
    } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('authToken');
        window.location.href = 'login.html';
    }
}

checkAuth();

document.getElementById('logout').addEventListener('click', logout);
function logout() {
    localStorage.removeItem('authToken');
    window.location.href = 'login.html';
}