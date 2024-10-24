import express, { type Application } from "express";
import { createServer, Server as httpServer } from "http";
import cors from "cors";

import { errorHandler } from "@/middlewares";

export class Server {
  private static instance: Server;
  private app: Application;
  private httpServer: httpServer;
  private port: number;

  constructor() {
    this.app = express();
    this.httpServer = createServer(this.app);
    this.port = parseInt(process.env.SERVER_PORT || "3001");

    this.initMiddlewares();
    this.initRoutes();
    this.errorHandler();
  }

  public static getInstance(): Server {
    if (!Server.instance) {
      this.instance = new Server();
    }
    return this.instance;
  }

  private initMiddlewares(): void {
    this.app.use(
      cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
      })
    );
    this.app.use(express.json());
  }

  private initRoutes(): void {
    // Add routes here
  }

  private errorHandler(): void {
    this.app.use(errorHandler);
  }

  public start(): void {
    this.httpServer.listen(this.port, () => {
      console.log(`Servidor corriendo en http://localhost:${this.port}`);
    });
  }
}
