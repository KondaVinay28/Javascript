import { describe, it, expect } from 'vitest';

describe('Part 8: Advanced Array Methods & ES6 Features', () => {
  describe('Iterators (map, filter, every, some, reduce)', () => {
    const nums = [1, 2, 3, 4, 5];

    it('should map elements to a new array using .map()', () => {
      const doubled = nums.map((el) => el * 2);
      expect(doubled).toEqual([2, 4, 6, 8, 10]);
      expect(nums).toEqual([1, 2, 3, 4, 5]); // original unchanged
    });

    it('should filter elements based on condition using .filter()', () => {
      const evens = nums.filter((el) => el % 2 === 0);
      expect(evens).toEqual([2, 4]);
    });

    it('should check if all elements match using .every()', () => {
      const allPositive = nums.every((el) => el > 0);
      const allEven = nums.every((el) => el % 2 === 0);

      expect(allPositive).toBe(true);
      expect(allEven).toBe(false);
    });

    it('should check if any element matches using .some()', () => {
      const hasEven = nums.some((el) => el % 2 === 0);
      const hasNegative = nums.some((el) => el < 0);

      expect(hasEven).toBe(true);
      expect(hasNegative).toBe(false);
    });

    it('should aggregate elements using .reduce()', () => {
      const sum = nums.reduce((acc, curr) => acc + curr, 0);
      const max = nums.reduce((acc, curr) => (curr > acc ? curr : acc), nums[0]);

      expect(sum).toBe(15);
      expect(max).toBe(5);
    });
  });

  describe('ES6 Destructuring', () => {
    it('should destructure arrays', () => {
      const fruits = ['apple', 'banana', 'cherry'];
      const [first, second] = fruits;

      expect(first).toBe('apple');
      expect(second).toBe('banana');
    });

    it('should destructure objects with renaming and default values', () => {
      const user = {
        id: 101,
        username: 'alice',
        email: 'alice@example.com'
      };

      const { username: name, email, role = 'guest' } = user;

      expect(name).toBe('alice');
      expect(email).toBe('alice@example.com');
      expect(role).toBe('guest');
    });
  });

  describe('Spread and Rest Operators', () => {
    it('should expand elements using spread (...)', () => {
      const arr1 = [1, 2];
      const arr2 = [3, 4];
      const combined = [...arr1, ...arr2];

      expect(combined).toEqual([1, 2, 3, 4]);

      const obj1 = { a: 1 };
      const obj2 = { b: 2 };
      const combinedObj = { ...obj1, ...obj2 };

      expect(combinedObj).toEqual({ a: 1, b: 2 });
    });

    it('should collect elements using rest (...)', () => {
      const sum = (...args) => {
        return args.reduce((acc, c) => acc + c, 0);
      };

      expect(sum(1, 2, 3, 4)).toBe(10);
    });
  });
});
