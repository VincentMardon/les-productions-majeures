import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src/tests'],
  transform: {
    '^.+\\.css\\.ts$': '@vanilla-extract/jest-transform',
  },
}

export default createJestConfig(customJestConfig)
