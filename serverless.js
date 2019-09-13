const { Component } = require('@serverless/core');
const aws = require('aws-sdk');

class Mcgrath extends Component {
	async default(inputs = {}) {
		console.log(this.context)
	}
}


module.exports = Mcgrath;