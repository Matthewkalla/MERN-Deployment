const Pet = require("../models/pets.model");

module.exports.testApi = (req, res) => {
    res.json({message: "I'm looking good cap't"});
}

module.exports.addPet = (req, res) => {
    Pet.create(req.body)
    .then(pet => res.json(pet))
    .catch(err => res.status(400).json(err));
}

module.exports.getOnePet = (req, res) => {
    Pet.findOne({_id: req.params.id})
    .then(author => res.json(author))
    .catch(error => res.json(error));
}

module.exports.getAllPets = (req, res) => {
    Pet.find().collation({'locale': 'en'}).sort({'petType': 1})
    .then(pets => res.json(pets))
    .catch(error => res.json(error))
}

module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
    .then(message => res.json(message))
    .catch(err => res.status(400).json(err));
}

module.exports.removePet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(error => res.json(error));
}