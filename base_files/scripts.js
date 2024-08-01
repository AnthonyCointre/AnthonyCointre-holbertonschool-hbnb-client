/*
  This is a SAMPLE FILE to get you started.
  Please, follow the project instructions to complete the tasks.
*/

document.addEventListener('DOMContentLoaded', function () {
  // Load header
  fetch('header.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('header').innerHTML = data;
    });

  // Load footer
  fetch('footer.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('footer').innerHTML = data;
    });

  // Load add a review
  fetch('add_review.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('add-review').innerHTML = data;
    });
});

// Login
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const errorMessage = document.getElementById('error-message');

  if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      try {
        const response = await loginUser(email, password);
        if (response.ok) {
          const data = await response.json();
          document.cookie = `token=${data.access_token}; path=/`;
          window.location.href = 'index.html';
        } else {
          const errorData = await response.json();
          displayError(`Login failed: ${errorData.message}`);
        }
      } catch (error) {
        displayError('An error occurred. Please try again.');
      }
    });
  }

  function displayError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
  }

  async function loginUser(email, password) {
    return await fetch('https://your-api-url/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
  }
});
