const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

var increment = 1;

router.get('/', function( req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
    console.log(__dirname + `  Page has loaded ${increment} times.`);
    increment++
});

app.use('/', router);

let server = app.listen(3000, function() {
    console.log("Server is running on port 3000.");
    console.log('Ctrl-C to quit.');
}
)

