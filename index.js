const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Model
const Contribuyente = require("./models/Contribuyente");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect("mongodb://mongo:27017/bd_sunat", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/v1/", (req, res) => {
  var ruc = req.query.ruc;

  Contribuyente.findOne(
    {
      ruc: req.query.ruc
    },
    (err, person) => {
      // res.render("index", { item });
      if (err) return res.status(500).body({ error: "Invalid parameter" });

      var objPerson = person.toObject();
      delete objPerson._id;
      objPerson.direccion = `${person.tipo_de_via ||
        ""} ${person.nombre_de_via || ""} ${person.numero || ""}`;
      res.json(objPerson);
    }
  );
});

const port = 3000;

app.listen(port, () => console.log(`Server running on port ${port}...`));
