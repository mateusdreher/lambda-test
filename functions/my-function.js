exports.handler = async function(event, context) {
	return {
		statusCode: 200,
		body: JSON.stringify({message: 'My lambda function works', event, context})
	}
}