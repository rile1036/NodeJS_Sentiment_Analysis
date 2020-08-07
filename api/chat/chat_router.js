const { show, create /*analysis*/ } = require("./chat.js")
const router = require("express").Router();

router.get("/", show);
router.post("/", create);
//router.get("/:id", analysis)

module.exports = router;
