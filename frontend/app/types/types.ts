export interface EmployeeModel {
  _id?: string;
  name: string;
  title: string;
  department: string;
  startDate: string;
}

export interface SortConfig {
  key: keyof EmployeeModel | null;
  direction: "asc" | "desc";
}