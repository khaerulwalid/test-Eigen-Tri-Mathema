const express = require("express")
const BorrowingController = require("../controller/BorrowingController")
const router = express.Router()

router.post("/", BorrowingController.PostBorrowing)
router.patch("/:id", BorrowingController.UpdateReturnDateBorrowingBook)

module.exports = router