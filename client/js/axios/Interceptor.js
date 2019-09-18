export default class Interceptor {

	constructor() {
		this.handlers = [];
	}

	use( resolvedHandler, rejectedHandler ) {
		this.handlers.push({
			resolvedHandler,
			rejectedHandler
		});
	}

}
