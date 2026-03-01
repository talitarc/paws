import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import { deleteConfirmDialog } from "./DeleteConfirmDialog.styles";

const DeleteConfirmDialog = ({ open, onClose, onConfirm, name }) => {
  const { root, body, actions } = deleteConfirmDialog;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={root}
    >
      <DialogTitle id="alert-dialog-title" sx={body.message}>
        Are you sure you want to remove <strong>{name}</strong> from your list?
      </DialogTitle>

      <DialogActions sx={actions.buttonGroup}>
        <Button onClick={onClose} color="inherit">
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          autoFocus
          variant="contained"
          sx={actions.removeButton}
        >
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmDialog;
