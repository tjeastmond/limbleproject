import { QueryFilters } from "../types/types";

export default function parseFilters(filters: QueryFilters): string {
  let filter = "where 1=1";

  if (filters.workers.length > 0) {
    filter += ` and lt.worker_id in (${filters.workers.join(",")})`;
  }

  if (filters.locations.length > 0) {
    filter += ` and t.location_id in (${filters.locations.join(",")})`;
  }

  if (filters.status === "1" || filters.status === "0") {
    filter += ` and t.status = ${filters.status}`;
  }

  return filter;
}
