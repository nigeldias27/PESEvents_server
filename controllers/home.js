import Event from "../models/Event";
import User from "../models/User";

export const getType = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    res.json(user.role);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

export const addEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    const data = await event.save();
    res.json(data);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

export const getEvent = async (req, res) => {
  try {
    console.log(req.body.id);
    const event = await Event.findById(req.body.id);
    console.log(event);
    res.json(event);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.body.id);
    res.send("Deleted successfully!");
  } catch (e) {
    res.status(400).send(e.message);
  }
};
