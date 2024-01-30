export class DatabaseConfiguration {
  readonly host: string;

  readonly port: number;

  readonly username: string;

  readonly password: string;

  readonly database: string;

  constructor(
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
  ) {
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
    this.database = database;
  }
}
