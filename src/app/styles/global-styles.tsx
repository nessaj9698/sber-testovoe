import { GlobalStyles } from "tss-react";

export const AppStyles = () => (
  <GlobalStyles
    styles={{
      "*": {
        fontFamily: "Helvetica",
      },
      body: {
        margin: 0,
      },
      h1: {
        width: "100%",
        textAlign: "center",
      },
      input: {
        width: "100%",
      },
      button: {
        '&[type="submit"]': {
          width: "100%",
          backgroundColor: "#12f612",
          color: "#fff",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#12f612",
          },
        },
      },
    }}
  />
);
