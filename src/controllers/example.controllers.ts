import { Request, Response } from "express";

export class ExampleController {
    async helloWorld(req: Request, res: Response) {
        return res.send('Hello Typescript')
    }
}

