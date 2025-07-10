function storeData() {
        // e.preventDefault();
        const email = document.getElementById("Username").value;
        localStorage.setItem("email", email);

        const password = document.getElementById("password").value;
        localStorage.setItem("password", password)
        alert("Login Successful");
      }
      document.getElementById("form")
      .addEventListener("submit", storeData);