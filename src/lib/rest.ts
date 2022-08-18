import express from 'express';
import bodyParser from 'body-parser';
import { ServerConfiguration } from '../interfaces/rest';

export class RestServer {
    private server: express.Express;
    private port: string | undefined;

    constructor(configuration: ServerConfiguration) {
        this.port = configuration.port;
        this.server = express();
    }

    public getServer(): express.Express {
        return this.server;
    }

    public getPort(): string | undefined {
        return this.port;
    }
}

export function useBodyParser(rest: RestServer): void {
    rest.getServer().use(bodyParser.json());
}

export function start(rest: RestServer): void {
    const server = rest.getServer();
    const port = rest.getPort();

    server.listen(port, () => {
        console.log(`Server listening on: localhost: ${port}`);
    })
}