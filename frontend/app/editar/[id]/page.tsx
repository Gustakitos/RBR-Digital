'use client'

import Form from "@/app/components/Form";
import WithSubnavigation from "@/app/components/Navbar";
import useGetSingleEmployee from "@/app/hooks/useGetSingleEmployee";
import useUpdateEmployee from "@/app/hooks/useUpdateEmployee";

export default function EditEmployee({ params }: { params: { id: string } }) {
  const { loadingEmployee, employee } = useGetSingleEmployee(params.id);

  const { loadingUpdate, updateEmployee } = useUpdateEmployee(params.id);

  return (
    <div>
      <WithSubnavigation />
      {loadingEmployee ? (
        <div>Loading...</div>
      ) : (
        <Form
          initialState={{
            name: employee?.name,
            department: employee?.department,
            title: employee?.title
          }}
          onSubmit={updateEmployee}
          loadingSubmit={loadingUpdate}
        />
      )}
    </div>
  );
}
