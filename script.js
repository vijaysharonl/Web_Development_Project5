const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginError = document.getElementById('login-error');
const registerError = document.getElementById('register-error');
const profileLink = document.getElementById('profile-link');
const profileSection = document.getElementById('profile');
const usernameDisplay = document.getElementById('username-display');
const logoutBtn = document.getElementById('logout-btn');

// Simulate form submission for demo purposes (replace with actual form handling)
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Simulate successful login (replace with server-side validation and session management)
  alert('Login successful!');
  loginForm.style.display = 'none';
  profileLink.style.display = 'block';
  profileSection.style.display = 'block';
  usernameDisplay.textContent = 'John Doe'; // Replace with actual username
});

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Simulate successful registration (replace with server-side validation and user creation)
  alert('Registration successful! Please login to continue.');
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
});

logoutBtn.addEventListener('click', () => {
  // Simulate logout (replace with server-side session termination)
  alert('Logged out!');
  profileLink.style.display = 'none';
  profileSection.style.display = 'none';
  loginForm.style.display = 'block'; // Redirect to login page if necessary
});

// Add functionality for menu items and cart (client-side simulation, server-side implementation needed)
const menuItems = document.querySelectorAll('.menu-item button');
menuItems.forEach(button => {
  button.addEventListener('click', () => {
    const itemName = button.dataset.item;
    alert(`Added ${itemName} to cart!`); // Simulate adding to cart
  });
});
