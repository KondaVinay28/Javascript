import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node', // default environment is node
    globals: true, // enables global APIs like describe, test, expect
  },
});
