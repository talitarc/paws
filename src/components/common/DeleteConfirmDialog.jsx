import PropTypes from "prop-types";
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
        <Button
          onClick={onClose}
          aria-label="Cancel action and keep item in the favourites list"
          color="inherit"
        >
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          aria-label="Confirm action and remove item from the favourites list"
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

DeleteConfirmDialog.propTypes = {
  open: PropTypes.bool,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default DeleteConfirmDialog;
