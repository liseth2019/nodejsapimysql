import { Router } from "express";



import { getEmployees,createEmployee,updateEmployee,deleteEmployee,getEmployee }
 from "../controllers/employees.js";


const router = new Router();

router.get('/employees', getEmployees)

router.get('/employees/:id',getEmployee)

router.post('/employees',createEmployee)


router.patch('/employees/:id',updateEmployee)


router.delete('/employees/:id',deleteEmployee)


export default router;