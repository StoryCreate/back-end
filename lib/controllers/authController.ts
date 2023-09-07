import { NextFunction as Next, Request as Req, Response as Res } from "express";
import JWT from "jsonwebtoken";
import HttpError from "@lib/httpError";
import axios from "axios";

const SECRET_KEY = process.env.SECRET_KEY as string;
const BASE_URL = process.env.BASE_URL;

export default class AuthController {
  /**
   * **Function** - Send a link to user mail to help them validate their register email
   * # Steps
   * - Validate Request body
   * - Sign a token
   * - Send token to user email for change of password
   * - send response of { success: true } to client
   */
  static async sendEmail(req: Req, res: Res, next: Next) {
    try {
      // TODO - Implementation
      return res.json({ success: true });
    } catch (error: any) {
      next(error);
    }
  }

  static async verifyEmail(req: Req, res: Res, next: Next) {
    try {
      const { email } = req.user;
      const caller = req.caller ?? "customer";
      const Users = models[caller];

      await Users.findOne({ email }, { verified: true });
      return res.send("<h1>Email Verification Successful</h1>");
    } catch (error: any) {
      next(error);
    }
  }

  /**
   * # Steps
   * - Check if Email exist in database - (throw bad request error, if not exist)
   * - Generate a token
   * - Send token to user email for change of password
   * - send response of { success: true } to client
   */
  static async authorizedChangeRequest(req: Req, res: Res, next: Next) {
    try {
      return res.json({ success: true });
    } catch (error) {
      next(error);
    }
  }
}
