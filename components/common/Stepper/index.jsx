import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Button from "../Button";

export const Stepper = ({
  increment = 1,
  postfix,
  value,
  onChange,
  addIcon = Icon.add,
  subtractIcon = Icon.minus
}) => (
  <>
    <Button variant="outlined" onClick={() => onChange(value - increment)}>
      {subtractIcon}
    </Button>
    <span>
      {value}
      {postfix}
    </span>
    <Button onClick={() => onChange(value + increment)}>{addIcon}</Button>
  </>
);

Stepper.propTypes = {
  increment: PropTypes.number,
  postfix: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Stepper;
