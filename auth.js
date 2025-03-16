const BASR_URL = 'http://localhost:8000/api/accounts';

async function signup(event){
  event.preventDefault();

  document.getElementById('loading-spinner').style.display = 'block';

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  try {
    const response = await fetch(`${BASR_URL}/signup/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
  
    if (response.ok) {
      alert('Signup successful!');
      window.location.href = 'dashboard.html';
    } else {
      const result = await response.json();
      alert(`Signup failed: ${result.error || "Unknown error"}`)
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occured during signup.');
  } finally {
    document.getElementById('loading-spinner').style.display = 'none';
  }
}

document.getElementById('signup-form').addEventListener('submit', signup);