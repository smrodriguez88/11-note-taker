var path = require("path");

module.exports = function(app) {
    // GET for / which links to index.html
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    // GET for /notes which links to notes.html
    app.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
};