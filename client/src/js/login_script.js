function storeData() {
        const email = document.getElementById("Username").value;
        localStorage.setItem("email", email);

        const password = document.getElementById("password").value;
        localStorage.setItem("password", password)
        alert("Login Successful");
      }
      document.getElementById("form")
      .addEventListener("submit", storeData);



function togglePasswordVisibility(password, eyeIconId) {
  const passwordInput = document.getElementById(password);
  const eyeIcon = document.getElementById(eyeIconId);

  eyeIcon.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';

    eyeIcon.classList.toggle('fa-eye');
    eyeIcon.classList.toggle('fa-eye-slash');
  });
}

togglePasswordVisibility('password', 'eye-icon');
