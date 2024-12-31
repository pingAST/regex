import Validator from '../Validator';

describe('Validator', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  test('valid username', () => {
    expect(validator.validateUsername('valid_user123')).toBe(true);
    expect(validator.validateUsername('user-name')).toBe(true);
    expect(validator.validateUsername('user123')).toBe(true);
  });

  test('invalid usernames', () => {
    expect(validator.validateUsername('123user')).toBe(false);
    expect(validator.validateUsername('user-')).toBe(false);
    expect(validator.validateUsername('-user')).toBe(false);
    expect(validator.validateUsername('__user')).toBe(false);
    expect(validator.validateUsername('user__')).toBe(false);
    expect(validator.validateUsername('user--')).toBe(false);
    expect(validator.validateUsername('user--name')).toBe(false);
    expect(validator.validateUsername('user1234')).toBe(false);
    expect(validator.validateUsername('user12345')).toBe(false);
  });
});
