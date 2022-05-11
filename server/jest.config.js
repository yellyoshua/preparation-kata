export default {
  name: 'catalog-idukay-server',
  verbose: false,
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*js',
    '!src/**/*module.js',
    '!src/utilsForSpecs/*',
    '!src/**/mocks/*',
    '!src/**/fixtures/*',
    '!src/**/config/*'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
