import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
  root: {
    width: "50%"
  }
}));

const marks = [
  {
    value: 1,
    label: 1
  },
  {
    value: 2,
    label: 2
  },
  {
    value: 3,
    label: 3
  },
  {
    value: 4,
    label: 4
  },
  {
    value: 5,
    label: 5
  }
];

function valuetext(value) {
  return `${value}°C`;
}

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider">SELF RATING</Typography>
      <Slider
        marks={marks}
        defaultValue={1}
        getAriaValueText={valuetext}
        // aria-labelledby="discrete-slider"
        // valueLabelDisplay="auto"
        step={1}
        min={1}
        max={5}
      />
    </div>
  );
}
