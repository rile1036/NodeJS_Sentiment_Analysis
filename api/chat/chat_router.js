const { show, create, photoview/*analysis*/ } = require("./chat.js")
const router = require("express").Router();

router.get("/chat", show);
router.post("/chat", create);
router.get("/pic/:id", photoview)

module.exports = router;
