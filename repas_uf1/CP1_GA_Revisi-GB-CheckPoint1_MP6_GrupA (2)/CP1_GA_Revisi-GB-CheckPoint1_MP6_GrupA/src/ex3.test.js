const { users } = require('./data_ex3');

const { getUsersByHobby, friendsAverageAge, sharedHobbies } = require('./Ex3');

describe('Ex3', () => {
  it('should return an array of user names who have the given hobby', () => {
    const expected = ['John', 'Charlie'];
    const result = getUsersByHobby('running');
    expect(result).toEqual(expected);
  });

  it('should return the average age of the user friends', () => {
    const expected = 31;
    // En aquest cas miro la mitjana d'edat dels amics de l'usuari amb id 2
    const result = friendsAverageAge(2);
    expect(result).toEqual(expected);
  });

  it('should return an array of hobbies shared between the user and their friends', () => {
    const expected = ['reading', 'running'];
    const result = sharedHobbies(5);
    expect(result).toEqual(expected);
  });
});

/**
 *
 * https://jestjs.io/docs/en/expect
 */
