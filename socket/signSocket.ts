import { STATUS } from "@lib/constants";
import HttpError from "@lib/httpError";
import { Socket } from "socket.io";
import { ExtendedError } from "socket.io/dist/namespace";

export default async function signSocket(
  socket: Socket,
  next: (err?: ExtendedError | undefined) => void
) {
  try {
    const { token } = socket.handshake.auth;

    next();
  } catch (error: any) {
    next(error);
  }
}
