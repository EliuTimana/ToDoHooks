import { useContext, useState } from 'react';
import { ToDoContext } from '../context/ToDoContext';
import { VisibilityToggler } from './VisibilityToggler';

export const TaskCreator = () => {
  const context = useContext(ToDoContext);
  const [text, setText] = useState('');

  const onKeyUp = (key: string) => {
    if (key.toLowerCase() === 'enter') {
      const trimmedText = text.trim();
      if (trimmedText) {
        context.addTask(trimmedText);
        setText('');
      }
    }
  };

  return (
    <div className="my-3">
      <input
        type="text"
        className="form-control"
        placeholder="Write a task and press ENTER"
        value={text}
        onKeyUp={(e) => onKeyUp(e.key)}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <VisibilityToggler />
      </div>
    </div>
  );
};
