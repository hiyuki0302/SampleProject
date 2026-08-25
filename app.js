const express = require('express');
const app = express();
const port = 3000;

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/submit', (req, res) => {
  // Handle form submission logic here
  res.send('Form submitted successfully!!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
