import { Schema } from "mongoose";

export default new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    settings: {
      type: Schema.Types.Mixed,
      default: {},
    },
  },
  {
    collection: "Settings",
    minimize: false,
    versionKey: false,
  }
);
