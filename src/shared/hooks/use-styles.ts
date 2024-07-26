import { tss } from "tss-react";

export const useStyles = tss.create({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formWrapper: {
    display: "flex",
    backgroundColor: "#fff",
    padding: "1rem",
    flexWrap: "wrap",
    justifyContent: "center",
    form: {
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },
  tableWrapper: {
    maxHeight: "65vh",
    overflowX: "hidden",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  formHeading: {
    textAlign: "center",
    width: "100%",
  },
  backButton: {
    backgroundColor: "#a097f4",
    padding: "8px",
    borderRadius: "10px",
    maxWidth: "200px",
    color: "#fff",
    cursor: "pointer",
    border: "none",
    alignSelf: "start",
  },
  entitiesList: {
    maxWidth: "60vw",
    backgroundColor: "#fff",
    borderRadius: "10px",
  },
  pageInner: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "#8ad7ff",
    button: {
      width: "60%",
      marginTop: "20px",
    },
  },
  addButton: {
    backgroundColor: "#12f612",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#12f612",
    },
  },
});
