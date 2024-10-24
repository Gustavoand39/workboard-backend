import express, { type Application } from "express";
import { createServer, Server as httpServer } from "http";
import cors from "cors";

import { errorHandler } from "@/middlewares";
import authRoutes from "@/routes/auth.routes";
import accountRoutes from "@/routes/account.routes";

export class Server {
  private static instance: Server;
  private app: Application;
  private httpServer: httpServer;
  private port: number;
  private apiPrefix: string = "/api/v1";

  constructor() {
    this.app = express();
    this.httpServer = createServer(this.app);
    this.port = parseInt(process.env.SERVER_PORT || "3000");

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
    this.app.use(`${this.apiPrefix}/auth`, authRoutes);
    this.app.use(`${this.apiPrefix}/account`, accountRoutes);
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
