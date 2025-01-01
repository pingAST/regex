import Validator from '../Validator';

describe('Validator', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  const validUsernames = [
    'valid_user123',
    'user-name',
    'user123'
  ];

  const invalidUsernames = [
    '123user',
    'user-',
    '-user',
    '__user',
    'user__',
    'user--',
    'user--name',
    'user1234',
    'user12345'
  ];

  test.each(validUsernames)('valid username: %s', (username) => {
    expect(validator.validateUsername(username)).toBe(true);
  });

  test.each(invalidUsernames)('invalid username: %s', (username) => {
    expect(validator.validateUsername(username)).toBe(false);
  });
});
