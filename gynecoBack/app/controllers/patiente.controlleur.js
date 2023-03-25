const Patiente = require('../models/patiente.model');
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

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
exports.get = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  Patiente.findOne({ _id: req.params.id })
    .then((patiente) => {
      if (!patiente) {
        return res.status(404).json({ message: "Patiente not found" });
      }
      res.status(200).send(patiente);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    });
};

//fonction count
      exports.getNbrpatiente = (req,res) => {
    Patiente.count({}).exec(function(err, st) {
        if (st == 0 && err) {
          res.json("Pas de patientes", err);
        } else {
          res.json(st); 
        }
      });
    }
   
    //refuser demande d'inscription patiente
    exports.refuser = (req, res) => {
      Patiente.findById({ _id: req.params.id })
        .then((patiente) => {
          if (!patiente) {
            return res.status(404).send("Patiente not found");
          }
    
          if (patiente.isVerified) {
            return res.status(400).send("Patiente is already verified");
          }
    
          return patiente.remove();
        })
        .then(() => {
          res.status(204).send();
        })
        .catch((error) => {
          console.log(error);
          res.status(500).send("An error occurred");
        });
    };
    //accepter demande d'inscription patiente
    exports.accept = (req, res) => {
      Patiente.findById({ _id: req.params.id })
        .then((patiente) => {
          if (!patiente) {
            return res.status(404).send("Patiente not found");
          }
    
          if (patiente.isVerified) {
            return res.status(400).send("Patiente is already verified");
          }
    
          patiente.isVerified = true;
          return patiente.save();
        })
        .then(() => {
          res.status(200).send("Patiente verified successfully");
        })
        .catch((error) => {
          console.log(error);
          res.status(500).send("An error occurred");
        });
    };
    