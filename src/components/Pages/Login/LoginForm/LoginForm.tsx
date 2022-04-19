import {
  Container,
  useColorModeValue,
  Box,
  VStack,
  Button,
  Link,
  Text,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { Field, FormikProvider, useFormik } from "formik";

import colors from "theme/base/colors";
import { LoginValues } from "types/login.types";
import { signInSchema } from "utils/validation";
import CustomInput from "components/Input/Input";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import LoginImage from "components/Pages/Login/LoginImage/LoginImage";
import { signIn } from "services/auth/login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const formik = useFormik<LoginValues>({
    initialValues: {
      email: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: signInSchema,
    validateOnMount: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      setIsLoading(true);
      signIn(values)
        .then((res) => {
          setIsLoading(false);
          toast({
            title: "Zostałeś Zalogowany!",
            description:
              "Od teraz moesz w pełni korzystać z funkcjonalności aplikacji",
            duration: 3000,
            status: "success",
            isClosable: true,
          });
          navigate("/");
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
  });
  return (
    <Container
      maxW="lg"
      height="100vh"
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <Box mt="-150px">
        <Box mb="50px">
          <LoginImage />
        </Box>
        <Heading textAlign="center" mb="30px">
          Zaloguj się do{" "}
          <Text
            as="span"
            color={useColorModeValue(colors.primary, colors.dark.primary)}
          >
            Snoozly
          </Text>
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
          <div className="login-page__reminder">
            <Link
              fontSize="14px"
              color={useColorModeValue(colors.primary, colors.dark.primary)}
            >
              Nie pamiętam hasła
            </Link>
          </div>
          <Button
            variant="solid"
            size="md"
            width="100%"
            isLoading={isLoading}
            onClick={() => formik.submitForm()}
            mt={30}
          >
            Zaloguj się
          </Button>
        </FormikProvider>
        <Text mt="30px">
          Nie masz jeszcze konta?{" "}
          <Link
            href="register"
            color={useColorModeValue(colors.primary, colors.dark.primary)}
          >
            Zarejestruj się
          </Link>
        </Text>
      </Box>
    </Container>
  );
};

export default LoginForm;
