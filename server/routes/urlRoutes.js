const router = require("express").Router();
const { makeSmallUrl, getOriginalUrl } = require("../controller/urlController");

router.get("/:smallUrl", getOriginalUrl); // small url to original
router.post("/api/make/smallUrl", makeSmallUrl); // original url to small

module.exports = router;
