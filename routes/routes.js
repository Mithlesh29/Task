const { model } = require("mongoose");
const User = require("../models/user");

exports.logPrint = (req, res) => {
  return res.status(200).json("working");
  res.end();
};
exports.register = (req, res) => {
  var user = User.create(req.body, (error, data) => {
    if (error) {
      return res.status(404).json(error);
    }
    user.save();
    res.send("user saved");
  });
};
exports.getspecStudent = async (req, res) => {
  try {
    const post = await User.find({ rollnumber: req.params.id });
    if (!post) throw Error("No ITEM found");
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json("Invalid Id");
  }
};

exports.deletestudent = async (req, res) => {
  const roll = req.params.roll;

  try {
    let data = await User.findOneAndRemove({ roll: roll });
    if (data) {
      res.status(200).json("data was deleted");
    } else {
      res.status(404).json("data not found");
    }
  } catch (error) {
    res.status(402).json("error");
  }
};

exports.Pagination = async (req, res) => {
  let page = 1;
  let limit = 5;
  try {
    const student = await User.find()
      .skip((page - 1) * limit)
      .limit(3);

    res.status(200).json(student);
  } catch (error) {
    res.status(404).json("Data was not found");
  }
};

// var db = new require("mongodb");
// db.collection("demo")
//   .findOne({ rollnumber: rollnumber })
//   .then((res) => {
//     throw new Error("already exist");
//   });
