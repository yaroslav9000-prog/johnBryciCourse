import { NextFunction } from 'express';
//getting the methods we need
import express , {Request, Response} from 'express';
import { bikeInfo, carInfo, handicapInfo, offroadInfo, recallInfo, shamaiInfo, truckInfo } from '../logic/TransportLogic';

const carRouter = express.Router();

carRouter.get(
    "/car/:id",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{        
        response.status(200).json(await carInfo(request.params.id));
    }
)

carRouter.get(
    "/bike/:id",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{        
        response.status(200).json(await bikeInfo(request.params.id));
    }
)

carRouter.get(
    "/truck/:id",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{        
        response.status(200).json(await truckInfo(request.params.id));
    }
)
carRouter.get(
    "/handicap/:id",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{        
        response.status(200).json(await handicapInfo(request.params.id));
    }
)
carRouter.get(
    "/offroad/:id",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{        
        response.status(200).json(await offroadInfo(request.params.id));
    }
)
carRouter.get(
    "/recall/:id",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{        
        response.status(200).json( await recallInfo(request.params.id));
    }
)
carRouter.get(
    "/shamai/:id",
    async(request: Request, response: Response, nextFunction: NextFunction)=>{
        response.status(200).json(await shamaiInfo(request.params.id));
    }
)

export default carRouter;