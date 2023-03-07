const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    barcodeNumber: { type: String, required: true },
    brand: { type: String, required: true },
    company: { type: String, required: true },
    capacity: { type: String, required: true },
    material: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Barcode", Schema);
