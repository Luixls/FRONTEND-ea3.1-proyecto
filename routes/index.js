const express = require("express");
const router = express.Router();
const formularioController = require("../controllers/formularioController");
const verComentariosController = require("../controllers/verComentariosController");

// Rutas
router.get("/", (req, res) => res.render("index"));
router.get("/about", (req, res) => res.render("about"));
router.get("/contacto", (req, res) => res.render("contacto"));
router.post("/contacto", formularioController.guardarFormulario);
router.get("/comentarios", verComentariosController.verComentarios);

module.exports = router;
