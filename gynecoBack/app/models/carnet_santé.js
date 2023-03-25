const mongoose = require("mongoose");

const Carnet = mongoose.model(
  "Carnet",
  new mongoose.Schema({
    //femme
    _id:String,
    photo: String,
    nom: String,
    prenom:String,
   adresse:String,
   naissance:Date,
   nationalite:String,
   Cin: Number,
   niv_inst:String,
   occupation:String,
   tel:Number,
   couv:String,
   num_c:Number,
   sang:String,
   rhesus:String,
   type_allergie:String,
   declaree_allergie:Date,
   traitement:String, 
   med_tret:String,
   age_pub:Number,
   prob:String,
   maladie:String,
   maladieF:String,
   type_handicap:String,
    declaree_handicap:String,
    //vaccin
    date_vaccin1:Date,
    lieu_vaccin1:String,
    date_vaccin2:Date,
    lieu_vaccin2:String,
    date_vaccin3:Date,
    lieu_vaccin3:String,
    date_vaccin4:Date,
    lieu_vaccin4:String,
    date_vaccin5:Date,
    lieu_vaccin5:String,
    date_rubeole:Date,
    lieu_rubeole:String,
    autre_vaccin:String,
   //medecin 
   nomM:String,
   prenomM:String,
   telM:Number,
  
  })
);

module.exports = Carnet;