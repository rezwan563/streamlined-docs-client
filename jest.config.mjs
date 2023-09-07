// jest.config.mjs

export default {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', // Adjust the path mapping as needed
    },
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  };
  