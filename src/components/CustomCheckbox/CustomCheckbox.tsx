import { Checkbox, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React, { ChangeEvent } from "react";

type Props = {
  form: any; //TODO: Formik types,
  label: string | ReactJSXElement;
  size?: string;
  fontSize?: string;
  name: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CustomCheckbox: React.FC<Props> = ({
  form,
  label,
  size,
  fontSize,
  name,
  id,
  onChange,
}) => {
  return (
    <FormControl
      isInvalid={form && form.errors.acceptTerms && form.touched.acceptTerms}
    >
      <Checkbox
        colorScheme="orange"
        name={name}
        id={id}
        size={size || "sm"}
        fontSize={fontSize || "12px"}
        onChange={onChange}
      >
        {label}
      </Checkbox>
      <FormErrorMessage position="absolute">
        {form && form.errors[name]}
      </FormErrorMessage>
    </FormControl>
  );
};

export default CustomCheckbox;
