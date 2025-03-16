const BASR_URL = 'http://localhost:8000/api/accounts';


async function login(event){
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch(`${BASR_URL}/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (response.ok) {
      alert('Login successful!');
      window.location.href = 'dashboard.html';
    } else {
      const result = await response.json();
      alert(`Login failed: ${result.error || "Invalid credentials"}`)
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occured during login.');
  }
}

document.getElementById('login-form').addEventListener('submit', login);