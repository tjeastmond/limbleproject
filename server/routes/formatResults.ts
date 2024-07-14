import { FormattedResults } from "../types/types";

/**
 * Formats the given data object into a structured format.
 *
 * @param {object} data - The api result to be formatted.
 * @returns {FormattedResults} - The formatted results including status, message, length, and the original data.
 */
export default function formatResults(data: object): FormattedResults {
  const found = Object.keys(data).length > 0;
  const formatted: FormattedResults = {
    status: found ? 200 : 404,
    message: found ? "Success" : "No results found",
    length: Object.keys(data).length,
    data: found ? data : [],
  };

  return formatted;
}
