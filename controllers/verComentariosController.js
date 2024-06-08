const pool = require("../config/dbPool");

exports.verComentarios = (req, res) => {
  const query = "SELECT * FROM formularios_contacto ORDER BY fecha DESC";
  pool.query(query, (err, results) => {
    if (err) {
      console.error("Error al obtener los comentarios:", err);
      return res.status(500).send("Error al obtener los comentarios");
    }
    res.render("verComentarios", { comentarios: results });
  });
};
