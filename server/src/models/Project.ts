/** @format */

import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: String,
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    description: String,
    startDate: Date,
    endDate: Date,
    projectLink: String,
    isCompleted: Boolean,
    status: String,
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
