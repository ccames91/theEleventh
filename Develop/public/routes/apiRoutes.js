app.get('/api/notes', (req, res) => {
    res.json(notes);
    });
    app.post('/api/notes', (req, res) => {
        const newNote = req.body; 
        notes.push(newNote);
      });
      