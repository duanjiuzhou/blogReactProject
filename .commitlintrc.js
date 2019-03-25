module.exports = { extends: ['@commitlint/config-conventional'] }

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-case': [0, 'always', 'lowerCase'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert'],
    ],
    // 'subject-case': [2, 'always', 'lowerCase'],
    'subject-full-stop': [2, 'always', '.'],
  },
}
