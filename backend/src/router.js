const express = require("express");

const {
  ItemController,
  StateController,
  IssueController,
  CollectionController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/states", StateController.browse);

router.post("/issues", IssueController.add);
router.get("/issues/:id", IssueController.read);

router.post("/collections", CollectionController.add);
router.get("/collections/:id", CollectionController.read);

module.exports = router;
