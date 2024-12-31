// TODO: write your code here
import Validator from './Validator';
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

const validator = new Validator();

console.log(validator.validateUsername("valid_username-123")); // true
console.log(validator.validateUsername("123invalid-")); // false
console.log(validator.validateUsername("user__name")); // false
console.log(validator.validateUsername("username123")); // true
console.log(validator.validateUsername("!!!invalid!!!")); // false
console.log(validator.validateUsername("user---1234")); // false


