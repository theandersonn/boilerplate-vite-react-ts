module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)',
    '!src/*.ts(x)',
    '!src/*.d.ts(x)?',
    '!src/utils/tests/**',
    '!src/styles/**/*.ts',
    '!src/**/index.tsx',
    '!src/**/styles.ts',
    '!src/**/stories.tsx',
    '!src/**/*mock*.ts(x)'
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
