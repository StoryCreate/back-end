import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import HttpError from "@lib/httpError";
import { STATUS } from "@lib/constants";
import { STATES } from "mongoose";

export function verifyBearerToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Extract the Authorization header from the request
  const authHeader = req.headers.authorization;

  // Check if the Authorization header exists and starts with "Bearer "
  if ((authHeader && authHeader.startsWith("Bearer ")) || req.query.token) {
    // Extract the token from the Authorization header
    const token = (req.query.token as string) ?? authHeader!.substring(7);

    try {
      // Verify the token using the JWT library
      const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
      // @ts-ignore
      req.user = decoded;

      // Call the next middleware or continue processing the request
      next();
    } catch (error) {
      // If the token verification fails, return an error response
      return next(new HttpError("Invalid or Expired auth", STATUS.FORBIDDEN));
    }
  } else {
    // If the Authorization header is missing or doesn't start with "Bearer ",
    // return an error response
    return next(new HttpError("Not Authorized", STATUS.FORBIDDEN));
  }
}
