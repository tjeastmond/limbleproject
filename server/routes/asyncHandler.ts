import { Request, Response, NextFunction } from "express";

/**
 * Wraps an async route handler to catch any errors and pass them to the
 * error handler. Basically, this helps avoid a million try/catch blocks.
 *
 * @param fn - The async route handler.
 * @returns The wrapped route handler.
 */
export default function asyncHandler(fn: Function) {
  return function (req: Request, res: Response, next: NextFunction) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
