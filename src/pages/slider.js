import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'

const useStyles = makeStyles({
  root: {
    width: 300,
    color: 'black',
  },
})

function valuetext(value) {
  return `${value}°C`
}

export default function RangeSlider() {
  const classes = useStyles()
  const [value, setValue] = React.useState([20, 37])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Temperature rane
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
      />
    </div>
  )
}
