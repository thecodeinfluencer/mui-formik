import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useFormikContext } from "formik";
import { useEffect } from "react";

type FormikRadioProps = {
  options: { value: string; label: string }[];
  name: string;
  label: string;
} & Omit<React.ComponentProps<typeof RadioGroup>, "name">;

export default function FormikRadio({
  options,
  name,
  label,
  ...other
}: FormikRadioProps): JSX.Element {
  const { errors, setFieldTouched, touched, setFieldValue, values } =
    useFormikContext<{ [key: string]: string }>();

  useEffect(() => {
    setFieldTouched(name, false);
  }, [name, setFieldTouched]);

  const handleChange = (value: string) => {
    setFieldValue(name, value);
    setFieldTouched(name, true);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label || name}</FormLabel>
      <RadioGroup
        name={name}
        value={values[name] || ""}
        onChange={e => handleChange(e.target.value)}
        {...other}
      >
        {options.map(option => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
      {touched[name] && errors[name] && <div>{errors[name]}</div>}
    </FormControl>
  );
}
