const express = require("express");

const uploadMiddleware = require("../middlewares/upload-middleware.js");
const {
  uploadImageController,
  fetchImagesController,
  deleteImageController,
} = require("../controllers/image-controller");

const router = express.Router();

//upload the image
router.post(
  "/upload",
  uploadMiddleware.single("image"),
  uploadImageController
);

//to get all the images
router.get("/",  fetchImagesController);

//delete image route
router.delete("/:id", deleteImageController);

module.exports = router;