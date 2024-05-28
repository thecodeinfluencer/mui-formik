# mui-formik

A package that simplifies usage of Formik forms om @mui/material. I supports Yup!

## Installation

- Run `npx jsr add @thecodeinfluencer/mui-formik`

## Usage

### Basic usage

```javascript
<FormikForm
  initialValues={{ test: "" }}
  onSubmit={values => console.log(values)}
>
  <FormikInput name="test" label="Test" />
  <FormikButton>Submit</FormikButton>
</FormikForm>
```

### Usage with `Yup`

```javascript
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  test: Yup.string().required().label("Test"),
});
```

then

```javascript
<FormikForm
  initialValues={{ test: "" }}
  onSubmit={values => console.log(values)}
  validationSchema={validationSchema}
>
  <FormikInput name="test" label="Test" />
  <FormikButton>Submit</FormikButton>
</FormikForm>
```
