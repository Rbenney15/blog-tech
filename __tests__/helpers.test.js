const { format_date } = require('../utils/helpers');
test('format_date() returns a date string', () => {
    const date = new Date('2022-05-22 17:02:45');
    expect(format_date(date)).toBe('5/22/2022');
});