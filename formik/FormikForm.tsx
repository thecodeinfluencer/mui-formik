import { Form, Formik } from "formik";
import React from "react";

type FormikFormProps = {
  initialValues: any;
  onSubmit: any;
  validationSchema?: any;
  enterToSubmit?: boolean;
  children: any;
};

export default function FormikForm({
  initialValues,
  onSubmit,
  validationSchema,
  enterToSubmit,
  children,
}: Readonly<FormikFormProps>) {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const form = event.currentTarget.closest("form");
      if (form) {
        form.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true })
        );
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema || undefined}
    >
      {() => (
        <Form onKeyDown={enterToSubmit ? handleKeyDown : undefined}>
          {children}
        </Form>
      )}
    </Formik>
  );
}
