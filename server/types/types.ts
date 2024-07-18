import { ParsedQs } from "qs";

export interface QueryFilters {
  workers: Array<number>;
  locations: Array<number>;
  status?: string;
}

export interface FormattedResults {
  status: number;
  message: string;
  length: number;
  data: object;
}

export type ApiFunctions = {
  [key: string]: (where: string) => string;
};

export type FilterParam = string | string[] | ParsedQs | ParsedQs[] | undefined;
