const { Component, utils } = require('@serverless/core');
const lambda = require('aws-sdk/clients/lambda');
const { mergeDeepRight } = require('ramda');
const { lambdaVMDefaults } = require('./util')

class Mcgrath extends Component {

	/**
	 * This method is called when the serverless comands is run
	 * @param {object} inputs 
	 */
	async default(inputs = {}) {
		this.context.status('ShitFuck');
		const config = mergeDeepRight(defaults, inputs)
		this.context.debug('Config Object', config)

		const layer = await this.load('@serverless/aws-lambda-layer');
		const $L = new lambda({
			apiVersion: '2015-03-31',
			credentials: this.context.credentials.aws
		});

		return true;

	}


	async setupLayer(layerOptions) {
		let inputs = {
			description: `This is a php layer for lambda`,
			code: path.join(config.code, 'node_modules'),
			runtime: ['provided'],
			prefix: 'nodejs/node_modules',
			bucket: config.bucket,
			region: config.region
		}
	}
}


module.exports = Mcgrath;

