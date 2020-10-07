const path = require('path');
const notes = require('../db/db.json');

module.exports = function(app) {  
    // GET to show all JSON notes
    app.get('/api/notes', function(req, res) {
        res.json(notes);
    });
    
    // POST to add a JSON object note
    app.post('/api/notes', function(req, res) {
        const note = {
            id: notes.length,
            title: req.body.title,
            text: req.body.text
        }
        notes.push(note);
        res.json(notes);
    });
    
    // GET for a particular note JSON object -- used for testing
    app.get('/api/notes/:id', function(req, res) {
        let id = req.params.id;
        for (let i = 0; i < notes.length; i++){
            if (id == notes[i].id){
                console.log(notes[i])
                res.json(notes[i]);
            }
        };
    });

    // DELETE for a particular note JSON object
    app.delete('/api/notes/:id', function(req, res) {
        let id = req.params.id;
        for (let i = 0; i < notes.length; i++){
            if (id == notes[i].id){
                console.log(notes[i])
                notes.splice(i, 1);
                res.json(notes);
            }
        };
    });
  };