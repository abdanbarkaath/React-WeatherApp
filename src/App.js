import React from 'react';
import './App.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function App() {
  const [temperature, setTemperature] = React.useState('fahrenheit');

  const handleChange = (event) => {
    setTemperature(event.target.value);
  };

  return (
    <div className="App">
      <FormControl component="fieldset">
        <RadioGroup row={true} aria-label="gender" name="gender1" value={temperature} onChange={handleChange}>
          <FormControlLabel value="fahrenheit" control={<Radio color="primary" />} label="Fahrenheit" />
          <FormControlLabel value="celcius" control={<Radio color="primary" />} label="Celcius" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default App;
