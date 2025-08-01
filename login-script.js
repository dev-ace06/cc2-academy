document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
      const errorMsg = document.getElementById('errorMsg');
      
      // Clear previous errors
      errorMsg.textContent = '';
      
      // Validate inputs
      if (!username || !password) {
        errorMsg.textContent = 'Please enter both username and password.';
        return;
      }
      
      // Show loading state
      const submitButton = loginForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Logging in...';
      submitButton.disabled = true;
      
      // Simulate authentication (replace with actual authentication)
      setTimeout(() => {
        if (username === 'CC2Academy' && password === 'CC2@Academy99') {
          // Successful login - redirect to dashboard
          window.location.href = 'index.html';
        } else {
          // Failed login
          errorMsg.textContent = 'Invalid username or password.';
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        }
      }, 800);
    });
  }
});