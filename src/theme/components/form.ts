import colors from "theme/base/colors";
const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
  opacity: 1,
};
const activeLabelWithIconStyles = {
  transform: "scale(0.85) translate(-15px, -24px)",
  opacity: 1,
};
const Form = {
  variants: {
    floating: (props: any) => ({
      container: {
        _focusWithin: {
          label: {
            ...activeLabelStyles,
          },
        },
        "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
          {
            ...activeLabelStyles,
          },
        label: {
          top: 0,
          left: 0,
          zIndex: 2,
          position: "absolute",
          backgroundColor:
            props.colorMode === "dark" ? colors.dark.grayBg : colors.bg,
          pointerEvents: "none",
          mx: 3,
          px: 1,
          my: 2,
          transformOrigin: "left top",
          opacity: 0.6,
        },
      },
    }),
    floatingWithPrefix: (props: any) => ({
      container: {
        _focusWithin: {
          label: {
            ...activeLabelStyles,
          },
        },
        "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
          {
            ...activeLabelStyles,
          },
        label: {
          top: 0,
          left: "60px",
          zIndex: 2,
          position: "absolute",
          backgroundColor:
            props.colorMode === "dark" ? colors.dark.grayBg : colors.bg,
          pointerEvents: "none",
          mx: 3,
          px: 1,
          my: 2,
          transformOrigin: "left top",
          opacity: 0.6,
        },
      },
    }),
    floatingWithIcon: (props: any) => ({
      container: {
        _focusWithin: {
          label: {
            ...activeLabelWithIconStyles,
          },
        },
        "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
          {
            ...activeLabelWithIconStyles,
          },
        label: {
          top: 0,
          left: "30px",
          zIndex: 2,
          position: "absolute",
          backgroundColor:
            props.colorMode === "dark" ? colors.dark.grayBg : colors.bg,
          pointerEvents: "none",
          mx: 3,
          px: 1,
          my: 2,
          transformOrigin: "left top",
          opacity: 0.6,
        },
      },
    }),
    floatingDarkBg: (props: any) => ({
      container: {
        _focusWithin: {
          label: {
            ...activeLabelStyles,
          },
        },
        "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
          {
            ...activeLabelStyles,
          },
        label: {
          top: 0,
          left: 0,
          zIndex: 2,
          position: "absolute",
          backgroundColor: props.colorMode === "dark" ? "gray.800" : colors.bg,
          pointerEvents: "none",
          mx: 3,
          px: 1,
          my: 2,
          transformOrigin: "left top",
          opacity: 0.6,
        },
      },
    }),
    floatingWithPrefixDarkBg: (props: any) => ({
      container: {
        _focusWithin: {
          label: {
            ...activeLabelStyles,
          },
        },
        "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
          {
            ...activeLabelStyles,
          },
        label: {
          top: 0,
          left: "60px",
          zIndex: 2,
          position: "absolute",
          backgroundColor: props.colorMode === "dark" ? "gray.800" : colors.bg,
          pointerEvents: "none",
          mx: 3,
          px: 1,
          my: 2,
          transformOrigin: "left top",
          opacity: 0.6,
        },
      },
    }),
    floatingWithIconDarkBg: (props: any) => ({
      container: {
        _focusWithin: {
          label: {
            ...activeLabelWithIconStyles,
          },
        },
        "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
          {
            ...activeLabelWithIconStyles,
          },
        label: {
          top: 0,
          left: "30px",
          zIndex: 2,
          position: "absolute",
          backgroundColor: props.colorMode === "dark" ? "gray.800" : colors.bg,
          pointerEvents: "none",
          mx: 3,
          px: 1,
          my: 2,
          transformOrigin: "left top",
          opacity: 0.6,
        },
      },
    }),
  },
};

export default Form;
