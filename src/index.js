import AcmeDB from './AcmeDB';

const users = [
	{ name:'Moe'}
];

const db = new AcmeDB({ users });

console.log(db.users.length);
console.log(db.users[0].id);

db.addUser({ name: 'Larry'});

console.log('db.showUsers()', db.showUsers());
console.log('db.findById(2).name:', db.findById(2).name);

db.addUser({ name:'Curly' });
db.removeUserById(1);

console.log('db.users[0].name:', db.users[0].name); // Should be Larry

db.editUser({ id:2, name:'Laary '});

console.log('db.showUsers()', db.showUsers());