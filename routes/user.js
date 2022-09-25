//express route file
const {Router} = require('express');
const router = Router();



//add route to get data from routes/api.js

router.get("/", (req, res) => {
    res.json({
      ok: true,
      msg: "get API",
    });
  });


  router.put("/", (req, res) => {
    res.json({
      ok: true,
      msg: "put API",
    });
  });
  
  router.post("/", (req, res) => {
    res.json({
      ok: true,
      msg: "post API",
    });
  });

  router.delete("/", (req, res) => {
    res.json({
      ok: true,
      msg: "delete API",
    });
  });


module.exports = router;