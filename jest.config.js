// jest.config.js
module.exports = {
    "testMatch": ["**/*.test.ts"],
    preset: 'jest-playwright-preset',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testTimeout: 30000,
  };
  