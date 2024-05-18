'use client'

import { HOST } from "@/constants";
import { useEffect, useState } from "react";
import { EmployeeModel } from "../types/types";

export default function useGetSingleEmployee(id: string) {
  const [employee, setEmployee] = useState<EmployeeModel>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`${HOST}/employees/${id}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
  
        setEmployee(data);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching data: ', error);
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  return { employee, loadingEmployee: loading }
}