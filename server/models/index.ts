import { ApiFunctions, QueryFilters } from "../types/types";
import MariaDB from "./mariadb";
import parseFilters from "./parseFilters";
import { wagesByLocation, wagesByTask, wagesByWorker } from "./reports";

const mdb = new MariaDB();

const apis: ApiFunctions = {
  wagesByWorker,
  wagesByLocation,
  wagesByTask,
};

async function Query(api: string, filters: QueryFilters) {
  if (!Object.keys(apis).includes(api))
    throw new Error(`Unknown API request: ${api}`);

  const query = apis[api](parseFilters(filters));
  // console.log(query);

  try {
    return await mdb.select(query);
  } catch (error) {
    throw error;
  }
}

export async function Locations() {
  const query = "select * from locations order by name asc";
  const response = await mdb.select(query);
  return response;
}

export async function WagesByWorker(filters: QueryFilters) {
  const results = await Query("wagesByWorker", filters);
  return results;
}

export async function WagesByLocation(filters: QueryFilters) {
  const results = await Query("wagesByLocation", filters);
  return results;
}

export async function WagesByTask(filters: QueryFilters) {
  const results = await Query("wagesByTask", filters);
  return results;
}
