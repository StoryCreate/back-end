import { serverErrors } from "@lib/constants";

class HttpError {
  name: string;
  statusCode: number;
  message: string;

  constructor(message: string, statusCode = 500) {
    this.name = serverErrors[statusCode];
    this.statusCode = statusCode;
    this.message = message;
  }
}

export default HttpError;
