const contact = document.getElementById("contact-form");

contact.addEventListener("submit", (e) => {
    e.preventDefault();



    fetch('http://localhost:8080/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          contnumber: e.target.contnumber.value,
          msg: e.target.msg.value,
        })
      })
        .then(response => response.json())
        .then(data => {
            alert(data.msg);
            if (data.status) {
               alert(data.msg);
            }else{
                alert(data.msg);
            }
        })
        .catch(error => {
            alert(data.msg)
        });
      
    
})