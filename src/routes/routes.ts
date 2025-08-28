import { Router } from "express";
import { exampleRoutes } from "./example.routes";

export const routes: Router = Router()

routes.use(exampleRoutes)