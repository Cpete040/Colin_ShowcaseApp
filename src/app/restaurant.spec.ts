import { Restaurant } from './restaurant';

describe('Restaurant', () => {
  it('should create an instance', () => {
    expect(new Restaurant(0, "Pat's Pizza", 9, "7371111", "Pizza City, Italy")).toBeTruthy();
  });
});
