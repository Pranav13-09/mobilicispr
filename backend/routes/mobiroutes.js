const express = require("express");
const router = express.Router();
const {
  getAllProduct,
  first,
  createProduct,
  phonePriceGet,
  quoteGet,
  carGet,
  incomeGet,
  lowUserGet,
} = require("../controller/mobiController");

router.route("/api/products").get(getAllProduct);
router.route("/api/products").post(createProduct);
router.route("/api/phone").get(phonePriceGet);
router.route("/api/quote").get(quoteGet);
router.route("/api/car").get(carGet);
router.route("/api/income").get(incomeGet);
router.route("/api/low5").get(lowUserGet);

module.exports = router;
