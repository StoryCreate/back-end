import mongoose, { Model, model, models } from "mongoose";

// models
import userModel from "@models/userModel";
import settingModel from "@models/settingModel";
import notificationModel from "@models/notificationModel";

export const Users =
  mongoose.models["users"] || mongoose.model("users", userModel);
export const Settings =
  mongoose.models["settings"] || mongoose.model("settings", settingModel);
export const Notifications =
  mongoose.models["notifications"] ||
  mongoose.model("notifications", notificationModel);
