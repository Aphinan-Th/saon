const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("It's Work! at get");
})

router.post("/", (req, res) => {
    res.send("It's Work! at post");
})

router.patch("/", (req, res) => {
    res.send("It's Work! at fetch");
})

exports.default = router;