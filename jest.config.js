const { defaults } = require('jest-config');

module.exports = {
  verbose: true,
  clearMocks: true,
  collectCoverage: false,
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg|cass|scss|less|css)$': '<rootDir>/__mocks__/fileMock.js',
    '^@Images/(.*)$': '<rootDir>/src/components/images/$1',
    '^@Common/(.*)$': '<rootDir>/src/components/common/$1',
    '^@Layouts/(.*)$': '<rootDir>/src/components/layouts/$1',
  },
  setupFilesAfterEnv: ['<rootDir>src/setupTests.js'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};
