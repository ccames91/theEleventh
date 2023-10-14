app.get('/api/notes', (req, res) => {
    res.json(notes);
    });
    app.post('/api/notes', (req, res) => {
        const newNote = req.body; 
        notes.push(newNote);
      });
      app.delete('/api/notes/:id', (req, res) => {
        const noteId = req.params.id; 
        notes = notes.filter(note => note.id != noteId);
      });
      