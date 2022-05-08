module.exports = {
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/@core/$1',
    
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage/lottery',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
  },
  transformIgnorePatterns: [
    "node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"
  ],
  moduleDirectories: [ "node_modules", "src" ],
  // roots: ["__tests__/"]
};