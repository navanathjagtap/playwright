// jest.setup.js
const { devices } = require('playwright');

beforeAll(async () => {
  // Setup Playwright with Node.js environment
  await devices.register({});
});

// Increase the timeout if needed
jest.setTimeout(30000);
