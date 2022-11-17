import { sendEmail } from "../helpers/sendEmail.js";
import Club from "../models/Club";
import User from "../models/User";

export const auth = async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email });
  console.log(userExists);
  if (userExists != null) {
    res.json({ exists: true, verified: userExists.verified });
  } else {
    res.json({ exists: false });
  }
};

export const signUp = async (req, res) => {
  try {
    if (req.body.role == "student") {
      const data = new User({
        email: req.body.user.email,
        name: req.body.user.name,
        profilePic: req.body.user.image,
        role: req.body.role,
        srn: req.body.srn,
        yearofstudy: req.body.yearofstudy,
        campus: req.body.campus,
        verified: true,
      });
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
    } else {
      const data = new User({
        email: req.body.user.email,
        name: req.body.user.name,
        profilePic: req.body.user.image,
        role: req.body.role,
        srn: req.body.srn,
        yearofstudy: req.body.yearofstudy,
        campus: req.body.campus,
        verified: false,
      });
      const clubData = new Club({
        clubName: req.body.clubName,
        description: req.body.description,
        verified: false,
      });
      data.club = clubData._id;
      clubData.clubHead = data._id;
      const dataToSave = await data.save();
      const clubDataToSave = await clubData.save();
      await sendEmail(JSON.stringify(req.body));
      res.send("Done");
    }
  } catch (e) {
    res.send(e.message);
  }
};
