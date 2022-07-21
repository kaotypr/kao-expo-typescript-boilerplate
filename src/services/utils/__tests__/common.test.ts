import { getRandomNumber } from "../common";

describe("services/utils/common", () => {
  it('getRandomNumber: should get random number"', async () => {
    expect.assertions(2);
    const oneToTen = getRandomNumber(1, 10);
    const fiftyToNinetyNine = getRandomNumber(50, 99);
    expect(oneToTen < 11 && oneToTen > 0).toBeTruthy();
    expect(fiftyToNinetyNine < 100 && fiftyToNinetyNine > 49).toBeTruthy();
  });
});
