const Carnet = require("../models/carnet_santé");


// Ajout d'un carnet de santé
exports.saveCarnet = (req, res) => {
  // On vérifie que le fichier a bien été envoyé dans la requête
  if (!req.file) {
    return res.status(400).json({
      ok: false,
      message: "Veuillez sélectionner un fichier DICOM.",
    });
  }

  // Création d'un nouvel objet carnet à partir des données de la requête
  const carnet = new Carnet({
    dicom: req.file.path, // Chemin du fichier DICOM dans le système de fichiers
    ...req.body
  });

  // Sauvegarde du carnet dans la base de données
  carnet.save((err, newCarnet) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        ok: false,
        message: "Une erreur est survenue lors de la sauvegarde.",
      });
    }

    // Envoi de la réponse avec les données du carnet créé
    res.status(201).json({
      ok: true,
      message: "Le carnet a été créé avec succès.",
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
      res.status(500).json({ message: "Une erreur est survenue lors de la récupération de la liste des fichiers DICOM." });
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