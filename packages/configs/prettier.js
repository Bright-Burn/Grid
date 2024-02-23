/** @type {import('prettier').Config} */
export default {
  trailingComma: 'all',
  singleQuote: true,
  endOfLine: 'auto',
  bracketSameLine: true,
  semi: false,
  printWidth: 100,
  bracketSpacing: true,
  arrowParens: 'avoid',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
  ],
}
