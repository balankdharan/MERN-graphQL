const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: "string",
  },
  description: {
    type: "string",
  },
  status: {
    type: "string",
    enum: ["Not Started", "In progress", "Completed"],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
