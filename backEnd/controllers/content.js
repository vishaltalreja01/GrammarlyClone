const Content = require("../models/Content");

exports.getAllContent = async (req, res) => {
  try {
    const contents = await Content.find({ userId: req.user.id, trash: false });

    res.status(200).send({ message: "Contents successfully found", contents });
  } catch (err) {
    res.send(err);
  }
};

exports.getAllTrashContent = async (req, res) => {
  try {
    const contents = await Content.find({ userId: req.user.id, trash: true });

    res.status(200).send({ message: "Contents successfully found", contents });
  } catch (err) {
    res.send(err);
  }
};

exports.getOneContent = async (req, res) => {
  try {
    const { id } = req.params;
    const contents = await Content.find({ _id: id });

    res.status(200).send({ message: "Content successfully found", contents });
  } catch (err) {
    res.send({ error: err.message });
  }
};

exports.createContent = async (req, res) => {
  try {
    const { text } = req.body;
    const content = await Content.create({
      text,
      trash: false,
      userId: req.user.id,
    });

    res.status(200).send({ message: "Content added to the database", content });
  } catch (err) {
    res.status(401).send({ error: err.message });
  }
};

exports.updateContent = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const content = await Content.findByIdAndUpdate({ _id: id }, { text });

    res.status(200).send({ message: "Content updated successfuly", content });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

exports.moveContentToTrash = async (req, res) => {
  try {
    const { id } = req.params;
    const content = await Content.findByIdAndUpdate({ _id: id }, { trash: true });

    res
      .status(200)
      .send({ message: "Content deleted successfully (in trash)", content });
  } catch (err) {
    res.send({ error: err.message });
  }
};

exports.deleteContent = async (req, res) => {
  try {
    const { id } = req.params;
    const content = await Content.findByIdAndDelete({ _id: id });

    res.status(200).send({ message: "Content delete successfully", content });
  } catch (err) {
    res.send({ error: err.message });
  }
};
