const { show, create } = require("./chat.js")
const router = require("express").Router();

router.get("/", show);
router.post("/", create);

module.exports = router;
