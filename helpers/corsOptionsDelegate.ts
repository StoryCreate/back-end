import { CorsOptions } from "cors";
import { Request } from "express";

// cors configuration - for security
// might need to add the application domain
const whitelist: string[] = [];

export default function corsOptionsDelegate(
  req: Request,
  callback: (err: Error | null, options: CorsOptions) => void
) {
  let corsOptions: CorsOptions;

  if (whitelist.includes(req.header("Origin") as string)) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }

  callback(null, corsOptions);
}
