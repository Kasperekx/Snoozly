import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import classNames from "classnames";

import React, { ReactNode, useState } from "react";
import colors from "theme/base/colors";

type Props = {
  field?: any; //TODO: Formik types
  form?: any; // TODO: Formik types
  type: string;
  name: string;
  id: string;
  label: string;
  prefix?: string;
  showButton?: boolean;
  tooltipText?: string;
  variant?: string;
  icon?: ReactNode;
  className?: string;
};

const CustomInput: React.FC<Props> = ({
  field,
  type,
  name,
  id,
  label,
  form,
  prefix,
  showButton,
  tooltipText,
  variant,
  icon,
  className,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { colorMode } = useColorMode();
  const grayText = useColorModeValue(colors.textGray, colors.dark.textGray);
  return (
    <div className={classNames("input-group", className)}>
      <FormControl
        variant={variant || "floating"}
        isInvalid={form && form.errors[name] && form.touched[name]}
      >
        <InputGroup size="md">
          {prefix && <InputLeftAddon fontSize="14px">{prefix}</InputLeftAddon>}
          {icon && (
            <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
          )}
          <Input
            {...field}
            id={id}
            pl={icon ? "45px" : "15px"}
            pr={showButton ? "75px" : "15px"}
            name={name}
            placeholder=" "
            type={showPassword ? "text" : type}
          />
          <FormLabel htmlFor="password">{label}</FormLabel>
          {showButton && (
            <InputRightElement width="60px">
              <Button
                marginRight="15px"
                fontSize="12px"
                size="xs"
                colorScheme="gray"
                color={colorMode === "dark" ? colors.dark.text : colors.text}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Ukryj" : "Pokaż"}
              </Button>
            </InputRightElement>
          )}
        </InputGroup>
        <FormErrorMessage>{form && form.errors[name]}</FormErrorMessage>
      </FormControl>
      {tooltipText && (
        <div className="input-group__tooltip">
          <Tooltip label={tooltipText} fontSize="11px">
            <InfoOutlineIcon w="15px" h="15px" />
          </Tooltip>
        </div>
      )}
      {tooltipText && (
        <Text
          className="input-group__tooltip-mobile"
          fontSize="12px"
          color={grayText}
        >
          {tooltipText}
        </Text>
      )}
    </div>
  );
};

export default CustomInput;
