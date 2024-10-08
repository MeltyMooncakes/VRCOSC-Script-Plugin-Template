export class Plugin {
	// @ts-ignore
	client: Client;
	// @ts-ignore
	constructor(client: Client) {
		this.client = client;
	}
	
	async start() {
		console.log("started")
	};

	async formatMessage(message: string): Promise<string> {
		return message;
	}
}