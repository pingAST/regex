export default class Validator {
  validateUsername(username) {
    const regex = /^(?!.*_{2,})(?!.*-{2,})(?!\d)(?!.*\d{4})(?!.*[_-]$)(?!.*^[_-])(?=.*[a-zA-Z])[a-zA-Z0-9-_]+$/;
    return regex.test(username);
  }
}

