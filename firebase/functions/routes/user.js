const express = require("express");
const { db } = require("../util/admin");
const router = express.Router();

router.get("/", async (req, res) => {
  const user = await db.collection("user").get();
  const userData = user.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  res.send(userData);
});

router.post("/", (req, res) => {
  const message = req.body;
  db.collection("user").add(message);
  res.send(message);
});

router.patch("/", async (req, res) => {
    const id = req.body.id;
    const patchData = req.body.patchData
    console.log(patchData);
    db.collection("user").doc(id).update(patchData)
  res.send("It's Work! at fetch");
});

router.delete("/", async (req, res) => {
    const id = req.body.id;
    const patchData = req.body.patchData
    console.log(patchData);
    db.collection("user").doc(id).delete(patchData)
  res.send("It's Work! at fetch");
});

exports.default = router;
