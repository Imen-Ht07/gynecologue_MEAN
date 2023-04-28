const Drug = require("../models/medicament");
// ajout de medic
exports.saveDrug = (req, res) => {
    const medic= new Drug({
    drugName:req.body.drugName,
    dosage:req.body.dosage,
    description:req.body.description,
    effetSec:req.body.effetSec,
    });
    console.log(medic);
  
    medic.save((err, newDrug) => {
      if (err) {
        return res.status(401).json({
          ok: false,
          err,
        });
      }
      res.status(201).json({
        ok: true,
        medic: newDrug,
      });
    });
  };
 

//select all
exports.listDrug = (req, res) => {
  const { drugName } = req.query;
  const query = drugName? { nom: { $regex: new RegExp(drugName), $options: 'i' } } : {};
    Drug.find(query,(error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
};
//Update 
exports.updateDrug = (req, res) => {
    Drug.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
        .then((medic) => {
            res.status(200).send("updated success")
        })
        .catch((error) => { console.log(error) });
};
//Delete
exports.deleteDrug = (req, res) => {
    Drug.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).send('le nom de médicament est  supprimé !'))
      .catch(error => res.status(400).json({ error }));
};
//Delete ALL 
exports.deleteAllDrug = (req, res) => {
    Drug.deleteMany({})
  .then(() => res.status(200).send('le nom de médicament est supprimé !'))
      .catch(error => res.status(400).json({ error }));
};
  //select par ID
   exports.drugID = (req, res) => {
    Drug.findOne({ _id: req.params.id})
      .then(medic=> res.status(200).json(medic))
      .catch(error => res.status(404).json({ error }));
  };
