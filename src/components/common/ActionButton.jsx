import PropTypes from "prop-types";
import { IconButton } from "@mui/material";

const ActionButton = ({ icon, color, onClick, ariaLabel }) => {
  return (
    <IconButton
      onClick={onClick}
      aria-label={ariaLabel}
      sx={{
        width: 80,
        height: 80,
        border: `2px solid ${color}`,
        backgroundColor: color,
        color: "white",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          bgcolor: color,
          color: "white",
          transform: "scale(1.1)",
          boxShadow: `0 0 15px ${color}`,
        },
      }}
    >
      {icon}
    </IconButton>
  );
};

ActionButton.propTypes = {
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default ActionButton;
