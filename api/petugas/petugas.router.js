const {
    controllerAddPetugas,
    controllerGetPetugas,
    controllerGetPetugasById,
    controllerUpdatePetugas,
    controllerDeletePetugas,
    controllerLogin 
} = require("./petugas.controller");

const router = require("express").Router();
const {checkToken} = require("../../auth/token_validation")

router.post("/", controllerAddPetugas);
router.get("/", checkToken, controllerGetPetugas);
router.get("/:id", checkToken, controllerGetPetugasById); //:id diisi id _petugas yang sesuai dengan database pada link postman
router.patch("/", checkToken, controllerUpdatePetugas);
router.delete("/", checkToken, controllerDeletePetugas);
router.post("/login", controllerLogin)

module.exports = router;