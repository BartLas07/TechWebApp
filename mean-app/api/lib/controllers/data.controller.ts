import { date } from 'joi';
import Controller from '../interfaces/controller.interface';
import { Request, Response, NextFunction, Router } from 'express';

let testArr = [4,5,6,3,5,3,7,5,13,5,6,4,3,6,3,6];

class PostController implements Controller {
   public path = '/api/post';
   public router = Router();

   constructor() {
       this.initializeRoutes();
   }

   private initializeRoutes() {
       this.router.get(`/api/posts`, this.getAll);
       this.router.post(`${this.path}`, this.addData);
       this.router.delete(`/api/posts`, this.deleteAll);
       this.router.get(`${this.path}/:id`, this.getById);
       this.router.post(`${this.path}/:num`, this.postNum);
       this.router.delete(`${this.path}/:id`, this.deleteById);
   }

   private getAll = async (request: Request, response: Response, next: NextFunction) => {
    const data = request.body;
 
    response.status(200).json(testArr);

    };

   private addData = async(request:Request, response:Response,next:NextFunction)=>{
    const {elem} = request.body;
    const {id} = request.params;

    testArr.push(elem);

    response.status(200).json(testArr);

    next();

   }

   private deleteAll = async(request:Request, response:Response,next:NextFunction)=>{
    const {elem} = request.body;
    const {id} = request.params;

    testArr.length=0;

    response.status(200).json(testArr);

    next();

   }

   private getById = async(request:Request, response:Response,next:NextFunction)=>{
    const {elem} = request.body;
    const {id} = request.params;

   

    response.status(200).json(testArr[Number(elem)]);

    next();

   }

   private deleteById = async(request:Request, response:Response,next:NextFunction)=>{
    const {elem} = request.body;
    const {id} = request.params;

    testArr.splice(Number(elem),1);

    response.status(200).json(testArr);

    next();

   }

   private postNum = async(request:Request, response:Response,next:NextFunction)=>{
    const {elem} = request.body;
    const {id} = request.params;

    

    response.status(200).json(testArr.slice(0,Number(elem)-1));

    next();

   }
    
}

export default PostController;