import { describe, it, expect } from 'vitest';

describe('Part 2: Operators & Control Flow', () => {
  describe('Comparison Operators', () => {
    it('should evaluate comparison operators correctly', () => {
      const num = 10;
      expect(num >= 10).toBe(true);
      expect(num < 20).toBe(true);
      expect(num > 5).toBe(true);
    });

    it('should distinguish abstract (==) and strict (===) equality', () => {
      const num = 10;
      const strNum = '10';

      // == performs type coercion
      expect(num == strNum).toBe(true);
      // === checks both value and type without coercion
      expect(num === strNum).toBe(false);
    });
  });

  describe('Logical Operators', () => {
    it('should verify logical AND (&&) operations', () => {
      const num = 12;
      // num % 3 === 0 AND num > 10
      const isDivisibleAndGreater = (num % 3 === 0) && (num > 10);
      expect(isDivisibleAndGreater).toBe(true);
    });

    it('should verify logical OR (||) operations', () => {
      const num = 12;
      // Either num + 1 is 15 OR num - 1 is 11
      const checkCondition = (num + 1 === 15) || (num - 1 === 11);
      expect(checkCondition).toBe(true);
    });

    it('should correctly evaluate complex expressions (like Practice_exercise.js)', () => {
      const num = 12;
      const isSafe = num % 3 === 0 && (num + 1 === 15 || num - 1 === 11);
      expect(isSafe).toBe(true);
    });
  });

  describe('Control Flow', () => {
    it('should correctly execute conditional (if-else) statements', () => {
      let result;
      const num = 12;

      if (num % 2 === 0) {
        result = 'even';
      } else {
        result = 'odd';
      }

      expect(result).toBe('even');
    });

    it('should execute switch statements correctly (like Switch.js)', () => {
      const day = 3;
      let dayName;

      switch (day) {
        case 1:
          dayName = 'Monday';
          break;
        case 2:
          dayName = 'Tuesday';
          break;
        case 3:
          dayName = 'Wednesday';
          break;
        default:
          dayName = 'Unknown';
      }

      expect(dayName).toBe('Wednesday');
    });
  });

  describe('Template Literals', () => {
    it('should interpolate variables and expressions (like Template_Literal.js)', () => {
      const item = 'apple';
      const price = 10;
      const quantity = 3;
      const receipt = `You bought ${quantity} ${item}s for $${quantity * price}.`;

      expect(receipt).toBe('You bought 3 apples for $30.');
    });
  });
});
