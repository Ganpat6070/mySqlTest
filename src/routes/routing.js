const express = require("express");
const { createUser } = require("../controller/controller");
const routes = express.Router();

routes.post("/createUser", createUser);
// routes.get("/getAllUsers", getAllUsers);
// routes.get("/getUserById/:id", getUserById);
// routes.get("/updateUser/:id", updateUser);
// routes.get("/deleteUser/:id", deleteUser);

module.exports = routes;
