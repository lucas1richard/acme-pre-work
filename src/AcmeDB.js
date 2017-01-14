export default class AcmeDB {
	constructor(config) {
		this.users = config.users.map(function(el, index) {
			el.id = index + 1;
			return el;
		});
	};

	addUser(obj) {
		let newUser = obj;
		const getMax = (max, el) => (el.id > max) ? el.id : max;
		newUser.id = this.users.reduce(getMax, 0) + 1;
		this.users.push(newUser);
		console.log(this.users);
	};

	removeUserById(idToRemove) {
		for(let i=0; i<this.users.length; i++) {
			if(this.users[i].id === idToRemove) {
				this.users = this.users.slice(i+1, this.users.length);
				break
			}
		}
	};

	editUser(obj) {
		this.users = this.users.map(function(el, index) {
			if(el.id === obj.id) el.name = obj.name;
			return el;
		});
	};

	showUsers() {
		const getNames = (accum, el) => accum += ` ${el.name}`;
		return this.users.reduce(getNames,'');
	};

	findById(idToFind) {
		for(let i=0; i<this.users.length; i++) {
			if(this.users[i].id === idToFind) {
				return this.users[i];
			}
		}
	};
}