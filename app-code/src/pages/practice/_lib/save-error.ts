import { errorMessage } from "@/lib/errors.ts";

export const saveErrorMessage = (error: unknown) => errorMessage(error, "Could not save your progress. Please try again.");
