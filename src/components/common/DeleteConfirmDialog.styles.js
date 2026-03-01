export const deleteConfirmDialog = {
  root: {
    "& .MuiDialog-paper": {
      width: "80%",
      borderRadius: "8px",
    },
  },

  body: {
    message: {
      textAlign: "center",
      fontWeight: "bold",
    },
  },

  actions: {
    buttonGroup: {
      paddingBottom: 2,
      paddingX: 3,
      justifyContent: "center",
    },
    removeButton: {
      backgroundColor: "action.main",
      "&:hover": { backgroundColor: "action.main" },
    },
  },
};
