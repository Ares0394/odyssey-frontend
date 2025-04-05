async function sendRequest() {
    const userInput = document.getElementById('userInput').value;
  
    const res = await fetch('http://localhost:3000/plan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: userInput })
    });
  
    const data = await res.json();
    document.getElementById('response').textContent = data.response;
  }
  