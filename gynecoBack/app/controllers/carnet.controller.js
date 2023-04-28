const Carnet = require("../models/carnet_santé");

// ajout de carnet qui contient "photo" 
exports.saveCarnet = (req, res) => {
    const carnet= new Carnet({
    photo : req.file.path,
    nom: req.body.nom,
    prenom: req.body.prenom,
    adresse:req.body.adresse,
    naissance:req.body.naissance,
    nationalite:req.body.nationalite,
    Cin: req.body.Cin,
    niv_inst:req.body.niv_inst,
    occupation:req.body.occupation,
    tel:req.body.tel,
    couv:req.body.couv,
    num_c:req.body.num_c,
    sang:req.body.sang,
    rhesus:req.body.rhesus,
    type_allergie:req.body.type_allergie,
    declaree_allergie:req.body.declaree_allergie,
    traitement:req.body.traitement, 
    med_tret:req.body.med_tret,
    age_pub:req.body.age_pub,
    prob:req.body.prob,
    maladie:req.body.maladie,
    maladieF:req.body.maladieF,
    type_handicap:req.body.type_handicap,
     declaree_handicap:req.body.declaree_handicap,
     date_vaccin1:req.body.date_vaccin1,
     lieu_vaccin1:req.body.lieu_vaccin1,
     date_vaccin2:req.body.date_vaccin2,
     lieu_vaccin2:req.body.lieu_vaccin2,
     date_vaccin3:req.body.date_vaccin3,
     lieu_vaccin3:req.body.lieu_vaccin3,
     date_vaccin4:req.body.date_vaccin4,
     lieu_vaccin4:req.body.lieu_vaccin4,
     date_vaccin5:req.body.date_vaccin5,
     lieu_vaccin5:req.body.lieu_vaccin5,
     date_rubeole:req.body.date_rubeole,
     lieu_rubeole:req.body.lieu_rubeole,
     autre_vaccin:req.body.autre_vaccin,
    //medecin 
    nomM:req.body.nomM,
    prenomM:req.body.prenomM,
    telM:req.body.telM,
    });
    console.log(carnet);
  
    carnet.save((err, newCarnet) => {
      if (err) {
        return res.status(401).json({
          ok: false,
          err,
        });
      }
      res.status(201).json({
        ok: true,
        carnet: newCarnet,
      });
    });
  };

//select all
exports.listCarnet = (req, res) => {
    Carnet.find({})
        .then((lists) => {
            res.status(200).send(lists);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        });
};
//Update 
exports.updateCarnet = (req, res) => {
    Carnet.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
        .then((carnet) => {
            res.status(200).send("updated success")
        })
        .catch((error) => { console.log(error) });
};
//Delete
exports.deleteCarnet = (req, res) => {
    Carnet.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).send('les informations supprimés !'))
      .catch(error => res.status(400).json({ error }));
};
//Delete ALL 
exports.deleteAll = (req, res) => {
  Carnet.deleteMany({})
  .then(() => res.status(200).send('les informations supprimés !'))
      .catch(error => res.status(400).json({ error }));
};
  //select par ID
   exports.carnetID = (req, res) => {
    Carnet.findOne({ _id: req.params.id})
      .then(carnet=> res.status(200).json(carnet))
      .catch(error => res.status(404).json({ error }));
  };
  //get par ID (Find a single data)
  exports.getcarnetID = (req, res) => {
     Carnet.findById({ _id: req.params.id })
        .then((carnet) => {
            res.status(200).send(carnet)
        })
        .catch((error) => { console.log(error) });
}