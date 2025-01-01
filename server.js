'use strict';

const express     = require('express');
const bodyParser  = require('body-parser');
const expect      = require('chai').expect;
const cors        = require('cors');
// Perubahan: Menambahkan helmet
const helmet      = require('helmet');
require('dotenv').config();

const apiRoutes         = require('./routes/api.js');
const fccTestingRoutes  = require('./routes/fcctesting.js');
const runner            = require('./test-runner');

let app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.use(cors({origin: '*'})); //For FCC testing purposes only

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Perubahan: Menambahkan helmet.noSniff() dan helmet.xssFilter()
app.use(helmet.noSniff())
app.use(helmet.xssFilter())

//Index page (static HTML)
app.route('/') // Tetap mempertahankan komentar asli
  .get(function (req, res) { // Tetap mempertahankan komentar asli
    res.sendFile(process.cwd() + '/views/index.html');
  });

//For FCC testing purposes
fccTestingRoutes(app); // Tetap mempertahankan komentar asli

//Routing for API 
apiRoutes(app);  // Tetap mempertahankan komentar asli
    
//404 Not Found Middleware
app.use(function(req, res, next) { // Tetap mempertahankan komentar asli
  res.status(404)
    .type('text')
    .send('Not Found');
});

const port = process.env.PORT || 3000;

//Start our server and tests!
app.listen(port, function () { // Tetap mempertahankan komentar asli
  console.log("Listening on port " + port);
  if(process.env.NODE_ENV==='test') { // Tetap mempertahankan komentar asli
    console.log('Running Tests...');
    setTimeout(function () { // Tetap mempertahankan komentar asli
      try {
        runner.run();
      } catch(e) {
          console.log('Tests are not valid:');
          console.error(e);
      }
    }, 1500);
  }
});

module.exports = app; //for testing