const router = require("express").Router();
const Barcode = require("./models");

router.post("/metabin/create-new-barcode/", async (req, res, next) => {
  const { barcodeNumber, brand, company, capacity, material } = req.body;
  if (!barcodeNumber || !brand || !company || !capacity || !material) {
    return res.status(404).json({ message: "Missing required fields" });
  }

  try {
    const newBarcode = new Barcode({
      barcodeNumber,
      brand,
      company,
      capacity,
      material
    });
    await newBarcode.save();
    return res.status(200).json({ message: "barcode add successfully" });
  } catch (error) {
    return res.status(404).json({ message: "cannot add barcode" });
  }
});

module.exports = router;
