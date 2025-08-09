
    function generatePassword() {
      const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
      let password = "";
      for (let i = 0;i<Math.floor(Math.random()*5)+5; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
      }
      document.getElementById("password").textContent = password;
    }

    function savePassword() {
      const password = document.getElementById("password").textContent;
      if (password && password !== "Click generate") {
        navigator.clipboard.writeText(password);
        alert("Password saved to clipboard!");
      } 
      else {
        alert("Generate a password first!");
      }
    }

