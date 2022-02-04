import { styleBody, addTitle, contact } from './dom';
import users, { getPremUsers } from './data';

const greet = (param) => {
    console.log(`hello ${param}`);
};

console.log('from index file');
console.log(contact);

greet('Ali');
greet('Morpheus');
greet('Link');

styleBody();
addTitle('Hello world');

console.log(users);

const premUsers = getPremUsers(users);
console.log(premUsers);