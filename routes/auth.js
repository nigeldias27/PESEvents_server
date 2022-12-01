import express from "express";
import {
  auth,
  signUp,
  getType,
  addEvent,
  getEvents,
  getEvent,
  deleteEvent,
} from "../controllers/index.js";

const router = express.Router();
//http://localhost:4000/api/newrole
router.post("/auth", auth);
router.post("/signUp", signUp);
router.get("/getType/:email", getType);
router.post("/addEvent", addEvent);
router.get("/getAllEvents", getEvents);
router.post("/getEvent", getEvent);
router.post("/deleteEvent", deleteEvent);
module.exports = router;
