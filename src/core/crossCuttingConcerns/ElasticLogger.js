import { BaseLogger } from "./baseLogger";

export class ElasticLogger extends BaseLogger {
  log(data) {
    console.log("Logged to Elastic" + data);
  }
}
