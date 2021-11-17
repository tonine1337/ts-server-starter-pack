import { Router } from 'express';
import { HelpController } from '../controllers/HelpController';

const toyHelpRouter = Router();

toyHelpRouter.post('/help', HelpController.getToyHelp);

export = toyHelpRouter;
