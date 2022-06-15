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
import { changeName } from "services/auth/changeProfileData";
import colors from "theme/base/colors";
import { ChangeUserNameValues } from "types/userPanel.types";
import { changeNameUser } from "utils/validation";

const ChangeName = () => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();
  const formik = useFormik<ChangeUserNameValues>({
    initialValues: {
      displayName: "",
    },
    enableReinitialize: true,
    validationSchema: changeNameUser,
    validateOnMount: true,
    validateOnChange: true,
    onSubmit: (values) => {
      setIsLoading(true);
      changeName(values)
        .then((response) => {
          setIsLoading(false);
          toast({
            title: "Hurra! Udało się zmienić nazwę użytkownika.",
            description:
              "Od teraz Twoja nazwa użytkownika będzie wyświetlana inczaje",
            duration: 3000,
            isClosable: true,
            status: "success",
          });
        })
        .catch((err) => {
          setIsLoading(false);
          toast({
            title: "Nie udało się zmienić nazwy użytkownika",
            description: "Coś poszło nie tak...... Spróbuj ponownie",
            duration: 3000,
            isClosable: true,
            status: "error",
          });
          throw new Error(err);
        });
    },
  });
  return (
    <Box boxShadow="base" mt="30px" maxW="100%">
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Zmień nazwę użytkownika
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>

          <AccordionPanel>
            <Box mt="10px">
              <FormikProvider value={formik}>
                <Field name="displayName">
                  {({ field, form }: any) => (
                    <CustomInput
                      id="displayName"
                      name="displayName"
                      type="text"
                      label="Nowa nazwa"
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
                  Zmień Nazwę
                </Button>
              </FormikProvider>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default ChangeName;
