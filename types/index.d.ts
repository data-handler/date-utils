// types/index.d.ts
declare module '@datahandler/date-utils' {
    /**
     * Generates an array of years from the start year to the current year.
     * Optionally calls a callback for each year.
     *
     * @param startYear - The starting year.
     * @param callback - Optional callback invoked with each year.
     * @returns An array of years.
     * @throws Error if startYear is greater than the current year.
     */
    export function getYears(
        startYear: number,
        callback?: (year: number) => void
    ): number[];
}
