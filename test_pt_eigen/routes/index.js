const express = require('express')
const router = express.Router()

const routerBook = require("./book")
const routerMember = require("./member")
const routerBorrowing = require("./borrowing")

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.use("/books", routerBook)
router.use("/members", routerMember)
router.use("/borrowings", routerBorrowing)


module.exports = router