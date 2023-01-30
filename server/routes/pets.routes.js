const PetsControllers = require("../controllers/pets.controllers");

module.exports = (app) => {
    app.get("/api", PetsControllers.testApi);

    //the route to get all pets
    app.get("/api/pets", PetsControllers.getAllPets);

    //the route to add a pet
    app.post("/api/pets", PetsControllers.addPet);

    //get one
    app.get("/api/pet/:id", PetsControllers.getOnePet);

    //update one
    app.put("/api/pet/:id", PetsControllers.updatePet);

    //delete one
    app.delete("/api/pet/:id", PetsControllers.removePet);
}