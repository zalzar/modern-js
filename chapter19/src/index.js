import { styleBody, addTitle, contact } from './dom';
<<<<<<< HEAD
import users, { getPremUsers } from './data';

styleBody();
addTitle('Hello world from the dom file');
=======
import users, { getPremiumUsers } from './data';
styleBody();
const premUsers = getPremiumUsers(users);
console.log(users, premUsers);
>>>>>>> c908c72a20a4e06e112b1d873a5473d48eee72bd

console.log(users);

const preUsers = getPremUsers(users);
console.log(preUsers);

console.log(contact);
console.log('from index.js');