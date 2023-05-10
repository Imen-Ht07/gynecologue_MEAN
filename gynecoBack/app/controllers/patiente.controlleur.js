const Patiente = require('../models/patiente.model');
const bcrypt = require("bcryptjs");
const twilio = require('twilio');
const accountSid = 'AC18d59b9ac1675efe84d5e5f993cb9281';
    const authToken = '868c091927d42293dfe11b0057d9fe9a';

//MSG TEL 
exports.rendezVous = async (req, res)=> {
  const { nomP, prenomP,naissance} = req.body;
  if (!nomP || !prenomP || !naissance) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const patiente = await Patiente.findOne({
   nomP: nomP,
   prenomP: prenomP,
   naissance: naissance,
  });
  if (!patiente) {
  return res
  .status(409)
  .json({ message: 'Patiente name does not exist' });
  }
const num = '+216' + patiente.tel;
const twilioClient = twilio(accountSid, authToken);
const messageBody = req.body.messageBody;
const messageParams = {
  body: messageBody,
  from: '+12706122727',
  to: num,
};

twilioClient.messages.create(messageParams)
  .then(message => console.log(`SMS message sent with message ID ${message.sid}`))
  .catch(error => console.error(`Failed to send SMS message: ${error.message}`));
}
//save
exports.savepatiente = async (req, res, next) => {
    //hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newPatiente = new Patiente({
        userName: req.body.userName,
        nomP: req.body.nomP,   
        prenomP: req.body.prenomP,
        tel: req.body.tel,
        email:req.body.email,
        naissance:req.body.naissance,
        password: hashedPassword,
    });
    console.log(newPatiente);
      await newPatiente.save();
      res.status(200).json("Patiente succeffuly added");
      }
      
//get all
// Get all patients
exports.findAll = async (req, res) => {
  try {
    const patients = await Patiente.find({});
    res.json(patients);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
//update
    exports.update = async (req,res) => {
      try{
      const updatedPatiente = await Patiente.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
      );
      res.status(200).send(updatedPatiente);
    } catch (error) {
      console.log(error);
      res.status(500).send('Server error');
    }};

    //delete
exports.delete = (req, res) => {
  Patiente.findOneAndDelete({ _id: req.params.id })
    .then(() => {
      res.status(204).json({ message: "Patiente successfully deleted" });
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json({ message: "Patiente with given ID not found" });
    });
};

//get by Id
exports.getID = (req, res) => {
  Patiente.findById({ _id: req.params.id })
  .then((Patiente) => {
      res.status(200).send(Patiente)
  })
  .catch((error) => { console.log(error) });
};

//fonction count
      exports.getNbrpatiente = (req,res) => {
    Patiente.count({}).exec(function(err, st) {
        if (st == 0 && err) {
          res.json("Pas de patientes", err);
        } else {
          res.json(st); 
        }
      });};
    // Endpoint pour la mise à jour du mot de passe
    exports.ChangePassword = async (req, res) =>{
  try {
    // Récupérer l'utilisateur par l'ID
    const user = await Patiente.findByIdAndUpdate(req.params.id);
    // Vérifier si l'ancien mot de passe correspond
    const isMatch = await bcrypt.compare(req.body.oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Le mot de passe actuel est incorrect' });
    }

    // Générer le hash du nouveau mot de passe
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.newPassword, salt);

    // Mettre à jour le mot de passe
    user.password = hashPassword;
    await user.save();

    res.json({ msg: 'Le mot de passe a été mis à jour avec succès' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
}
    