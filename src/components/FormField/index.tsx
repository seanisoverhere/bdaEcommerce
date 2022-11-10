import React from "react";
import {
  TextField,
  InputText,
  StyledInput,
  AlignError,
  ErrorSign,
  ErrorText,
} from "./styles";
import { UseFormRegister, FieldValues, FieldErrorsImpl } from "react-hook-form";

type FormFieldProps = {
  inputText: string;
  isRequired?: boolean;
  name: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl<{ [x: string]: any }>>;
};

const FormField = ({
  inputText,
  isRequired,
  name,
  type,
  register,
  errors,
}: FormFieldProps) => (
  <>
    <TextField>
      <InputText>{inputText}</InputText>
      {!isRequired && <InputText>Optional</InputText>}
    </TextField>
    <StyledInput
      {...register(name, { required: isRequired })}
      type={type}
      $hasError={!!errors[name]}
    />
    {errors[name] && (
      <AlignError>
        <ErrorSign src="/error.svg" alt="error" />
        <ErrorText>This field is required.</ErrorText>
      </AlignError>
    )}
  </>
);

export default FormField;
