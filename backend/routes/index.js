const express=require("express");
const userRouter=require("./user");
const accountRouter=require("./account");
const bulkRouter=require("./bulk");
const meRouter=require("./me");
const router =express.Router()
router.use("/user",userRouter)
router.use("/account",accountRouter)
router.use("/bulk",bulkRouter)
router.use("/me",meRouter)

module.exports=router;