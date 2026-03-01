import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import { deleteConfirmDialog } from "./DeleteConfirmDialog.styles";

const DeleteConfirmDialog = ({ open, onClose, onConfirm, name }) => {
  const { dialogBox, dialogMessage, dialogButtonsBox, removeButton } =
    deleteConfirmDialog;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={dialogBox}
    >
      <DialogTitle id="alert-dialog-title" sx={dialogMessage}>
        Are you sure you want to remove <strong>{name}</strong> from your list?
      </DialogTitle>

      <DialogActions sx={dialogButtonsBox}>
        <Button onClick={onClose} color="inherit">
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          autoFocus
          variant="contained"
          sx={removeButton}
        >
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmDialog;
