const pool = require("../config/dbPool");

exports.guardarFormulario = (req, res) => {
  const { nombre, email, asunto, mensaje } = req.body;
  const query =
    "INSERT INTO formularios_contacto (nombre, email, asunto, mensaje) VALUES (?, ?, ?, ?)";

  pool.query(query, [nombre, email, asunto, mensaje], (err, results) => {
    if (err) {
      console.error("Error al guardar el formulario:", err);
      return res.status(500).send("Error al guardar el formulario");
    }
    res.redirect("/");
  });
};
