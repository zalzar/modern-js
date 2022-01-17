import { styleBody, addTitle, contact } from './dom';
import users, { getPremUsers } from './data';

styleBody();
addTitle('Hello world from the dom file');

console.log(users);

const preUsers = getPremUsers(users);
console.log(preUsers);

console.log(contact);
console.log('from index.js');