const express = require("express");
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8000;

// Sets up express object
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./Develop/public'));

// Imports Routes
require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);

// Starts server
app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
})