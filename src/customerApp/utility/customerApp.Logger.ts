// browser consol
// email
// db
export interface ILogger {
    log();
}

export class ConsoleLogger implements ILogger {
    log() {
        console.log("Using console logger");
    }
}

export class DBLogger implements ILogger {
    log() {
        console.log("Using DB Logger");
    }
}