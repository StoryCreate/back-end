import type { Socket as _Socket } from "socket.io";

type Socket = _Socket & { user?: {} };

class socketController {
  constructor(socket: Socket) {
    // tell others a new person is active
    socket.broadcast.emit("new_user", socket.user);

    socket.on("message", this.message.bind({ socket }));
    socket.on("actives", this.active_users.bind({ socket }));
    socket.on("disconnect", this.disconnect.bind({ socket }));
  }

  async message() {
    try {
    } catch (err: any) {}
  }

  async active_users() {}

  async disconnect() {}
}

export default socketController;
