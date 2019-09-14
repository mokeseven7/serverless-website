const { Component } = require('@serverless/core');
const lambda = require('aws-sdk/clients/lambda');

class Mcgrath extends Component {

	/**
	 * This method is called when the serverless comands is run
	 * @param {object} inputs 
	 */
	async default(inputs = {}) {
		console.log(this.context.credentials);

		const $L = new lambda({
			apiVersion: '2015-03-31',
			credentials: this.context.credentials.aws
		});
	}
}


module.exports = Mcgrath;

