import { UseToastOptions } from "@chakra-ui/react";

export const validateForm: UseToastOptions = {
  title: "Ups... coś poszło nie tak",
  description:
    "Prawdopodobnie źle uzupełniłeś formularz. Zweryfikuj ponownie wprowadzone dane. Jeżeli błąd się będzie dalej powtarzał prosimy o bezpośredni kontakt.",
  status: "error",
  duration: 3000,
  isClosable: true,
};
