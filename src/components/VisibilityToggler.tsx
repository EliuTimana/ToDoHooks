import { Checkbox, FormControlLabel } from '@material-ui/core';
import { useContext, useState } from 'react';
import { ToDoContext } from '../context/ToDoContext';

export const VisibilityToggler = () => {
  const context = useContext(ToDoContext);
  const [show, setShow] = useState(true);
  const toggleShow = (checked: boolean) => {
    context.toggleCompletedVisibility();
    setShow(checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          id="chk-show"
          name="chk-show"
          checked={show}
          onChange={(e) => toggleShow(e.target.checked)}
          color={context.isDark ? 'secondary' : 'primary'}
        />
      }
      label={'Show completed items'}
    />
  );
};
