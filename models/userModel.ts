import { Schema } from "mongoose";

const userModel = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: String,
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    settings: [
      {
        type: Schema.Types.ObjectId,
        ref: "Settings",
      },
    ],
    notifications: [
      {
        type: Schema.Types.ObjectId,
        ref: "Notifications",
      },
    ],
    image: {
      profile: String,
      cover: String,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    dateOfBirth: Date,
    address: String,
    deactivated: Boolean,
    online: {
      type: Boolean,
      default: false,
    },
    lastSeen: Date,
  },
  {
    collection: "Users",
    timestamps: true,
    versionKey: false,
  }
);

userModel.pre("save", async function (next) {
  try {
    next();
  } catch (err: any) {
    next(err);
  }
});

export default userModel;
