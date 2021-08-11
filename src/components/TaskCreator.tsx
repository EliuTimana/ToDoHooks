import { useContext, useState } from 'react';
import { ToDoContext } from '../context/ToDoContext';

interface Props {
  onToggleShow(show: boolean): void;
}

export const TaskCreator = ({ onToggleShow }: Props) => {
  const context = useContext(ToDoContext);
  const [text, setText] = useState('');
  const [show, setShow] = useState(true);

  const onKeyUp = (key: string) => {
    if (key.toLowerCase() === 'enter') {
      const trimmedText = text.trim();
      if (trimmedText) {
        context.addTask(trimmedText);
        setText('');
      }
    }
  };

  const toggleShow = (checked: boolean) => {
    onToggleShow(checked);
    setShow(checked);
  };

  return (
    <div className="input-group my-3">
      <input
        type="text"
        className="form-control"
        placeholder="Write a task and press ENTER"
        value={text}
        onKeyUp={(e) => onKeyUp(e.key)}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="input-group-text">
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
      </div>
    </div>
  );
};
