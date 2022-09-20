import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import { colors, boxShadows, borderRadius } from "../../common/GlobalStyles";

const container = {
  position: "fixed",
  bottom: "2%",
  width: "70%",
  height: 50
};

const chip = {
  border: `1px solid ${colors.default}`,
  borderRadius: borderRadius.rounded,
  width: 275,
  paddingLeft: 3,
  paddingRight: 3,
  paddingTop: 1,
  paddingBottom: 1,
  boxShadow: boxShadows.default,
  backgroundColor: "#fff"
};

export const BottomBar = ({ zoom, onZoomChange }) => (
  <div style={container}>
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Box sx={chip}>
          <Grid container spacing={2}>
            <Grid item xs>
              <Slider
                aria-label="Custom marks"
                value={zoom}
                getAriaValueText={() => zoom + "%"}
                step={25}
                max={150}
                min={25}
                onChange={(e) => onZoomChange(e.target.value)}
                marks
                valueLabelDisplay="on"
                size="small"
              />
            </Grid>
            <Grid item>
              <Input
                sx={{ width: 55 }}
                value={zoom}
                size="small"
                onChange={(e) => onZoomChange(parseInt(e.target.value, 10))}
                onBlur={(e) => {
                  if (e.target.value > 150) {
                    onZoomChange(150);
                    return;
                  }
                  if (e.target.value < 25) {
                    onZoomChange(25);
                    return;
                  }
                  onZoomChange(parseInt(e.target.value, 10));
                }}
                inputProps={{
                  step: 10,
                  min: 10,
                  max: 150,
                  type: "number",
                  "aria-labelledby": "input-slider"
                }}
                endAdornment={<span>%</span>}
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  </div>
);

export default BottomBar;
