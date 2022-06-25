import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import CustomCheckbox from "components/CustomCheckbox/CustomCheckbox";
import CustomInput from "components/Input/Input";
import { Field, FormikProvider, useFormik } from "formik";
import React, { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { signUp } from "services/auth/register";
import colors from "theme/base/colors";
import { RegisterValues } from "types/register.types";
import { signUpSchema } from "utils/validation";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();
  const toast = useToast();
  const formik = useFormik<RegisterValues>({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      acceptTerms: false,
    },

    enableReinitialize: true,
    validationSchema: signUpSchema,
    validateOnMount: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      setIsLoading(true);
      signUp(values)
        .then((res) => {
          setIsLoading(false);
          toast({
            title: "Hurra! Udało się utworzyć konto.",
            description:
              "Konto zostało utworzone, teraz możesz się zalogować na swoje konto",
            duration: 3000,
            status: "success",
            isClosable: true,
          });
          navigate("/login");
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err.message);
          if (err.code === "auth/email-already-in-use") {
            toast({
              title: "Podany e-mail jest już użyty",
              description: "Użyj innego adresu email do rejestracji",
              duration: 3000,
              status: "error",
              isClosable: true,
            });
            return;
          } else {
            toast({
              title: "Coś poszło nie tak!",
              description:
                "Prawdopodobnie coś nie działa i jest to po naszej stronie. Postaramy uwikłać się jak najszybciej z problemem :)",
              duration: 3000,
              status: "error",
              isClosable: true,
            });
          }
        });
    },
  });
  return (
    <Container
      maxW="lg"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box mt="0px">
        <Heading mb="30px">
          Dołącz do{" "}
          <Text
            as="span"
            color={useColorModeValue(colors.primary, colors.dark)}
          >
            Snoozly
          </Text>{" "}
          już teraz!
        </Heading>
        <VStack>
          <Button
            colorScheme="gray"
            variant="outline"
            background="transparent"
            width="100%"
            size="md"
            fontWeight="bold"
            leftIcon={<FaFacebookF />}
          >
            Kontynuuj przez portal Facebook
          </Button>
          <Button
            colorScheme="gray"
            variant="outline"
            background="transparent"
            width="100%"
            size="md"
            fontWeight="bold"
            leftIcon={<FaGoogle />}
          >
            Kontynuuj przez portal Google
          </Button>
        </VStack>
        <Text fontWeight="bold" textAlign="center" my="35px">
          Lub E-mail
        </Text>
        <FormikProvider value={formik}>
          <Field name="fullname">
            {({ field, form }: any) => (
              <CustomInput
                id="fullname"
                name="fullname"
                type="text"
                label="Imię i Nazwisko"
                form={form}
                field={field}
                variant="floatingDarkBg"
              />
            )}
          </Field>
          <Field name="email">
            {({ field, form }: any) => (
              <CustomInput
                id="email"
                name="email"
                type="text"
                label="Adres e-mail"
                form={form}
                field={field}
                variant="floatingDarkBg"
              />
            )}
          </Field>
          <Field name="password">
            {({ field, form }: any) => (
              <CustomInput
                id="password"
                name="password"
                type="password"
                label="Hasło"
                form={form}
                field={field}
                showButton
                variant="floatingDarkBg"
              />
            )}
          </Field>
          <Field name="repeatPassword">
            {({ field, form }: any) => (
              <CustomInput
                id="repeatPassword"
                name="repeatPassword"
                type="password"
                label="Powtórz Hasło"
                form={form}
                field={field}
                showButton
                variant="floatingDarkBg"
              />
            )}
          </Field>

          <Field name="acceptTerms">
            {({ form }: any) => (
              <CustomCheckbox
                name="acceptTerms"
                id="acceptTerms"
                form={form}
                onChange={(e) =>
                  form.setFieldValue("acceptTerms", e.target.checked)
                }
                label={<span>Akceptuje Warunki</span>}
              />
            )}
          </Field>
          <Button
            variant="solid"
            size="md"
            width="100%"
            isLoading={isLoading}
            onClick={() => formik.submitForm()}
            mt={30}
          >
            Zarejestruj się
          </Button>
        </FormikProvider>
        <Text mt="30px" fontSize="14px">
          Wróc do{" "}
          <Link
            color={useColorModeValue(colors.primary, colors.secondary)}
            to="/"
          >
            Snoozly
          </Link>
        </Text>
      </Box>
    </Container>
  );
};

export default RegisterForm;
