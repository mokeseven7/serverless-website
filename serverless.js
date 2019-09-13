const { Component } = require('@serverless/core');
const aws, { S3 } = require('aws-sdk');

class Mcgrath extends Component {
	async default(inputs = {}) {
		this.context.status('Deploying...');
		this.context.debug(inputs)
		return inputs;
	}
}


module.exports = Mcgrath;