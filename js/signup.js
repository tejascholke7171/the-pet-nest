const signUp = document.getElementById("signup");

signUp.addEventListener("submit", (e) => {
    e.preventDefault();


    fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: e.target.username.value,
          email: e.target.email.value,
          password: e.target.password.value
        })
      })
        .then(response => response.json())
        .then(data => {
            alert(data.msg);
            if (data.status) {
                window.location.href = "file:///C:/Users/dell/OneDrive/Desktop/the-pet-nest/about-pages/login.html";
            }
        })
        .catch(error => {
            alert(data.msg)
        });
      
    
})