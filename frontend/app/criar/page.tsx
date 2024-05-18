"use client"

import { useRouter } from "next/navigation";
import Form from "../components/Form";
import WithSubnavigation from "../components/Navbar";
import useCreateEmployee from "../hooks/useCreateEmployee";
import { EmployeeModel } from "../types/types";

export default function CreateEmployee() {
  const { createEmployee, loadingCreate } = useCreateEmployee();
  const router = useRouter();

  const handleCreate = async (formData: EmployeeModel) => {
    const response = await createEmployee(formData);

    if (response?.ok) {
      router.push('/');
    }
  };

  return (
    <>
      <WithSubnavigation />
      <Form onSubmit={handleCreate} loadingSubmit={loadingCreate} />
    </>
  );
}
