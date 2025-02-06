fetch("https://my-node-api-yack.onrender.com/") // Replace with your API URL
        .then(response => response.json())
        .then(data => {
          document.getElementById("api-response").textContent = data.message;
        })
        .catch(error => console.error("Error:", error));