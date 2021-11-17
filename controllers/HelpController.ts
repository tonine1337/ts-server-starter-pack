import { HelpService } from '../services/HelpService';
import { Response, Request } from 'express';

export class HelpController {
  static getToyHelp(req: Request, res: Response): void {
    try {
      const data = HelpService.getData(req.body);
      console.log(data);
      res.status(200).send(data);
    } catch (exception) {
      console.error(exception);
    }
  }
}
