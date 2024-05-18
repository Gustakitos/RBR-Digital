"use client";

import useGetEmployees from "../hooks/useGetEmployees";
import TableComponent from "./Table";

export default function Employee() {
  const { employees, loading } = useGetEmployees();

  return <>{loading ? <div>Carregando...</div> : <TableComponent employees={employees} />}</>;
}
