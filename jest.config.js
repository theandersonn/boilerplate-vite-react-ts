module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  // collectCoverageFrom: ['src/**/*.ts(x)'],
  collectCoverageFrom: [
    'src/**/*.ts(x)',
    '!src/**/*.d.ts(x)?',
    '!src/App.tsx',
    '!src/main.tsx',
    '!src/assets/**',
    '!src/styles/**/*.ts',
    '!src/**/types.ts',
    '!/types/**/*.d.ts',
    '!src/**/styles.ts',
    '!src/**/mock.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss|less)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss|less)$': '<rootDir>/.jest/__mocks__/styleMock.ts',
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg|ttf|woff|woff2)$': `<rootDir>/.jest/__mocks__/fileMock.ts`,
    '\\.svg$': '<rootDir>/.jest/__mocks__/svgMock.ts',
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
