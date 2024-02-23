import express from "express"
import { getData, getDatabyID, addData, updateData, deleteData } from "./controllers"

const router = express.Router()

router.route("/").get(getData).post(addData)

router.route("/:ID").get(getDatabyID).put(updateData).delete(deleteData)

export default router