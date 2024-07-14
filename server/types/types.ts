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
