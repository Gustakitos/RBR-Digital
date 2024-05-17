import { Schema, model } from 'mongoose';

interface EmployeeType {
  name: string;
  title: string;
  department: string;
}

const employeeSchema = new Schema<EmployeeType>({
  name: { type: String, required: true },
  title: { type: String, required: true },
  department: { type: String, required: true },
});

const Employee = model<EmployeeType>('Employee', employeeSchema);

export default Employee;
