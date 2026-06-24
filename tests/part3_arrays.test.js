import { describe, it, expect } from 'vitest';

describe('Part 3: Arrays', () => {
  describe('Basic Array Operations (push, pop, shift, unshift)', () => {
    it('should push elements to the end and pop from the end', () => {
      const arr = [1, 2, 3];
      arr.push(4);
      expect(arr).toEqual([1, 2, 3, 4]);

      const popped = arr.pop();
      expect(popped).toBe(4);
      expect(arr).toEqual([1, 2, 3]);
    });

    it('should shift elements from the start and unshift to the start', () => {
      const arr = [1, 2, 3];
      const shifted = arr.shift();
      expect(shifted).toBe(1);
      expect(arr).toEqual([2, 3]);

      arr.unshift(0);
      expect(arr).toEqual([0, 2, 3]);
    });
  });

  describe('Array Queries (indexOf, includes)', () => {
    it('should locate elements and check existence correctly', () => {
      const colors = ['red', 'green', 'blue'];
      expect(colors.indexOf('green')).toBe(1);
      expect(colors.indexOf('yellow')).toBe(-1);

      expect(colors.includes('blue')).toBe(true);
      expect(colors.includes('yellow')).toBe(false);
    });
  });

  describe('Slice and Splice', () => {
    it('should return a portion of the array with slice without modifying it', () => {
      const arr = ['a', 'b', 'c', 'd'];
      const sliced = arr.slice(1, 3);
      expect(sliced).toEqual(['b', 'c']);
      expect(arr).toEqual(['a', 'b', 'c', 'd']); // original unmodified
    });

    it('should modify the array in place using splice', () => {
      const arr = ['a', 'b', 'c', 'd'];
      // splice(start, deleteCount, item1, item2, ...)
      const deleted = arr.splice(1, 2, 'x', 'y');
      expect(deleted).toEqual(['b', 'c']);
      expect(arr).toEqual(['a', 'x', 'y', 'd']);
    });
  });

  describe('Concatenation and Reversal', () => {
    it('should concatenate arrays and reverse array order', () => {
      const a = [1, 2];
      const b = [3, 4];
      const concatenated = a.concat(b);
      expect(concatenated).toEqual([1, 2, 3, 4]);

      const reversed = concatenated.reverse();
      expect(reversed).toEqual([4, 3, 2, 1]);
      // Note: reverse() modifies the original array in place
      expect(concatenated).toEqual([4, 3, 2, 1]);
    });
  });

  describe('References and const Arrays', () => {
    it('should compare references, not structural values, using == or ===', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      const c = a;

      expect(a === b).toBe(false); // different memory references
      expect(a === c).toBe(true);  // same memory reference
    });

    it('should allow modifying elements of a const array but not reassigning it', () => {
      const arr = [1, 2, 3];
      arr[0] = 10;
      expect(arr).toEqual([10, 2, 3]);

      // arr = [4, 5, 6]; // Would throw TypeError
    });
  });

  describe('Nested and Multidimensional Arrays', () => {
    it('should store and access multidimensional arrays', () => {
      const matrix = [
        [1, 2],
        [3, 4]
      ];
      expect(matrix[0][1]).toBe(2);
      expect(matrix[1][0]).toBe(3);
    });
  });

  describe('Sorting Arrays', () => {
    it('should sort arrays lexicographically (alphabetically) by default', () => {
      const fruits = ['banana', 'apple', 'cherry'];
      fruits.sort();
      expect(fruits).toEqual(['apple', 'banana', 'cherry']);

      const nums = [10, 2, 30, 4];
      nums.sort();
      // By default, sort converts to strings, so '10' comes before '2'
      expect(nums).toEqual([10, 2, 30, 4]);

      // Numerical sorting using a comparator function
      nums.sort((a, b) => a - b);
      expect(nums).toEqual([2, 4, 10, 30]);
    });
  });
});
