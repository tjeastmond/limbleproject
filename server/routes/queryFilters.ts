import { Request } from "express";
import { QueryFilters } from "../types/types";

function isValidParam(qs: string): Boolean {
  const regex = /^(\d+(,\d+)*)?$/;
  return regex.test(qs);
}

function qsArr(qs: string) {
  if (!isValidParam(qs)) throw new Error("Invalid query string");
  return qs.split(",").map((w) => parseInt(w, 10));
}

export default function queryFilters(req: Request) {
  let filters: QueryFilters = { workers: [], locations: [] };

  let cleaned_workers =
    typeof req.query.workers === "string" ? qsArr(req.query.workers) : [];

  let cleaned_locations =
    typeof req.query.locations === "string" ? qsArr(req.query.locations) : [];

  let cleaned_status =
    typeof req.query.status === "string" ? req.query.status : null;

  filters.workers = cleaned_workers;
  filters.locations = cleaned_locations;

  if (cleaned_status && (cleaned_status === "1" || cleaned_status === "0")) {
    filters.status = cleaned_status;
  }

  return filters;
}
