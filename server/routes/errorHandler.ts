import { NextFunction, Request, Response } from "express";

/**
 * This middleware is used as a global catch all for errors
 *
 * @param err - Error object
 * @param _: Request object
 * @param res: Response object
 * @param __: NextFunction object
 */
function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  console.error(`Error: ${err}`);
  res.status(500).send(`Internal Server Error`);
}

export default errorHandler;
