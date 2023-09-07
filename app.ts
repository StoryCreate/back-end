import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import corsOptionsDelegate from "@helpers/corsOptionsDelegate";
import router from "@routes/index";
import HttpError from "@lib/httpError";
import { STATUS, serverErrors } from "@lib/constants";

const app = express();

// app configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptionsDelegate));
app.use(express.static("public"));

// for rendering/compiling pages
app.set("view engine", "hbs");

// api
app.use("/", router);

// not found
app.use((_req, _res, next) => {
  next(
    new HttpError(
      "The path you called doesn't exist, try checking the request method",
      STATUS.NOT_FOUND
    )
  );
});

// error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  // Check if the error has a specific HTTP status code
  const statusCode = err.statusCode || 500;

  if (statusCode === 500) console.error(err); // Log the error for debugging purposes

  // Set the response status code and send the error message
  return res.status(statusCode).json({
    name: serverErrors[statusCode],
    message: err.message ?? "Internal Server Error",
    statusCode,
  });
});

export default app;
