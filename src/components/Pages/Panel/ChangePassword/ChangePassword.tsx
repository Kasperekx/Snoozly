import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import CustomInput from "components/Input/Input";

import { Field, FormikProvider, useFormik } from "formik";
import React, { useState } from "react";
import { changePassword } from "services/auth/changeProfileData";
import colors from "theme/base/colors";
import { ChangePasswordValues } from "types/userPanel.types";
import { changePasswordSchema } from "utils/validation";

const ChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const formik = useFormik<ChangePasswordValues>({
    initialValues: {
      password: "",
    },
    enableReinitialize: true,
    validationSchema: changePasswordSchema,
    validateOnMount: true,
    validateOnChange: true,
    onSubmit: (values) => {
      setIsLoading(true);
      changePassword(values)
        .then((response) => {
          setIsLoading(false);
          toast({
            title: "Udało się zmienić hasło",
            description: "Pamiętaj aby zalogować się przy użyciu nowego hasło",
            duration: 3000,
            isClosable: true,
            status: "success",
          });
        })
        .catch((err) => {
          setIsLoading(false);
          toast({
            title: "Nie udało się zmienić hasła",
            description: "Coś poszło nie tak......",
            duration: 3000,
            isClosable: true,
            status: "error",
          });
          throw new Error(err);
        });
    },
  });
  return (
    <Box boxShadow="base" mt="30px" maxW="600px">
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Zmień Hasło
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>

          <AccordionPanel>
            <Box mt="10px">
              <FormikProvider value={formik}>
                <Field name="password">
                  {({ field, form }: any) => (
                    <CustomInput
                      id="password"
                      name="password"
                      type="password"
                      label="Nowe hasło"
                      form={form}
                      field={field}
                      showButton
                    />
                  )}
                </Field>
                <Field name="repeatPassword">
                  {({ field, form }: any) => (
                    <CustomInput
                      id="repeatPassword"
                      name="repeatPassword"
                      type="password"
                      label="Powtórz nowe hasło"
                      form={form}
                      field={field}
                      showButton
                    />
                  )}
                </Field>

                <Button
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize="md"
                  isLoading={isLoading}
                  fontWeight="600"
                  color={"white"}
                  bg={useColorModeValue(colors.orange[400], colors.orange[500])}
                  onClick={() => formik.submitForm()}
                  _hover={{
                    bg: "orange.300",
                  }}
                >
                  Zmień Hasło
                </Button>
              </FormikProvider>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default ChangePassword;
