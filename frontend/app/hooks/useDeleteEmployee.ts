import { useCallback, useState } from "react";
import { HOST } from "@/constants";

export default function useDeleteEmployee() {
  const [loading, setLoading] = useState(false);

  const deleteEmployee = useCallback(async (id: string) => {
    try {
      setLoading(true);
      const response = await fetch(`${HOST}/employees/${id}`, {
        method: 'DELETE'
      });
      setLoading(false);

      return response;
    } catch (error) {
      console.log('Error deleting: ', error);
      setLoading(false);
    }
  }, []);

  return { deleteEmployee, loadingDelete: loading };
}
