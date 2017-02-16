import { NextFunction, Request, Response } from "express";

/**
 * Constructor
 *
 * @class BaseRoute
 */
export class BaseRoute {

  /**
   * Sends Json response to the client
   *
   * @class BaseRoute
   * @method sendJsonResponse
   * @param req
   * @param res
   * @param data
   * @return void
   */
  public sendJsonResponse(req: Request, res: Response, data: any): void {
    res.send(data);
  }
}