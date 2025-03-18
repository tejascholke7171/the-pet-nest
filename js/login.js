const login = document.getElementById("login");

login.addEventListener("submit", (e) => {
    e.preventDefault();


    fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value
        })
      })
        .then(response => response.json())
        .then(data => {
            alert(data.msg);
            if (data.status) {
                window.location.href = "file:///C:/Users/dell/OneDrive/Desktop/the-pet-nest/about-pages/about1.html";
            }
        })
        .catch(error => {
            alert(data.msg)
        });
      
    
})