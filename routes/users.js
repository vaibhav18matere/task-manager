import express from "express";
import { addNewUser, getAllUsers, getUserDetails } from "../controllers/app.js";

const router = express.Router();

router
  .get("/userId/:id", getUserDetails)
  .get("/all", getAllUsers)
  .post("/new", addNewUser);
export default router;
