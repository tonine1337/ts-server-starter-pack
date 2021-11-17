import { HelpInterface } from '../interfaces/HelpInterface';

export class HelpService {
  static getData(body: HelpInterface) {
    try {
      return body;
    } catch (exception) {
      console.error(exception);
      return exception;
    }
  }
}
