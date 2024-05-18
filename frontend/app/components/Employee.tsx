"use client";

import useDeleteEmployee from "../hooks/useDeleteEmployee";
import useGetEmployees from "../hooks/useGetEmployees";
import TableComponent from "./Table";

export default function Employee() {
  const { employees, setEmployees, loading } = useGetEmployees();
  const { deleteEmployee, loadingDelete } = useDeleteEmployee();

  const handleDelete = async (id: string) => {
    try {
      const response = await deleteEmployee(id);

      if (response?.ok) {
        setEmployees((prevValue) => prevValue.filter((emp) => emp._id !== id));
      }
    } catch (error) {
      console.error("Failed to delete the employee:", error);
    }
  };

  return (
    <>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <TableComponent
          employees={employees}
          deleteEmployee={handleDelete}
          loadingDelete={loadingDelete}
        />
      )}
    </>
  );
}
