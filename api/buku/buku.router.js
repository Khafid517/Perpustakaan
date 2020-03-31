const {
    controllerAddBuku,
    controllerUpdateBuku,
    controllerDeleteBuku,
    controllerGetBuku,
    controllerGetBukuById,
} = require("./buku.controller");

const router = require("express").Router();
const {checkToken} = require("../../auth/token_validation")

router.post("/", controllerAddBuku);
router.patch("/", controllerUpdateBuku);
router.delete("/", checkToken, controllerDeleteBuku);
router.get("/", checkToken, controllerGetBuku);
router.get("/", checkToken, controllerGetBukuById);

module.exports = router;