import { Request } from "express";
import { FilterParam, QueryFilters } from "../types/types";

function isValidParam(qs: string): Boolean {
  const regex = /^(\d+(,\d+)*)?$/;
  return regex.test(qs);
}

function qsArr(qs: string) {
  if (!isValidParam(qs)) throw new Error("Invalid query string");
  return qs.split(",").map((w) => parseInt(w, 10));
}

function parseParam(param: FilterParam) {
  return typeof param === "string" ? qsArr(param) : [];
}

function parseStatus(status: FilterParam) {
  return typeof status === "string" && ["0", "1"].includes(status)
    ? status
    : null;
}

export default function queryFilters(req: Request) {
  let filters: QueryFilters = {
    workers: parseParam(req.query.workers),
    locations: parseParam(req.query.locations),
  };

  let cleanedStatus = parseStatus(req.query.status);
  if (cleanedStatus) filters.status = cleanedStatus;

  return filters;
}
