import { Router } from "express";
import * as EmployeeController from "../controllers/EmployeeController";

const router = Router();

router.get('/', EmployeeController.getEmployees);

router.get('/:id', EmployeeController.getEmployeeById);

router.post('/', EmployeeController.createEmployee);

router.patch('/:id', EmployeeController.updateEmployee);

router.delete('/:id', EmployeeController.deleteEmployee);

export default router;