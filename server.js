const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Develop/public/index.html');
  });

  app.get('/notes', (req, res) => {
    res.sendFile(__dirname + '/Develop/public/notes.html');
  });
  

app.get('/', (req, res) => {
    res.send('Welcome to the Note Taker application'); 
  });
  
app.get('/api/example', (req, res) => {
  res.json({ message: 'gguguyg' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
