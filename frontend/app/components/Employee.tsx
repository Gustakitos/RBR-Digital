"use client";

import useGetEmployee from "../hooks/useGetEmployee";
import TableComponent from "./Table";

export default function Employee() {
  const { employees, loading } = useGetEmployee();

  return <>{loading ? <div>Carregando...</div> : <TableComponent employees={employees} />}</>;
}
