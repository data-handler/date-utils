export const getYears = (startYear, callback) => {
    const currentYear = new Date().getFullYear();

    if (startYear > currentYear) {
        throw new Error(`startYear (${startYear}) cannot be greater than the current year (${currentYear}).`);
    }

    const years = [];
    for (let year = startYear; year <= currentYear; year++) {
        years.push(year);
        if (callback) {
            callback(year);
        }
    }

    return years;
};
