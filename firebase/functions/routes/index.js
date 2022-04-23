const express = require("express");
const router = express.Router();

// ใส่ path ตรงนี้
router.use("/user", require("./user").default);
router.use("/post", require("./post").default);


// ------------

exports.default = router;
