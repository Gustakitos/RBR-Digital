import { useCallback, useState } from "react";
import { EmployeeModel } from "../types/types";
import { HOST } from "@/constants";

export default function useCreateEmployee() {
  const [loading, setLoading] = useState(false);

  const createEmployee = useCallback(async (formData: EmployeeModel) => {
    try {
      setLoading(true);
      const response = await fetch(`${HOST}/employees`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      setLoading(false);

      return response;
    } catch (error) {
      console.log('Error creating: ', error);
      setLoading(false);
    }
  }, []);

  return { createEmployee, loadingCreate: loading };
}
