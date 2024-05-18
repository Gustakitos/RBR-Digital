import { Request, Response } from 'express';
import Employee from '../models/employee';
import mongoose from 'mongoose';

export const getEmployees = async (req: Request, res: Response): Promise<void> => {
  try {
    const employees = await Employee.find({});
    res.status(200).json({ employees });
  } catch (error) {
    res.status(500).json({ message: 'Employees not found' });
  }
};

export const getEmployeeById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: 'Invalid Employee ID' });
      return;
    }

    const employee = await Employee.findById(id);

    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error getting employee' });
  }
};

export const createEmployee = async (req: Request, res: Response): Promise<void> => {
  try {
    const { department, name, title, startDate } = req.body;

    const employee = new Employee({
      department,
      name,
      title,
      startDate
    });

    await employee.save();
    res.status(201).json({
      message: 'Employee created',
    });

  } catch (error) {
    res.status(500).json({ message: 'Error creating employee', error });
  }
};

export const updateEmployee = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const { department, name, title } = req.body;

    await Employee.findOneAndUpdate({ _id: id }, {
      name,
      department,
      title
    });
    res.status(200).json({
      message: 'Employee updated',
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating employee' });
  }
};

export const deleteEmployee = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    await Employee.findByIdAndDelete({ _id: id });
    res.status(200).json({
      message: `Employee ${id} deleted`,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting employee' });
  }
};