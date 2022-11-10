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
  input: string;
  register: UseFormRegister<FieldValues>;
  setValue: (value: string) => void;
  onFocus: Function;
  errors: Partial<FieldErrorsImpl<{ [x: string]: any }>>;
};

const FormField = ({
  inputText,
  isRequired,
  name,
  type,
  input,
  setValue,
  onFocus,
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
      value={input}
      $hasError={!!errors[name]}
      onChange={(e) => setValue(e.target.value)}
      onFocus={(e) => onFocus(e.target.name)}
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
