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
    <div className="form-check">
      <input
        type="checkbox"
        id="chk-show"
        className="form-check-input"
        checked={show}
        onChange={(e) => toggleShow(e.target.checked)}
      />
      <label className="form-check-label" htmlFor="chk-show">
        Show completed items
      </label>
    </div>
  );
};
