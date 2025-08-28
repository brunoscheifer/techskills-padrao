import { Router } from "express";
import { ExampleController } from "../controllers/example.controllers";

export const exampleRoutes: Router = Router();

const exampleController = new ExampleController();

exampleRoutes.get('/hello-world', exampleController.helloWorld);
exampleRoutes.get('/teste-error', exampleController.testError)