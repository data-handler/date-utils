import { getYears } from '../index';

test('returns an array of years', () => {
    const years = getYears(2020);
    expect(years).toContain(2020);
    expect(years).toContain(new Date().getFullYear());
});

test('executes a callback for each year', () => {
    const mockCallback = jest.fn();
    getYears(2020, mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(new Date().getFullYear() - 2019);
});
