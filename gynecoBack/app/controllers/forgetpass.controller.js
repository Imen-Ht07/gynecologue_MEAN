const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const patiente = require('../models/patiente.model');
const passwordResetToken = require('../models/resetpass.model');

module.exports = {
    //
async ResetPassword(req, res) {
    if (!req.body.userName) {
    return res
    .status(500)
    .json({ message: 'user name is required' });
    }
    const patiente = await patiente.findOne({
    userName:req.body.userName
    });
    if (!patiente) {
    return res
    .status(409)
    .json({ message: 'Email does not exist' });
    }
    var resettoken = new passwordResetToken({ patienteId: patiente._id, resettoken: crypto.randomBytes(16).toString('hex') });
    resettoken.save(function (err) {
    if (err) { return res.status(500).send({ msg: err.message }); }
    passwordResetToken.find({ patienteId: patiente._id, resettoken: { $ne: resettoken.resettoken } }).remove().exec();
    res.status(200).json({ message: 'Reset Password successfully.' })
    })
    },

    //
    async ValidPasswordToken(req, res) {
        if (!req.body.resettoken) {
        return res
        .status(500)
        .json({ message: 'Token is required' });
        }
        const patiente = await passwordResetToken.findOne({
        resettoken: req.body.resettoken
        });
        if (!patiente) {
        return res
        .status(409)
        .json({ message: 'Invalid URL' });
        }
        patiente.findByIdAndUpdate({ _id: patiente.patienteId }).then(() => {
        res.status(200).json({ message: 'Token verified successfully.' });
        }).catch((err) => {
        return res.status(500).send({ msg: err.message });
        });
    },
    //////////////////////
        async NewPassword(req, res) {
            passwordResetToken.findOne({ resettoken: req.body.resettoken }, function (err, patienteToken, next) {
              if (!patienteToken) {
                return res
                  .status(409)
                  .json({ message: 'Token has expired' });
              }
        
              patiente.findOne({
                _id: patienteToken.patienteId
              }, function (err, patienteEmail, next) {
                if (!patienteEmail) {
                  return res
                    .status(409)
                    .json({ message: 'patiente does not exist' });
                }
                return bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
                  if (err) {
                    return res
                      .status(400)
                      .json({ message: 'Error hashing password' });
                  }
                  patienteEmail.password = hash;
                  patienteEmail.save(function (err) {
                    if (err) {
                      return res
                        .status(400)
                        .json({ message: 'Password can not reset.' });
                    } else {
                      patienteToken.remove();
                      return res
                        .status(201)
                        .json({ message: 'Password reset successfully' });
                    }
        
                  });
                });
              });
        
            })
        }
    }