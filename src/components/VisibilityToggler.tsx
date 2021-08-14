import { Checkbox, Label } from '@rebass/forms';
import { useContext, useState } from 'react';
import { Box } from 'rebass';
import { ToDoContext } from '../context/ToDoContext';

export const VisibilityToggler = () => {
  const context = useContext(ToDoContext);
  const [show, setShow] = useState(true);
  const toggleShow = (checked: boolean) => {
    context.toggleCompletedVisibility();
    setShow(checked);
  };

  return (
    <Box display={'inline-block'}>
      <Label>
        <Checkbox
          id="chk-show"
          name="chk-show"
          checked={show}
          color={'blue'}
          bg={'white'}
          onChange={(e) => toggleShow(e.target.checked)}
        />
        Show completed items
      </Label>
    </Box>
  );
};
