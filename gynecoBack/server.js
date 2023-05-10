const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser")
const app = express();

//importation 
const carnet = require("./app/routes/carnet.routes")
const auth = require("./app/routes/auth.routes")
const patiente = require("./app/routes/patiente.routes")
const secretaire = require("./app/routes/secretaire.routes")
const ord = require("./app/routes/ord.routes")


//pour (Backend et Frontend Relation)
var corsOptions = {
  origin: ["http://localhost:4200"],
  credentials: true
}

app.use(cors(corsOptions)); 
//configurer CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


// parse requests of content-type - application/json
app.use(bodyParser.json())
// parse requests of content-type - application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: true }))
//cookieParser
app.use(cookieParser())
// routes
app.use('/carnet', carnet);
app.use('/auth', auth);
app.use('/patiente', patiente);
app.use('/secretaire', secretaire);
app.use('/uploads', express.static('uploads'));
app.use('/dicom_files', express.static('dicom_files'));
app.use('/ord', ord);

//accées au data base 
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ImenHT:Bac.2020@cluster0.qjhwp.mongodb.net/gynecologue")
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });



// set port, listen for requests
app.listen(8080, () => {
  console.log('Server listening on port 8080');
});


