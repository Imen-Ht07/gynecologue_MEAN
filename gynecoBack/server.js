const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
//importation 
const carnet = require("./app/routes/carnet.routes")
const auth = require("./app/routes/auth.routes")
const patiente = require("./app/routes/patiente.routes")
const secretaire = require("./app/routes/secretaire.routes")

//aide les ports de back et front a s'adapter 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

//pour les images BFR(Backend et Frontend Relation)
const corsOptions = {
  origin: 'http://localhost:4200', // Replace with your Angular app's domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions)); 


// parse requests of content-type - application/json
app.use(bodyParser.json())
// parse requests of content-type - application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.use('/carnet', carnet);
app.use('/auth', auth);
app.use('/patiente', patiente);
app.use('/secretaire', secretaire);
app.use('/uploads', express.static('uploads'));



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


