import { describe, it, expect, vi } from 'vitest';

describe('Part 6: Functions & Scope', () => {
  describe('Function Declarations & Scope', () => {
    it('should show lexical scope behavior (closures)', () => {
      function changeGreet() {
        const greet = 'namaste';
        function innerGreet() {
          return greet;
        }
        return innerGreet();
      }

      expect(changeGreet()).toBe('namaste');
    });

    it('should respect block scope for let/const but not var', () => {
      {
        var x = 1;
        let y = 2;
        const z = 3;
      }
      expect(x).toBe(1); // var is function/globally scoped, leaks out of block
      expect(() => y).toThrow(); // let is block scoped
      expect(() => z).toThrow(); // const is block scoped
    });
  });

  describe('Higher-Order Functions', () => {
    it('should accept functions as arguments (callbacks)', () => {
      const runTwice = (func, val) => {
        return func(func(val));
      };

      const addFive = (n) => n + 5;
      expect(runTwice(addFive, 10)).toBe(20);
    });

    it('should return functions from other functions', () => {
      const createMultiplier = (multiplier) => {
        return (val) => val * multiplier;
      };

      const double = createMultiplier(2);
      expect(double(10)).toBe(20);
    });
  });

  describe('Arrow Functions', () => {
    it('should return value implicitly when omitting braces', () => {
      const square = (n) => n * n;
      expect(square(7)).toBe(49);
    });
  });

  describe('this binding in Arrow vs Regular Functions', () => {
    it('should retain parent context this in arrow functions but bind dynamically in regular functions', () => {
      const obj = {
        name: 'Alice',
        regularFunc() {
          return this.name;
        },
        arrowFunc: () => {
          // 'this' refers to the surrounding lexical scope (undefined or global context in node tests)
          return this ? this.name : undefined;
        }
      };

      expect(obj.regularFunc()).toBe('Alice');
      expect(obj.arrowFunc()).toBeUndefined();
    });
  });

  describe('Timing Functions (setTimeout / setInterval)', () => {
    it('should schedule execution with setTimeout using fake timers', () => {
      vi.useFakeTimers();

      let flag = false;
      setTimeout(() => {
        flag = true;
      }, 1000);

      expect(flag).toBe(false);

      // Advance timers by 1 second
      vi.advanceTimersByTime(1000);
      expect(flag).toBe(true);

      vi.useRealTimers();
    });

    it('should run repeatedly with setInterval and clear correctly', () => {
      vi.useFakeTimers();

      let count = 0;
      const intervalId = setInterval(() => {
        count++;
      }, 2000);

      vi.advanceTimersByTime(6000);
      expect(count).toBe(3); // fires at 2s, 4s, 6s

      clearInterval(intervalId);
      vi.advanceTimersByTime(4000);
      expect(count).toBe(3); // does not increment further

      vi.useRealTimers();
    });
  });
});
