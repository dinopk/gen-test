module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 36,
      lines: 63,
      statements: 64,
    },
  },
  testRunner: 'jasmine2',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.module.ts',
    '!src/main.ts',
    '!src/app/core/store/index.ts',
    '!src/app/core/store/core.effects.ts',
    '!<rootDir>/node_modules/',
    '!<rootDir>/src/polyfills.ts',
  ],
  coveragePathIgnorePatterns: ['src/environments/*'],
  moduleNameMapper: {
    '^@environment$': '<rootDir>/src/environments/environment',
    '^@gent-material': '<rootDir>/src/app/material-module',
    '^@gen-models/(.*)$': '<rootDir>/src/app/core/models/$1',
    '^@gen-store/(.*)$': '<rootDir>/src/app/core/store/$1',
    '^@gen-services/(.*)$': '<rootDir>/src/app/core/services/$1'
  },
};