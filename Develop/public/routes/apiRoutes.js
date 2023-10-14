const express = require('express');
const router = express.Router();
const fs = require('fs');


const readNotesFromFile = () => {
  try {
    const notesData = fs.readFileSync('db/db.json', 'utf8');
    return JSON.parse(notesData);
  } catch (error) {
    console.error('Error reading notes data:', error);
    return [];
  }
};

const writeNotesToFile = (notes) => {
  try {
    fs.writeFileSync('db/db.json', JSON.stringify(notes, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing notes data:', error);
  }
};

router.get('/api/notes', (req, res) => {
  const notes = readNotesFromFile();
  res.json(notes);
});

router.post('/api/notes', (req, res) => {
  const newNote = req.body;

  const notes = readNotesFromFile();

  newNote.id =  notes.length.toString();

  notes.push(newNote);

  writeNotesToFile(notes);

  res.json(newNote);
});

router.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;

  const notes = readNotesFromFile();

  const updatedNotes = notes.filter((note) => note.id !== noteId);

  if (updatedNotes.length !== notes.length) {
    
    writeNotesToFile(updatedNotes);
    res.json({ message: 'Note deleted' });
  } else {
    res.status(404).json({ error: 'Note not found' });
  }
});

module.exports = router;
