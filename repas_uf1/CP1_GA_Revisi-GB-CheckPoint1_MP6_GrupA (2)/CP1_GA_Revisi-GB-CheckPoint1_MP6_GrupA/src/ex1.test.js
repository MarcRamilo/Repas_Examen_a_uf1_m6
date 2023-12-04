const { taulerEscacs } = require('./Ex1');

describe('Ex1', () => {
  test("genera un tauler d'escacs de 8x8", () => {
    const expectedOutput =
      ' # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n';
    expect(taulerEscacs()).toBe(expectedOutput);
  });
});
