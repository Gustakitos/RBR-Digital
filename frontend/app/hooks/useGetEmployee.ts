"use client";

import { useEffect, useState } from "react";
import { EmployeeModel } from "../types/types";
import { HOST } from "@/constants";

export default function useGetEmployee() {
  const [employees, setEmployees] = useState<EmployeeModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(`${HOST}/employees`);
        const data = await response.json();

        setEmployees(data.employees);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching data: ', error);
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return { employees, loading }
}