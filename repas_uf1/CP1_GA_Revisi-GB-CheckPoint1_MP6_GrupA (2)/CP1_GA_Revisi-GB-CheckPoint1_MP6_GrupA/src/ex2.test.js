const {
  getSleepHours,
  getActualSleepHours,
  getIdealSleepHours,
  getFreeTimeHours,
  calculateActivityTime,
  canDoActivities,
} = require('./Ex2');

describe('Ex2', () => {
  test('getSleepHours', () => {
    expect(getSleepHours('monday')).toBe(7);
    expect(getSleepHours('tuesday')).toBe(6);
    expect(getSleepHours('wednesday')).toBe(8);
    expect(getSleepHours('thursday')).toBe(7);
    expect(getSleepHours('friday')).toBe(6);
    expect(getSleepHours('saturday')).toBe(9);
    expect(getSleepHours('sunday')).toBe(8);
  });
  test('getActualSleepHours', () => {
    expect(getActualSleepHours()).toBe(34);
  });

  test('getIdealSleepHours', () => {
    expect(getIdealSleepHours()).toBe(56);
  });

  test('getFreeTimeHours', () => {
    expect(getFreeTimeHours()).toBe(46);
  });

  test('calculateActivityTime', () => {
    expect(
      calculateActivityTime([
        { name: 'Gym', time: 5 },
        { name: 'Party', time: 4 },
        { name: 'Watch TV', time: 6 },
        { name: 'Read', time: 5 },
      ])
    ).toBe(20);
  });

  test('canDoActivities', () => {
    expect(
      canDoActivities([
        { name: 'Gym', time: 5 },
        { name: 'Party', time: 4 },
        { name: 'Watch TV', time: 6 },
        { name: 'Read', time: 5 },
      ])
    ).toBe('Pots fer totes les activitats');
  });

  test('cannotDoActivities', () => {
    expect(
      canDoActivities([
        { name: 'Gym', time: 12 },
        { name: 'Party', time: 10 },
        { name: 'Watch TV', time: 10 },
        { name: 'Read', time: 15 },
      ])
    ).toBe('No pots fer totes les activitats');
  });
});

/**
 *
 * https://jestjs.io/docs/en/expect
 */
