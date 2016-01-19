class Validation {

	test(rule) {
		console.log(rule);
		return {
			result: false,
			info: 'the value is error'
		};
	}
}

const validation = new Validation();
export default validation;
