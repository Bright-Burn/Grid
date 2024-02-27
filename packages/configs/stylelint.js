/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-clean-order/error',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'declaration-no-important': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'unit-allowed-list': ['px', 'rem', '%', 'vh', 'fr', 'deg', 's'],
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]+$',
      {
        message: ' Expected class selector "%s" to be camelCase',
      },
    ],
  },
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
}
