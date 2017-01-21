export default class AcmeDB {
	//fix your tabs.. 2 space tabs are standard :)
	constructor(config) {// you could use { users }
		this.users = config.users.map(function(el, index) {//naming-- you are looping over users.. call this waht it is .. a user.. not an el
			el.id = index + 1;//leverage your addUser
			return el;
		});
	};
	addUser(obj) {//naming - call this what it is.. a user
		let newUser = obj;//i'm not sure what this buys you?
		newUser.id = this.users.reduce((max, el) => (el.id > max) ? el.id : max, 0) + 1;//nice
		this.users.push(newUser);
	};
	editUser(obj) {
		//this works.. i would rather just use map.. and return the edited user when the id's match
		for(let i=0; i<this.users.length; i++) {
			if(this.users[i].id === obj.id) {
				//there is some good stuff you are doing here..
				//you are not mutating passed in objects, which is good..
				//just not sure you know why you're doing it.. :)
				this.users[i] = Object.assign({}, this.users[i], obj);//i like this.. could be useful if we were not editing all the properties
				break;
			}
		}
	};
	findById(idToFind) {//how about just calling this id?
		for(let i=0; i<this.users.length; i++) {
			if(this.users[i].id === idToFind) {
				return this.users[i];
			}
		}
	};
	removeUserById(idToRemove) {//again just an id
		// i think using filter is a simpler solution to the problem.
		for(let i=0; i<this.users.length; i++) {
			if(this.users[i].id === idToRemove) {
				this.users = this.users.slice(i+1, this.users.length);
				break;
			}
		}
	};
	showUsers() {
		//great
		return this.users.map((el)=>el.name).join(' ');
	};
}
