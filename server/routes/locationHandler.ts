import express, { Request, Response } from "express";
import { Locations } from "../models";
import asyncHandler from "./asyncHandler";
const locationHandler = express.Router();

async function locations(_req: Request, res: Response) {
  const locations = await Locations();
  res.status(200).json(locations);
}

// map route to handler function
locationHandler.get("/locations", asyncHandler(locations));

export default locationHandler;
