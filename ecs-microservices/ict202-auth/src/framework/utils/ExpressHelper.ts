import { Request, Response } from "express";
import { BaseRequest } from "core/entities/BaseRequest";

const expressCallback = (controller) => {

    return (req: Request, res: Response) => {
        let httpRequest: BaseRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            ip: req.ip,
            method: req.method,
            path: req.path,
            headers: {
                'Content-Type': req.get('Content-Type'),
                Referer: req.get('referer'),
                'User-Agent': req.get('User-Agent'),
                Authorization: req.headers.authorization
            }

        };
        
        controller(httpRequest)
            .then((httpResponse: Response) => {
                
                if (httpResponse.headers) {
                    res.set(httpResponse.headers)
                }

                res.status(httpResponse.status).json(httpResponse);
                res.end();
            })
            .catch((httpError) => {
                res.json(httpError);
                res.end();
            })


    }

}

export { expressCallback }