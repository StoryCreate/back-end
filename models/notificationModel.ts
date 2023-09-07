import { Schema } from "mongoose";

export default new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    notifications: {
      type: Array,
      default: [],
    },
  },
  {
    collection: "Notifications",
    timestamps: true,
  }
);
