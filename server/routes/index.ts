import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import qs from "qs";
import errorHandler from "./errorHandler";
import locationHandler from "./locationHandler";
import wagesHandler from "./wagesHandler";

export default function routesHandler(app: express.Application) {
  return function (_req: Request, _res: Response, next: NextFunction) {
    // review, not sure this helps much
    app.set("query parser", (str: string) => qs.parse(str));

    // connect middleware
    app.use(express.json());
    app.use(morgan("dev"));
    app.use(helmet());
    app.use(helmet.hidePoweredBy());
    app.use(cors());

    // connect routes to handlers
    app.use(wagesHandler);
    app.use(locationHandler);
    app.use(errorHandler);

    // health check and index page
    app.get("/", (_req, res) => res.status(200).json({ health: "OK" }));

    // unknown routes
    app.use((_req, res) => res.status(404).send("404 Not Found"));

    next();
  };
}
