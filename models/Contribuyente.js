const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContribuyenteSchema = new Schema(
  {
    ruc: {
      type: Number,
      required: true
    },
    nombre_o_razon_social: {
      type: String
    },
    condicion_de_domicilio: {
      type: String
    },
    ubigeo: {
      type: Number
    },
    tipo_de_via: {
      type: String
    },
    nombre_de_via: {
      type: String
    },
    codigo_de_zona: {
      type: String
    },
    tipo_de_zona: {
      type: String
    },
    numero: {
      type: Number
    },
    interior: {
      type: String
    },
    lote: {
      type: String
    },
    dpto: {
      type: String
    },
    manzana: {
      type: String
    },
    kilometro: {
      type: String
    }
  },
  { collection: "padron" }
);

module.exports = Contribuyente = mongoose.model(
  "contribuyente",
  ContribuyenteSchema
);
