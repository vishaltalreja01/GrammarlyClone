const express = require("express");
const router = express.Router();
const contentController = require("../controllers/content");
const verifyToken = require ("../middlewares/auth");

router.get("/getAll",verifyToken, contentController.getAllContent);

router.get("/getAllTrashContent",verifyToken, contentController.getAllTrashContent);

router.get("/content/getOne/:id",verifyToken, contentController.getOneContent);

router.post("/createContent",verifyToken, contentController.createContent);

router.put("/content/update/:id",verifyToken, contentController.updateContent);

router.put("/content/moveContentToTrash/:id",verifyToken, contentController.moveContentToTrash);

router.delete("/contents/delete/:id",verifyToken, contentController.deleteContent);

module.exports = router;
