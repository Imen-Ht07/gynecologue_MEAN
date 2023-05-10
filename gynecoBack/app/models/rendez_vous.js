const mongoose = require('mongoose')
const rendezVousSchema = new mongoose.Schema({
patienteId: { type: mongoose.Schema.Types.ObjectId, 
        required: true, ref: "patiente" },
        
messageBody : {type: String},

})

module.exports = mongoose.model("rendez_vous",rendezVousSchema);