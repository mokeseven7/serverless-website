const { Component } = require('@serverless/core');
const aws = require('aws-sdk');

class Mcgrath extends Component {
	async default(inputs = {}) {
		this.context.status('Deploying...');
		this.context.debug(inputs);
		this.context.debug(this.context)
		return inputs;
	}
}


module.exports = Mcgrath;