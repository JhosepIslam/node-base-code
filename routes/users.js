//express route file
const {Router} = require('express');
const router = Router();
const {getUsers, postUsers, deleteUsers, putUsers} = require('../controllers/users');


router.get("/", getUsers);
router.post("/", postUsers);
router.put("/:id", putUsers);
router.delete("/", deleteUsers);



module.exports = router;