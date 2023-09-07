export enum STATUS {
  OK = 200,
  CREATED = 201,
  ACCEPTED,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export const serverErrors: { [x: number]: string } = {
  500: "INTERNAL_SERVER_ERROR",
  404: "NOT_FOUND",
  401: "UNAUTHORIZED",
  403: "FORBIDDEN",
  400: "BAD_REQUEST",
};

export const BASE_URL = process.env.BASE_URL as string;
export const SECRET_KEY = process.env.SECRET_KEY as string;
