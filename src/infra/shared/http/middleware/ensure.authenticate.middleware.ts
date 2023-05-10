import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../../../errors/custom.error";
import { JWTToken } from "../../token/jwt.token";

export const ensureAuthenticate = (request: Request, response: Response, next: NextFunction) => {
    const headerAuth = request.headers.authorization;

    if (!headerAuth) {
        return response.status(401).json({
            'error': 'Token is missing'
        });
    }

    const [, token] = headerAuth.split(' ');

    if (!token) {
        return response.status(401).json({
            'error': 'Token is missing'
        });
    }

    const verifiedToken = new JWTToken().validate(token);
    if (verifiedToken) {
        return next();
    }

    return response.status(401).json({
        error: 'Token Invalid'
    });
}