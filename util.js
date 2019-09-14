const lambdaVMDefaults = async () => {
	return {
		description: 'AWS Lambda Component',
		memory: 512,
		timeout: 10,
		code: process.cwd(),
		bucket: undefined,
		shims: [],
		handler: '',
		runtime: 'nodejs10.x',
		env: {},
		region: 'us-east-1'
	}
}

module.exports = {
	lambdaVMDefaults
}