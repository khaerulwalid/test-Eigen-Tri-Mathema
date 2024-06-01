const express = require("express")
const MemberController = require("../controller/MemberController")
const router = express.Router()

router.get("/", MemberController.GetAllMember)
router.post("/", MemberController.PostMember)
router.put("/:id", MemberController.PutMember)
router.delete("/:id", MemberController.DeleteMember)
router.get("/:id", MemberController.GetMemberById)

module.exports = router