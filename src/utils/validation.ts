import * as Yup from "yup";

export const fullname = {
  fullname: Yup.string()
    .min(1, "Podaj swoje imię i nazwisko")
    .max(80, "Imię i Nazwisko jest za długie")
    .required("Podaj swoje imię i nazwisko"),
};

export const email = {
  email: Yup.string()
    .email("Podaj prawidłowy adres e-mail")
    .required("Podaj swój email"),
};

export const password = {
  password: Yup.string()
    .required("Ustal swoje hasło")
    .min(8, "Minimalna długość hasla to 8 znaków")
    .matches(/[a-z]/, "Hasło musi składać się conajmniej z jednej małej litery")
    .matches(/[A-Z]/, "Hasło musi składać się conajmniej z jednej duzej litery")
    .matches(/[0-9]/, "Hasło musi składać się conajmniej z jednej cyfry"),
};

export const repeatPassword = {
  repeatPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Hasła nie są identyczne"
  ),
};

export const displayName = {
  displayName: Yup.string()
  .min(1, "Podaj nową nazwę użytkownika")
  .max(20, "Nazwa użytkownika jest za długa")
  .required("Podaj nową nazwę użytkownika")
}

export const terms = {
  acceptTerms: Yup.bool().oneOf(
    [true],
    "Zgoda na przetwarzanie danych jest wymagana"
  ),
};

export const signUpSchema = Yup.object().shape({
  ...fullname,
  ...email,
  ...password,
  ...repeatPassword,
  ...terms,
});

export const signInSchema = Yup.object().shape({
  ...email,
  ...password,
});

export const changeEmailSchema = Yup.object().shape({
  ...email,
});

export const changeNameUser = Yup.object().shape({
  ...displayName
})

export const changePasswordSchema = Yup.object().shape({
  ...password,
  ...repeatPassword,
});
