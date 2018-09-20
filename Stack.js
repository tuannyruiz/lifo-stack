let Stack = (function() {
	const items = new WeakMap();

	class Stack {

		constructor () {
			items.set(this, []); 
		}

		push(element) {
			let s = items.get(this);
			s.push(element);
		}
		
		pop() {
			let s = items.get(this);
			let r = s.pop();
			return r;
		}

		peek() {
			let s = items.get(this);
			return s[s.length-1];
		}

		isEmpty() {
			let s = items.get(this);
			return s.length == 0;
		}

		size() {
			let s = items.get(this);
			return s.length;
		} 

		clear() {
			let s = items.get(this);
			s = [];
		}

		print() {
			let s = items.get(this);
			console.log(s.toString());
		}
	}

	return Stack;
})();

// Decimal para binário

function divideBy2 (decNumber) {
	let remStack = new Stack(),
			rem,
			binaryString = '';

	while (decNumber > 0) {
		rem = Math.floor(decNumber % 2);
		remStack.push(rem);
		decNumber = Math.floor(decNumber / 2);
	}

	while (!remStack.isEmpty()) {
		binaryString += remStack.pop().toString();
	}

	return binaryString;
}