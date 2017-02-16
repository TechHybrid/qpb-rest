import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from './route';


export class QuestionTypeRoute extends BaseRoute {
  
  public static create(route: Router) {
    console.log("[QuestionTypeRoute::Create] Creating question type route");
    route.get('/questionTypes', function (req: Request, res: Response, next: NextFunction) {
      new QuestionTypeRoute().questionTypes(req, res, next);
    })
  }

  public questionTypes(req: Request, res: Response, next: NextFunction) {
    super.sendJsonResponse(req, res, {
      question_types: [
        {
          id: '1',
          name: 'Subjective'
        }
      ]
    });
  }
}