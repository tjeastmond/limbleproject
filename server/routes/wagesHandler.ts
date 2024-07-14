import express, { Request, Response } from "express";
import { WagesByLocation, WagesByTask, WagesByWorker } from "../models";
import asyncHandler from "./asyncHandler";
import formatResults from "./formatResults";
import queryFilters from "./queryFilters";
const wagesHandler = express.Router();

async function wagesByWorker(req: Request, res: Response) {
  const results = await WagesByWorker(queryFilters(req));
  res.status(200).json(formatResults(results));
}

async function wagesByLocation(req: Request, res: Response) {
  const results = await WagesByLocation(queryFilters(req));
  res.status(200).json(formatResults(results));
}

async function wagesByTask(req: Request, res: Response) {
  const results = await WagesByTask(queryFilters(req));
  res.status(200).json(formatResults(results));
}

// map routes to handler functions
wagesHandler.get("/wages/workers", asyncHandler(wagesByWorker));
wagesHandler.get("/wages/locations", asyncHandler(wagesByLocation));
wagesHandler.get("/wages/tasks", asyncHandler(wagesByTask));

export default wagesHandler;
