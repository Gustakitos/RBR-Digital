import { Schema, model } from 'mongoose';

interface Employee {
  name: string;
  title: string;
  department: string;
}

const employeeSchema = new Schema<Employee>({
  name: { type: String, required: true },
  title: { type: String, required: true },
  department: { type: String, required: true },
});

const EmployeeModel = model<Employee>('Employee', employeeSchema);

export default EmployeeModel;
