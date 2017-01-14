export default class AcmeDB {
	constructor(config) {
		this.users = config.users.map(function(el, index) {
			el.id = index + 1;
			return el;
		});
	};
	addUser(obj) {
		let newUser = obj;
		newUser.id = this.users.reduce((max, el) => (el.id > max) ? el.id : max, 0) + 1;
		this.users.push(newUser);
	};
	editUser(obj) {
		for(let i=0; i<this.users.length; i++) {
			if(this.users[i].id === obj.id) {
				this.users[i] = Object.assign({}, this.users[i], obj);
				break;
			}
		}
	};
	findById(idToFind) {
		for(let i=0; i<this.users.length; i++) {
			if(this.users[i].id === idToFind) {
				return this.users[i];
			}
		}
	};
	removeUserById(idToRemove) {
		for(let i=0; i<this.users.length; i++) {
			if(this.users[i].id === idToRemove) {
				this.users = this.users.slice(i+1, this.users.length);
				break;
			}
		}
	};
	showUsers() {
		return this.users.map((el)=>el.name).join(' ');
	};
}