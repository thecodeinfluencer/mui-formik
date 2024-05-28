import { LoadingButton } from "@mui/lab";
import { useFormikContext } from "formik";
import React from "react";

type FormikButtonProps = {
  children: any;
  disableIfDirty?: boolean;
} & Omit<React.ComponentProps<typeof LoadingButton>, "children">;

export default function FormikButton({
  children,
  disableIfDirty,
  ...other
}: FormikButtonProps) {
  const formikContext = useFormikContext();

  return (
    <LoadingButton
      disabled={
        disableIfDirty ? !formikContext.isValid || !formikContext.dirty : false
      }
      sx={{ my: 0.5 }}
      onClick={() => formikContext.handleSubmit()}
      {...other}
    >
      {children}
    </LoadingButton>
  );
}
