const path = require('path');
const notes = require('../db/db.json');

module.exports = function(app) {  
    app.get('/api/notes', function(req, res) {
        res.json(notes);
    });
    
    app.post('/api/notes', function(req, res) {
        const note = {
            id: notes.length,
            title: req.body.title,
            text: req.body.text
        }
        notes.push(note);
        res.json(notes);
    });
    
    app.get('/api/notes/:id', function(req, res) {
        let id = req.params.id;
        for (let i = 0; i < notes.length; i++){
            if (id == notes[i].id){
                console.log(notes[i])
                res.json(notes[i]);
            }
        };
    });
    
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