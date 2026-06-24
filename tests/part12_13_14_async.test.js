import { describe, it, expect, vi } from 'vitest';

describe('Part 12-14: Asynchronous JavaScript', () => {
  describe('Promises', () => {
    it('should resolve and return value', async () => {
      const getSuccessPromise = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve('Success Data');
          }, 10);
        });
      };

      const data = await getSuccessPromise();
      expect(data).toBe('Success Data');
    });

    it('should reject and throw error', async () => {
      const getFailurePromise = () => {
        return new Promise((_, reject) => {
          setTimeout(() => {
            reject(new Error('Failed Request'));
          }, 10);
        });
      };

      await expect(getFailurePromise()).rejects.toThrow('Failed Request');
    });

    it('should support promise chaining', () => {
      const addOne = (val) => Promise.resolve(val + 1);

      return addOne(1)
        .then((res) => addOne(res))
        .then((res) => {
          expect(res).toBe(3);
        });
    });
  });

  describe('Async / Await', () => {
    const fetchData = async (shouldSucceed) => {
      if (shouldSucceed) {
        return 'data received';
      } else {
        throw new Error('network error');
      }
    };

    it('should resolve with await', async () => {
      const res = await fetchData(true);
      expect(res).toBe('data received');
    });

    it('should catch errors with try/catch', async () => {
      let errorOccurred = false;
      try {
        await fetchData(false);
      } catch (err) {
        errorOccurred = true;
        expect(err.message).toBe('network error');
      }
      expect(errorOccurred).toBe(true);
    });
  });

  describe('Mocking API requests (fetch & Axios simulation)', () => {
    it('should mock global fetch responses (like api.js)', async () => {
      const dummyResponse = { value: 'fact about dogs' };

      // Mock global fetch
      const mockFetch = vi.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(dummyResponse)
        })
      );

      vi.stubGlobal('fetch', mockFetch);

      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();

      expect(mockFetch).toHaveBeenCalledWith('https://dog.ceo/api/breeds/image/random');
      expect(data).toEqual(dummyResponse);

      vi.unstubAllGlobals();
    });

    it('should mock Axios client responses (like Axios.js)', async () => {
      // Mocking axios structure
      const mockAxios = {
        get: vi.fn().mockResolvedValue({
          data: { fact: 'Cats use their whiskers to detect if they can fit.' }
        })
      };

      const res = await mockAxios.get('https://catfact.ninja/fact');
      expect(mockAxios.get).toHaveBeenCalledWith('https://catfact.ninja/fact');
      expect(res.data.fact).toContain('whiskers');
    });
  });
});
