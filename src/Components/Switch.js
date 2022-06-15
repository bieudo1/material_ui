import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function ControlledSwitches({handleDack, checked}) {

  console.log(checked);

  return (
    <Switch
      checked={checked}
      onChange={handleDack}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
