import { uselessCalculation } from './index';

describe('uselessCalculation', () => {
  it('should multiply a number by 10', () => {
    expect(uselessCalculation(5)).toBe(50);
  });
});
