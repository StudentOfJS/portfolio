import { minLength, safeLength } from './ContactForm';

describe('validation works', () => {
  it('should return false if length is less than supplied minimum', () => {
    expect(minLength('test', 3)).toBeTruthy();
    expect(minLength('test', 8)).toBeFalsy();
  });
  it('should return true if length is less than supplied maximum', () => {
    expect(safeLength('test', 8)).toBeTruthy();
    expect(safeLength('test', 3)).toBeFalsy();
  });
});
