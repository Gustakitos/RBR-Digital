"use client";

import { useEffect, useState } from "react";
import useDeleteEmployee from "../hooks/useDeleteEmployee";
import useGetEmployees from "../hooks/useGetEmployees";
import TableComponent from "./Table";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { EmployeeModel, SortConfig } from "../types/types";



export default function Employee() {
  const { employees, setEmployees, loading } = useGetEmployees();
  const { deleteEmployee, loadingDelete } = useDeleteEmployee();
  const [searchText, setSearchText] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: "asc",
  });

  useEffect(() => {
    setFilteredEmployees(employees);
  }, [employees]);

  const filterEmployees = (model: EmployeeModel[], searchParam: string) => {
    const lowercasedQuery = searchParam.toLowerCase();
    return model.filter(
      (employee) =>
        employee.name.toLowerCase().includes(lowercasedQuery) ||
        employee.department.toLowerCase().includes(lowercasedQuery) ||
        employee.title.toLowerCase().includes(lowercasedQuery) ||
        format(employee.startDate, "dd/MM/yyyy", {
          locale: ptBR,
        }).includes(lowercasedQuery)
    );
  };

  const sortEmployees = (
    model: EmployeeModel[],
    sortConfigParam: SortConfig
  ) => {
    const { key, direction } = sortConfigParam;
    if (key) {
      return [...model].sort((a, b) => {
        let first = a[key] ?? "";
        let second = b[key] ?? "";

        first = typeof first === "string" ? first.toLowerCase() : first;
        second = typeof second === "string" ? second.toLowerCase() : second;

        if (first < second) return direction === "asc" ? -1 : 1;
        if (first > second) return direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return model;
  };

  useEffect(() => {
    const filtered = filterEmployees(employees, searchText);
    const sorted = sortEmployees(filtered, sortConfig);
    setFilteredEmployees(sorted);
  }, [employees, searchText, sortConfig]);

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

  const handleSort = (key: keyof EmployeeModel) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "asc"
          ? "desc"
          : "asc",
    });
  };

  return (
    <>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <TableComponent
          employees={filteredEmployees}
          deleteEmployee={handleDelete}
          loadingDelete={loadingDelete}
          searchText={searchText}
          setSearchText={setSearchText}
          sortConfig={sortConfig}
          handleSort={handleSort}
        />
      )}
    </>
  );
}
