import PropTypes from "prop-types";

function SessionsTool({ active, payload }) {
    
  if (active) {
    return (
      <div className="sessionsTool">
        <div className="sessionsTool__time">{payload[0].value}min</div>
      </div>
    );
  }
  return null;
}

SessionsTool.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default SessionsTool;