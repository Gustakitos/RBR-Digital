"use client"

import Form from "../components/Form";
import WithSubnavigation from "../components/Navbar";
import useCreateEmployee from "../hooks/useCreateEmployee";

export default function CreateEmployee() {
  const { createEmployee } = useCreateEmployee();

  return (
    <>
      <WithSubnavigation />
      <Form onSubmit={createEmployee} />
    </>
  );
}
