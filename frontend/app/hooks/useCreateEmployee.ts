import { useCallback } from "react";
import { EmployeeModel } from "../types/types";
import { HOST } from "@/constants";

export default function useCreateEmployee() {

  const createEmployee = useCallback(async (formData: EmployeeModel) => {
    try {
      await fetch(`${HOST}/employees`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
    } catch (error) {
      console.log('Error creating: ', error);
    }
  }, []);

  return { createEmployee };
}
