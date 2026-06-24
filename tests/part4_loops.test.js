import { describe, it, expect } from 'vitest';

describe('Part 4: Loops', () => {
  describe('For Loops', () => {
    it('should iterate a specific number of times and update counters', () => {
      let sum = 0;
      for (let i = 1; i <= 5; i++) {
        sum += i;
      }
      expect(sum).toBe(15); // 1 + 2 + 3 + 4 + 5 = 15
    });

    it('should generate multiplication tables (like Table.js)', () => {
      const multiplier = 5;
      const results = [];
      for (let i = 1; i <= 3; i++) {
        results.push(multiplier * i);
      }
      expect(results).toEqual([5, 10, 15]);
    });
  });

  describe('While Loops', () => {
    it('should run until the condition becomes false', () => {
      let count = 0;
      let i = 0;
      while (i < 3) {
        count += 2;
        i++;
      }
      expect(count).toBe(6);
    });
  });

  describe('Loop Control Statements (break)', () => {
    it('should terminate the loop execution immediately when break is encountered', () => {
      let iterations = 0;
      for (let i = 0; i < 10; i++) {
        if (i === 4) {
          break;
        }
        iterations++;
      }
      expect(iterations).toBe(4); // stopped before i=4
    });
  });

  describe('Iterating over Arrays', () => {
    it('should loop through array indices (traditional for loop)', () => {
      const arr = ['a', 'b', 'c'];
      let output = '';
      for (let i = 0; i < arr.length; i++) {
        output += arr[i];
      }
      expect(output).toBe('abc');
    });

    it('should loop through array values using for...of loops', () => {
      const fruits = ['apple', 'mango', 'orange'];
      const uppercaseFruits = [];
      for (const fruit of fruits) {
        uppercaseFruits.push(fruit.toUpperCase());
      }
      expect(uppercaseFruits).toEqual(['APPLE', 'MANGO', 'ORANGE']);
    });
  });

  describe('Nested Loops', () => {
    it('should run nested iterations correctly', () => {
      const grid = [];
      for (let i = 1; i <= 2; i++) {
        for (let j = 1; j <= 2; j++) {
          grid.push(`${i},${j}`);
        }
      }
      expect(grid).toEqual(['1,1', '1,2', '2,1', '2,2']);
    });
  });
});
