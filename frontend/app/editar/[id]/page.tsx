'use client'

import Form from "@/app/components/Form";
import WithSubnavigation from "@/app/components/Navbar";
import useGetSingleEmployee from "@/app/hooks/useGetSingleEmployee";
import useUpdateEmployee from "@/app/hooks/useUpdateEmployee";
import { EmployeeModel } from "@/app/types/types";
import { useRouter } from "next/navigation";

export default function EditEmployee({ params }: { params: { id: string } }) {
  const { loadingEmployee, employee } = useGetSingleEmployee(params.id);
  const { loadingUpdate, updateEmployee } = useUpdateEmployee(params.id);
  const router = useRouter();


  const handleUpdate = async (formData: EmployeeModel) => {
    const response = await updateEmployee(formData);

    if (response?.ok) {
      router.push('/');
    }
  };

  return (
    <div>
      <WithSubnavigation />
      {loadingEmployee ? (
        <div>Loading...</div>
      ) : (
        <Form
          initialState={{
            name: employee?.name || '',
            department: employee?.department || '',
            title: employee?.title || ''
          }}
          onSubmit={handleUpdate}
          loadingSubmit={loadingUpdate}
        />
      )}
    </div>
  );
}
