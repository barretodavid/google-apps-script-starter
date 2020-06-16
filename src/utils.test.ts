import { multiply } from './utils';

describe('multiply', () => {
  it('should perform a multiplication', () => {
    expect(multiply(5, 3)).toBe(15);
  });
});
