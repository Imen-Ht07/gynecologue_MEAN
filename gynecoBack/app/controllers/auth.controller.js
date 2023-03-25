const User = require('../models/user.model');
const Patiente = require('../models/patiente.model');
const Secretaire = require('../models/secretaire.model');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const {secret} = require('../middleware/auth.config');

exports.signup = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({ 
      userName: req.body.userName,
      password: hashedPassword
    });
    await newUser.save();
    res.status(200).json("User successfully added");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });

    if (!user) {
      if (Secretaire) {
        bcrypt.compare(
          req.body.password,
          Secretaire.password,
          function (err, isMatch) {
            if (isMatch && !err) {
              var token = jwt.sign(
                { _id: Secretaire._id, role: Secretaire.role },
                secret
              );

              res.json({
                success: true,
                token: token,
                role: "secretaire",
                user: user,
              });
            } else {
              res.send({
                success: false,
                msg: "Authentication failed. Wrong password.",
              });
            }
          }
        );
      } else {
        if (!Patiente) {
          res.send({
            success: false,
            msg: "Authentication failed. User not found.",
          });
        } else {
          bcrypt.compare(
            req.body.password,
            Patiente.password,
            function (err, isMatch) {
              if (isMatch && !err) {
                var token = jwt.sign(
                  { _id: Patiente._id, role: Patiente.role },
                  secret
                );

                res.json({
                  success: true,
                  token: token,
                  role: "patiente",
                  user: user,
                });
              } else {
                res.send({
                  success: false,
                  msg: "Authentication failed. Wrong password.",
                });
              }
            }
          );
        }
      }
    } else {
      bcrypt.compare(req.body.password, user.password, function (err, isMatch) {
        if (isMatch && !err) {
          var token = jwt.sign({ _id: user._id, role: user.role }, secret);

          res.json({
            success: true,
            token: token,
            role: "docteur",
            user: user,
          });
        } else {
          res.send({
            success: false,
            msg: "Authentication failed. Wrong password.",
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.send({
      success: false,
      msg: "Something went wrong. Please try again later.",
    });
  }
};
