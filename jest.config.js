const { defaults } = require('jest-config');

module.exports = {
  verbose: true,
  clearMocks: true,
  collectCoverage: false,
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg|cass|scss|less|css)$': '<rootDir>/__mocks__/fileMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>src/setupTests.js'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};
