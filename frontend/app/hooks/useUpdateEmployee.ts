import { useCallback, useState } from "react";
import { EmployeeModel } from "../types/types";
import { HOST } from "@/constants";

export default function useUpdateEmployee(id: string) {
  const [loading, setLoading] = useState(false);

  const updateEmployee= useCallback(async (formData: EmployeeModel)  => {
    try {
      setLoading(true);
      const response = await fetch(`${HOST}/employees/${id}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      setLoading(false);

      return response
    } catch (error) {
      console.log('Error updating: ', error);
      setLoading(false);
    }
  }, [id]);

  return { updateEmployee, loadingUpdate: loading };
}
