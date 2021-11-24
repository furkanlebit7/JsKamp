import { BaseLogger } from "./baseLogger";

export class MongoLogger extends BaseLogger {
  log(data) {
    console.log("Logged to Mongo" + data);
  }
}
