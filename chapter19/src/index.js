import { styleBody, addTitle, contact } from './dom';
import users, { getPremiumUsers } from './data';
styleBody();
const premUsers = getPremiumUsers(users);
console.log(users, premUsers);

console.log('test3');