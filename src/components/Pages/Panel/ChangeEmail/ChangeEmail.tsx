import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Input,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import CustomInput from "components/Input/Input";
import { error } from "console";
import { Field, FormikProvider, useFormik } from "formik";
import React, { useState } from "react";
import { changeEmail } from "services/auth/changeProfileData";
import colors from "theme/base/colors";
import { ChangeEmailValues } from "types/userPanel.types";
import { changeEmailSchema } from "utils/validation";

const ChangeEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const formik = useFormik<ChangeEmailValues>({
    initialValues: {
      email: "",
    },
    enableReinitialize: true,
    validationSchema: changeEmailSchema,
    validateOnMount: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      setIsLoading(true);
      changeEmail(values)
        .then((response) => {
          setIsLoading(false);
          toast({
            title: "Udało się zmienić email",
            description: "Pamiętaj aby logować się przy uyciu nowego emailu",
            duration: 3000,
            isClosable: true,
            status: "success",
          });
        })
        .catch((err) => {
          setIsLoading(false);
          toast({
            title: "Nie udało się zmienić email",
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
                Zmień Email
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>

          <AccordionPanel>
            <Box mt="10px">
              <FormikProvider value={formik}>
                <Field name="email">
                  {({ field, form }: any) => (
                    <CustomInput
                      id="email"
                      name="email"
                      type="text"
                      label="Nowy e-mail"
                      form={form}
                      field={field}
                      variant="floatingDarkBg"
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
                  Zmień Email
                </Button>
              </FormikProvider>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default ChangeEmail;
